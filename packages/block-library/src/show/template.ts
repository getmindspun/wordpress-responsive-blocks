import { Template } from '@wordpress/blocks';

export default function (blockId: string) {
	const target = `mrblx-${blockId}`;
	return [
		[
			'mindspun/show-hide-inner',
			{target:`${target}-x1`},
			[
				[
					'mindspun/container',
					{
						style: {
							backgroundColor: '#005FFE',
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							justifyContent: 'center',
						},
					},
					[
						[
							'mindspun/paragraph',
							{
								content: 'Inner Block 1',
								style: {
									textAlign: 'center',
									fontSize: '1.75rem',
									color: '#fff',
									marginBottom: '.25em'
								},
							},
						],
						['mindspun/buttons', {style:{justifyContent:'center'}}, [
							['mindspun/button', {text:'Show #2',customEvent:{type:'mrblx.show',detail:`${target}-x2`},style:{backgroundColor:'#FF000D'}}],
							['mindspun/button', {text:'Show #3',customEvent:{type:'mrblx.show',detail:`${target}-x3`},style:{backgroundColor:'#0ADD08'}}],
						]]
					],
				],
			],
		],
		[
			'mindspun/show-hide-inner',
			{target:`${target}-x2`},
			[
				[
					'mindspun/container',
					{
						style: {
							backgroundColor: '#FF000D',
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							justifyContent: 'center',
						},
					},
					[
						[
							'mindspun/paragraph',
							{
								content: 'Inner Block 2',
								style: {
									textAlign: 'center',
									fontSize: '1.75rem',
									color: '#fff',
									marginBottom: '.25em'
								},
							},
						],
						['mindspun/buttons', {style:{justifyContent:'center'}}, [
							['mindspun/button', {text:'Show #1',customEvent:{type:'mrblx.show',detail:`${target}-x1`},style:{backgroundColor:'#005FFE'}}],
							['mindspun/button', {text:'Show #3',customEvent:{type:'mrblx.show',detail:`${target}-x3`},style:{backgroundColor:'#0ADD08'}}],
						]]
					],
				],
			],
		],
		[
			'mindspun/show-hide-inner',
			{target:`${target}-x3`},
			[
				[
					'mindspun/container',
					{
						style: {
							backgroundColor: '#0ADD08',
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							justifyContent: 'center',
						},
					},
					[
						[
							'mindspun/paragraph',
							{
								content: 'Inner Block 3',
								style: {
									textAlign: 'center',
									fontSize: '1.75rem',
									color: '#fff',
									marginBottom: '.25em'
								},
							},
						],
						['mindspun/buttons', {style:{justifyContent:'center'}}, [
							['mindspun/button', {text:'Show #1',customEvent:{type:'mrblx.show',detail:`${target}-x1`},style:{backgroundColor:'#005FFE'}}],
							['mindspun/button', {text:'Show #2',customEvent:{type:'mrblx.show',detail:`${target}-x2`},style:{backgroundColor:'#FF000D'}}],
						]]
					],
				],
			],
		],
	] as Template[];
}
