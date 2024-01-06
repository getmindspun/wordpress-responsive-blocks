import {TemplateArray} from '@wordpress/blocks';

const TEMPLATE = [
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {text: 'col', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {text: 'col', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {text: 'col', style: {textAlign: 'center'}}]
        ]]
    ]],
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {}, [
            ['mindspun/paragraph', {text: 'col', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: 'auto'}}, [
            ['mindspun/paragraph', {text: 'fitted', style: {textAlign: 'center'}}]
        ]],
    ]],
    ['mindspun/grid-row', {}, [
        ['mindspun/grid-col', {colspan:{desktop: '6'}}, [
            ['mindspun/paragraph', {text: '6', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: '4'}}, [
            ['mindspun/paragraph', {text: '4', style: {textAlign: 'center'}}]
        ]],
        ['mindspun/grid-col', {colspan:{desktop: '2'}}, [
            ['mindspun/paragraph', {text: '2', style: {textAlign: 'center'}}]
        ]]
    ]],
] as TemplateArray;

export default TEMPLATE;