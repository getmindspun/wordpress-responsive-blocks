import {useSelect} from '@wordpress/data';
import {BlockInstance} from '@wordpress/blocks';

export type BlockEditorSelectors = {
    isBlockSelected: (clientId: string) => boolean;
    hasSelectedInnerBlock: (clientId: string) => boolean;
    getBlock: (clientId: string) => BlockInstance | null;
    getSelectedBlock: () => BlockInstance | null;
};

function hasBlock(block: BlockInstance, clientId: string) {
    if (block.clientId === clientId) {
        return true;
    }
    for (const innerBlock of block.innerBlocks) {
        if (hasBlock(innerBlock, clientId)) {
            return true;
        }
    }
    return false;
}

export function hasSelectedBlock(clientId: string) {
    const {selectedBlock, block} = useSelect(select => {
        const blockEditor = select('core/block-editor') as BlockEditorSelectors;
        return {
            selectedBlock: blockEditor.getSelectedBlock(),
            block: blockEditor.getBlock(clientId),
        }
    }, []);

    return (selectedBlock && block) ? hasBlock(block, selectedBlock.clientId) : false;
}
