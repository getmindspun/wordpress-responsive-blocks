import {TemplateArray} from '@wordpress/blocks';

export const TWO_COLUMNS = [
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {content: 'col', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {content: 'col', style: {textAlign: 'center'}}]
        ]]
    ]]
];

export const WIDE_LEFT = [
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {content: 'col', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: 'auto'}}, [
            ['mindspun/paragraph', {content: 'fitted', style: {textAlign: 'center'}}]
        ]]
    ]]
];

export const WIDE_RIGHT = [
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {colspan:{desktop: 'auto'}}, [
            ['mindspun/paragraph', {content: 'fitted', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {content: 'col', style: {textAlign: 'center'}}]
        ]]
    ]]
];

export const THREE_COLUMNS = [
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {colspan:{desktop: '4'}}, [
            ['mindspun/paragraph', {content: '4', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: '4'}}, [
            ['mindspun/paragraph', {content: '4', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: '4'}}, [
            ['mindspun/paragraph', {content: '4', style: {textAlign: 'center'}}]
        ]]
    ]],
] as TemplateArray;

export const FOUR_COLUMNS = [
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {colspan:{desktop: '3'}}, [
            ['mindspun/paragraph', {content: '3', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: '3'}}, [
            ['mindspun/paragraph', {content: '3', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: '3'}}, [
            ['mindspun/paragraph', {content: '3', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: '3'}}, [
            ['mindspun/paragraph', {content: '3', style: {textAlign: 'center'}}]
        ]]
    ]],
] as TemplateArray;
