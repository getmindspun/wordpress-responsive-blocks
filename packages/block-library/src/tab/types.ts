export type Props = {
    attributes: {
        blockId: string,
        label: string;
    }
    setAttributes: (props: Partial<Props['attributes']>) => void,
}
