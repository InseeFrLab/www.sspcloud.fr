
import type { LocalizedString, Language} from "../i18n";
import { localizedStringToString } from "../i18n";
import type { EducationalResourceCategory, EducationalResource, EducationalResourceDirectory } from "./educationalResources";
import  { educationalResources } from "./educationalResources";
import { id } from "tsafe/id";
import { objectKeys } from "tsafe/objectKeys";
import { matchEducationalResourceDirectory } from "./matchEducationalResourceDirectory";
import { assert } from "tsafe/assert";

export type State =
	State.GroupedByCategory |
	State.ShowAllInCategory |
	State.NotCategorized;

export declare namespace State {

	type Common = {
		path: LocalizedString[];
		/** Undefined if root */
		directory: {
			authors: LocalizedString[];
			imageUrl: string | undefined;
		} | undefined;
	};

	export type GroupedByCategory = Common & {
		stateDescription: "grouped by category";
		cardsByCategory: Record<EducationalResourceCategory, {
			total: number;
			cards: Card[];
		} | undefined>;
	};

	export type ShowAllInCategory = Common &{
		stateDescription: "show all in category";
		category: EducationalResourceCategory;
		cards: Card[];
	};

	export type NotCategorized = Common & {
		stateDescription: "not categorized";
		cards: Card[];
	};

}

export type Card = Card.File | Card.Directory;

export declare namespace Card {
	export type Common = {
		name: LocalizedString;
		authors: LocalizedString[];
		abstract: LocalizedString;
		imageUrl: string | undefined;
		timeRequired: number | undefined;
	};

	export type File = Common & {
		isDirectory: false;
		deploymentUrl?: string;
		articleUrl?: string;
	};

	export type Directory = Common & {
		isDirectory: true;
	};
}

function directoryToCard(
	directory: EducationalResourceDirectory
): {
	card: Card.Directory;
	categories: EducationalResourceCategory[];
} {

	const resolvedParts =
		directory.parts
			.map(nodeOrDir => matchEducationalResourceDirectory(nodeOrDir) ?
				directoryToCard(nodeOrDir).card :
				resourceToCard(nodeOrDir)
			);

	const card: Card.Directory = {
		"name": directory.name,
		"authors": resolvedParts
			.map(({ authors }) => authors)
			.reduce((prev, curr) => [...prev, ...curr], []),
		"abstract": directory.abstract,
		"imageUrl": resolvedParts
			.find(({ imageUrl }) => imageUrl !== undefined)?.imageUrl ?? undefined,
		"timeRequired": resolvedParts
			.map(({ timeRequired }) => timeRequired ?? 0)
			.reduce((prev, curr) => prev + curr, 0) || undefined,
		"isDirectory": true,
	};

	const categories: EducationalResourceCategory[] = [];

	return { card, categories };


};

function resourceToCard(educationalResource: EducationalResource): Card.File {

	const { name, authors, abstract, imageUrl, timeRequired, deploymentUrl, articleUrl } = educationalResource;

	return {
		name,
		authors,
		abstract,
		imageUrl,
		timeRequired,
		"isDirectory": false,
		deploymentUrl,
		articleUrl,
	};
}

export type RouteParams = {
	path: string[];
	category: EducationalResourceCategory | undefined;
	search: string;
};

const indexingLanguage: Language = "en";

const { resolvePath } = (() => {

	function resolvePathRec(
		params: {
			path: string[],
			reLocalizedPath: LocalizedString[];
			parts: (EducationalResource | EducationalResourceDirectory)[];
			parentDirectory: State["directory"];
		}
	): {
		parts: (EducationalResource | EducationalResourceDirectory)[];
		directory: State["directory"];
		reLocalizedPath: LocalizedString[];
	} {

		const {
			path,
			parts,
			parentDirectory,
			reLocalizedPath
		} = params;

		if (path.length === 0) {

			return {
				parts,
				"directory": parentDirectory,
				reLocalizedPath
			};

		}

		const [next, ...rest] = path;

		const directory = parts.find(({ name }) => name === next);

		assert(matchEducationalResourceDirectory(directory));

		return resolvePathRec({
			"parentDirectory": directoryToCard(directory).card,
			"parts": directory.parts,
			"path": rest,
			"reLocalizedPath": [
				...reLocalizedPath,
				directory.name
			]
		});

	}


	function resolvePath(
		params: {
			path: string[]
		}
	) {

		const { path } = params;

		return resolvePathRec({
			path,
			"parentDirectory": undefined,
			"parts": educationalResources,
			"reLocalizedPath": []
		});
	}

	return { resolvePath };


})();


export function getState(
	params: {
		routeParams: RouteParams
	}
): State {

	const { routeParams } = params;

	const { path, category, search } = routeParams;

	const { directory, parts, reLocalizedPath } = resolvePath({ path });

	const cardsByCategory: Record<
		EducationalResourceCategory,
		Card[]
	> = {
		"datascience with R and Python": [],
		"statistics with R": [],
		"step by step with the datalab": []
	};

	parts
		.filter(educationalResourceOrDirectory =>
			JSON.stringify(educationalResourceOrDirectory)
				.toLowerCase()
				.includes(search.toLowerCase())
		)
		.forEach(educationalResourceOrDirectory => {

			if (matchEducationalResourceDirectory(educationalResourceOrDirectory)) {

				const { card, categories } = directoryToCard(educationalResourceOrDirectory);

				categories.forEach(category =>
					cardsByCategory[category].push(card)
				);

			} else {

				cardsByCategory[educationalResourceOrDirectory.category]
					.push(resourceToCard(educationalResourceOrDirectory));

			}

		});

	if (category !== undefined) {

		return id<State.ShowAllInCategory>({
			"stateDescription": "show all in category",
			"path": reLocalizedPath,
			category,
			directory,
			"cards": cardsByCategory[category]
		});

	}

	if (
		search !== undefined ||
		objectKeys(cardsByCategory)
			.filter(category => cardsByCategory[category].length > 0)
			.length >= 2
	) {

		return id<State.NotCategorized>({
			"stateDescription": "not categorized",
			"path": reLocalizedPath,
			directory,
			"cards":
				objectKeys(cardsByCategory)
					.map(category => cardsByCategory[category])
					.reduce((prev, curr) => [...curr, ...prev], [])
		});

	}

	return id<State.GroupedByCategory>({
		"stateDescription": "grouped by category",
		"path": reLocalizedPath,
		directory,
		"cardsByCategory": (() => {

			const out: State.GroupedByCategory["cardsByCategory"] = {} as any;

			objectKeys(cardsByCategory)
				.forEach(category => {

					const cards = cardsByCategory[category];

					out[category] = cards.length === 0 ? undefined : {
						"total": cards.length,
						"cards": cards.slice(0, 3)
					};

				});

			return out;

		})()
	});

}

export function createReducers(
	params: {
		setRouteParams(
			setRouteParamsAction: (previousRouteParams: RouteParams) => RouteParams
		): void;
	}
): {
	navigateUp(): void;
	navigateTo(params: { name: LocalizedString; }): void;
	showAllInCategory(params: { category: EducationalResourceCategory; }): void;
	showAllCategories(): void;
	setSearch(params: { search: string }): void;
} {

	const { setRouteParams } = params;

	return {
		"navigateUp": () =>
			setRouteParams(previousRouteParams => ({
				"path": previousRouteParams.path.slice(-1, 1),
				"category": undefined,
				"search": ""
			})),
		"navigateTo": ({ name }) =>
			setRouteParams(previousRouteParams => ({
				"path": [...previousRouteParams.path, localizedStringToString(name, indexingLanguage)],
				"category": undefined,
				"search": "",
			})),
		"showAllInCategory": ({ category }) =>
			setRouteParams(previousRouteParams => ({
				"path": previousRouteParams.path,
				category,
				"search": ""
			})),
		"showAllCategories": () =>
			setRouteParams(previousRouteParams => ({
				"path": previousRouteParams.path,
				"category": undefined,
				"search": ""
			})),
		"setSearch": ({ search }) =>
			setRouteParams(previousRouteParams => ({
				...previousRouteParams,
				search
			})),
	};

}


