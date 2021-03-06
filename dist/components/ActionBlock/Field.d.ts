interface Props {
    value: string;
    data: {
        Placeholder?: string;
        Multiline?: boolean;
        TextAlignment?: 'Left' | 'Right';
    };
    className?: string;
}
declare const _default: ({ value, data: { Placeholder, Multiline, TextAlignment }, className, }: Props) => JSX.Element;
export default _default;
