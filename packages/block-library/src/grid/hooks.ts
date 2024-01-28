import {useDispatch, useSelect} from '@wordpress/data';
import {BlockInstance} from '@wordpress/blocks';
import {store as blockEditor} from '@wordpress/block-editor';

export type BlockEditorSelectors = {
    isBlockSelected: (clientId: string) => boolean;
    hasSelectedInnerBlock: (clientId: string) => boolean;
    getBlock: (clientId: string) => BlockInstance | null;
    getSelectedBlock: () => BlockInstance | null;
};

export type BlockEditorActions = {
    replaceInnerBlocks: (rootClientId: string, blocks: Object[], updateSelection?: boolean, initialPosition?: 0|1|null) => void;
}

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
        const selectors = select(blockEditor) as BlockEditorSelectors;
        return {
            selectedBlock: selectors.getSelectedBlock(),
            block: selectors.getBlock(clientId),
        }
    }, []);

    return (selectedBlock && block) ? hasBlock(block, selectedBlock.clientId) : false;
}

export function getBlock(clientId: string): BlockInstance | null {
    return useSelect(
        (select) => {
            return (select(blockEditor) as BlockEditorSelectors).getBlock(clientId);
        }, []);
}

export function useBlockEditor() {
    return useDispatch(blockEditor) as BlockEditorActions;
}

