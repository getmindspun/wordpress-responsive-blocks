import {TemplateArray} from '@wordpress/blocks';

export default function (blockId: string) {
    return [
        ['mindspun/show-hide-inner', {}, [
            ['mindspun/container', {style: {backgroundColor:'#005FFE',display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}, [
                ['mindspun/paragraph', {content: 'Inner Block 1', style:{textAlign:'center',fontSize:'1.75rem',color:'#fff'}}]
            ]]
        ]],
        ['mindspun/show-hide-inner', {}, [
            ['mindspun/container', {style: {backgroundColor:'#FF000D',display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}, [
                ['mindspun/paragraph', {content: 'Inner Block 2', style:{textAlign:'center',fontSize:'1.75rem',color:'#fff'}}]
            ]]
        ]],
        ['mindspun/show-hide-inner', {}, [
            ['mindspun/container', {style: {backgroundColor:'#0ADD08',display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}, [
                ['mindspun/paragraph', {content: 'Inner Block 3', style:{textAlign:'center',fontSize:'1.75rem',color:'#fff'}}]
            ]]
        ]]
    ] as TemplateArray;
}
