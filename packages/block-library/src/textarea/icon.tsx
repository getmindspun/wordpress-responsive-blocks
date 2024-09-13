import { SVG, Path } from '@wordpress/components';

const Icon = () => (
	<SVG
		width="48"
		height="48"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.5 4.5H43.5V43.5H4.5V4.5ZM7.5 7.5V40.5H40.5V7.5H7.5Z"
			fill="currentColor"
		/>
		<Path d="M22 12H38V15H22V12Z" fill="currentColor" />
		<Path d="M10 12H19V15H10V12Z" fill="currentColor" />
		<Path d="M22 19H38V22H22V19Z" fill="currentColor" />
		<Path d="M13 15H16V24H13V15Z" fill="currentColor" />
		<Path d="M10 27H38V30H10V27Z" fill="currentColor" />
		<Path d="M10 34H38V37H10V34Z" fill="currentColor" />
	</SVG>
);

export default Icon;
