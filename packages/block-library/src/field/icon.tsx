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
			d="M41 18H7V29H41V18ZM4 15V32H44V15H4Z"
			fill="currentColor"
		/>
		<Path d="M11 21H14V28H11V21Z" fill="currentColor" />
		<Path d="M19 11H22V35H19V11Z" fill="currentColor" />
		<Path d="M9 20H16V23H9V20Z" fill="currentColor" />
		<Path d="M17 9H24V12H17V9Z" fill="currentColor" />
		<Path d="M17 35H24V38H17V35Z" fill="currentColor" />
	</SVG>
);

export default Icon;
