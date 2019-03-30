import React from 'react';
import { Attachment } from '../../interfaces/Attachment';
interface Props {
    data?: any;
    value?: any;
    icon?: string;
    missing?: string;
    indentation: number;
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
    getVariable: (attachment: Attachment) => JSX.Element | null;
    getParameterInput: (Param: any, value: any) => JSX.Element;
    parseWFValue: ({ Value, WFSerializationType }: any) => any;
    render(): JSX.Element;
}
export {};
