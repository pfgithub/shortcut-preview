import React from 'react';
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
        safari: boolean;
    };
    render(): JSX.Element;
}
export {};
