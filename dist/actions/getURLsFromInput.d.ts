declare const identifier = "is.workflow.actions.detect.link";
declare const icon = "URL";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CoercionItemClass: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    ShortName: string;
};
export { identifier, icon, WFAction };
