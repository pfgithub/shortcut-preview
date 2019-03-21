import React from 'react';
interface Props {
    data?: any;
    value?: any;
    icon?: string;
    missing?: string;
    indentation: number;
    getVariable: (attachment: any) => JSX.Element | null;
    onVariable: ({ uuid, name, icon, }: {
        uuid: string;
        name: string;
        icon: string;
    }) => void;
    onInteract?: (options: {
        type: 'action' | 'parameter';
        actionData: any;
    }) => void;
    metadata: {
        debug: boolean;
        expanded: boolean;
        safari: boolean;
    };
    fullValue: any;
}
export default class ActionBlock extends React.Component<Props> {
    constructor(props: Props);
    getParameterInput: (Param: any, value: any) => JSX.Element;
    parseWFValue: ({ Value, WFSerializationType }: any) => any;
    render(): JSX.Element;
}
export {};
