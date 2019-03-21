import React from 'react';
import { Attachment } from '../interfaces/Attachment';
interface Props {
    data: any;
    debug?: boolean;
    onInteract?: (options: {
        type: 'action' | 'parameter';
        actionData: any;
    }) => void;
    expanded?: boolean;
}
export default class dataPreview extends React.Component<Props> {
    state: {
        magicVariables: {};
        safari: boolean;
    };
    addVariable: ({ uuid, name, icon, }: {
        uuid: string;
        name: string;
        icon: string;
    }) => void;
    getVariable: (attachment: Attachment) => JSX.Element | null;
    render(): JSX.Element;
}
export {};
