
import * as core from '@actions/core';

export const inputNames = [
    "action_name",
    "github_token",
    "educational_resource"
] as const;

export const availableActions = [
    "update_educational_resources"
] as const;


export function getInputDescription(inputName: typeof inputNames[number]): string {
    switch(inputName){
        case "action_name": return [
            `Action to run, one of: `,
            availableActions.map(s=>`"${s}"`).join(", ")
        ].join("");
        case "github_token": return "GitHub Personal access token";
        case "educational_resource": return "A JSON formatted educational resource (EducationalResource | EducationalResourceDirectory)";
    }
}


export function getInputDefault(inputName: typeof inputNames[number]): string | undefined {

    switch(inputName){
        case "github_token": return "${{ github.token }}";
    }

}


const getInput = (inputName: typeof inputNames[number]) => {

    if (inputNames.indexOf(inputName) < 0) {
        throw new Error(`${inputName} expected`);
    }

    return core.getInput(inputName);

}


export function getActionParamsFactory<U extends typeof inputNames[number]>(
    params: {
        inputNameSubset: readonly U[]
    }
) {

    const { inputNameSubset } = params;

    function getActionParams() {

        const params: Record<U, string> = {} as any;

        inputNameSubset.forEach(inputName => params[inputName] = getInput(inputName));

        return params;

    };

    return { getActionParams };

}

export function getActionName(): typeof availableActions[number] {
    return getInput("action_name") as any;
}
