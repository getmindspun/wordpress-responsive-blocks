import type { TemplateArray } from '@wordpress/blocks';

const TEMPLATE = [
	[
		'mindspun/field',
		{
			label: 'Email',
			name: 'email',
			type: 'email',
			validation: { type: 'simple', required: true },
			help: 'Enter a valid email address.',
		},
	],
	[
		'mindspun/radio',
		{
			label: 'What email address is this?',
			name: 'emailType',
			required: true,
			options: [
				{ label: 'Personal', value: 'personal' },
				{ label: 'Work', value: 'work' },
				{ label: 'Other', value: 'other' },
			],
		},
	],
	[
		'mindspun/select',
		{
			label: 'How did you here about us?',
			name: 'source',
			multiple: true,
			required: true,
			options: [
				{ label: 'Online Advertisement', value: 'online' },
				{ label: 'Print Advertisement', value: 'print' },
				{ label: 'Newsletter', value: 'newsletter' },
				{ label: 'Other', value: 'other' },
			],
			help: 'Select all that apply.',
		},
	],
	[
		'mindspun/textarea',
		{
			label: 'Comments',
			name: 'comments',
			help: 'Please tell us what you think.',
			required: true,
		},
	],
	[
		'mindspun/checkbox',
		{
			label: '',
			name: 'terms',
			checkboxContent: 'I agree with the Terms & Conditions.',
		},
	],
	[
		'mindspun/container',
		{ style: { marginTop: '1em' } },
		[
			['mindspun/submit', { style: { marginRight: '1em' } }],
			['mindspun/submit', { type: 'reset' }],
		],
	],
] as TemplateArray;

export default TEMPLATE;
