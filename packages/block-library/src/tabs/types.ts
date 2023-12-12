import {BlockInstance} from '@wordpress/blocks';
import {BlockCSSProperties} from '@mindspun/wpx';

export type BlockStoreSelectors = {
    getSelectedBlock: () => BlockInstance | null,
    getClientIdsOfDescendants: (clientIds: string[]) => string[],
    getBlock: (clientId: string) => BlockInstance | null,
    getBlockParents: (clientId: string, ascending?: boolean) => string[],
    getBlockParentsByBlockName: (clientId: string, blockName: string | string[], ascending?: boolean) => string[];
}

export type Attributes = {
    blockId: string;
    header: BlockCSSProperties;
    tab: BlockCSSProperties,
    activeTab: BlockCSSProperties,
    content: BlockCSSProperties,
}

export type Props = {
    clientId: string;
    attributes: Attributes;
    setAttributes: (attributes: Partial<Attributes>) => void;
}
