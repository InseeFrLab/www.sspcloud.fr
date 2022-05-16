import moment from "moment";
import "moment/locale/fr";
import memoize from "memoizee";
import type { Language } from "./Language";

const getFormatByLng = (isSameYear: boolean) => ({
	/* spell-checker: disable */
	"fr": `dddd Do MMMM${isSameYear ? "" : " YYYY"}`,
	"en": `dddd, MMMM Do${isSameYear ? "" : " YYYY"}`,
	/* spell-checker: enable */
});

export const getFormattedDate = memoize(
	(dateTime: number, language: Language): string => {
		const date = new Date(dateTime);

		const isSameYear = date.getFullYear() === new Date().getFullYear();

		return moment(date).locale(language).format(getFormatByLng(isSameYear)[language]);
	},
);
