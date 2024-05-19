import { CSSProperties } from 'react';
import { kebabCase } from 'change-case';
import { BlockCSSProperties } from '../types';

const PROPERTIES = [
	'accentColor',
	'alignItems',
	'backgroundColor',
	'backgroundImage',
	'backgroundSize',
	'borderBottom',
	'borderBottomLeftRadius',
	'borderBottomRightRadius',
	'borderLeft',
	'borderRight',
	'borderTop',
	'borderTopLeftRadius',
	'borderTopRightRadius',
	'bottom',
	'boxShadow',
	'color',
	'customCSS', // ***
	'display',
	'flexBasis',
	'flexDirection',
	'flexGrow',
	'flexShrink',
	'flexWrap',
	'fontSize',
	'fontStyle',
	'fontWeight',
	'gap',
	'height',
	'justifyContent',
	'lineHeight',
	'listStyleType',
	'left',
	'margin',
	'marginBottom',
	'marginLeft',
	'marginRight',
	'marginTop',
	'maxHeight',
	'maxWidth',
	'minHeight',
	'minWidth',
	'padding',
	'paddingBottom',
	'paddingLeft',
	'paddingRight',
	'paddingTop',
	'position',
	'overflowX',
	'overflowY',
	'right',
	'tableLayout',
	'textAlign',
	'textTransform',
	'top',
	'verticalAlign',
	'whiteSpace',
	'width',
] as (keyof CSSProperties)[];

export type BuildCSSOptions = {
	selector?: string | null;
};

class Property {
	name: string;
	device: 'desktop' | 'tablet' | 'mobile' = 'desktop';
	hover: boolean = false;

	constructor(property: string) {
		this.name = property;
		this.parse();
	}

	private static lcfirst(name: string) {
		return name[0].toLowerCase() + name.slice(1);
	}

	private parse() {
		if (this.name.startsWith('tablet')) {
			this.name = Property.lcfirst(this.name.slice(6));
			this.device = 'tablet';
		} else if (this.name.startsWith('mobile')) {
			this.name = Property.lcfirst(this.name.slice(6));
			this.device = 'mobile';
		}

		if (this.name.endsWith('Hover')) {
			this.name = this.name.substring(0, this.name.length - 5);
			this.hover = true;
		}
	}
}

type CSSPropertiesWithCustomCSS = CSSProperties & {
	customCSS?: string;
};

export class CSSBuilder {
	state = {
		desktop: {} as CSSPropertiesWithCustomCSS,
		desktopHover: {} as CSSPropertiesWithCustomCSS,
		tablet: {} as CSSPropertiesWithCustomCSS,
		tabletHover: {} as CSSPropertiesWithCustomCSS,
		mobile: {} as CSSPropertiesWithCustomCSS,
		mobileHover: {} as CSSPropertiesWithCustomCSS,
	};

	private stateName(property: Property) {
		switch (property.device) {
			case 'mobile':
				return property.hover ? 'mobileHover' : 'mobile';
			case 'tablet':
				return property.hover ? 'tabletHover' : 'tablet';
		}
		return property.hover ? 'desktopHover' : 'desktop';
	}

	addProperty(name: string, value: any) {
		const property = new Property(name);
		if (
			PROPERTIES.includes(property.name as keyof CSSProperties) &&
			value !== undefined
		) {
			const state = this.state[this.stateName(property)];

			// @ts-ignore
			state[property.name as keyof CSSProperties] = value;
		}
	}

	addAttributes(attributes: BlockCSSProperties) {
		for (const [name, value] of Object.entries(attributes)) {
			this.addProperty(name, value);
		}
	}

	private ruleset(
		id: string,
		style: CSSPropertiesWithCustomCSS,
		selector: string | null = null,
		hover: boolean = false
	) {
		const array: string[] = [];
		for (const [name, value] of Object.entries(style)) {
			if (name !== 'customCSS') {
				const propertyName = kebabCase(name);
				array.push(`${propertyName}:${value}`);
			}
		}
		if (array.length === 0) {
			return '';
		}

		let $prefix = `#${id}`;
		if (selector) {
			$prefix += ` ${selector}`;
		}
		if (hover) {
			$prefix += ':hover';
		}

		return array.length > 0 ? `${$prefix}{${array.join(';')}}` : '';
	}

	private static isEmpty(state: CSSProperties) {
		return Object.keys(state).length === 0;
	}

	toCSS(id: string, options: BuildCSSOptions = {}) {
		const rulesets: string[] = [];

		if (!CSSBuilder.isEmpty(this.state.desktop)) {
			const ruleset = this.ruleset(
				id,
				this.state.desktop,
				options.selector
			);
			if (ruleset) {
				rulesets.push(ruleset);
			}
			if (this.state.desktop.customCSS) {
				rulesets.push(this.state.desktop.customCSS);
			}
		}
		if (!CSSBuilder.isEmpty(this.state.desktopHover)) {
			rulesets.push(
				this.ruleset(
					id,
					this.state.desktopHover,
					options.selector,
					true
				)
			);
		}

		if (!CSSBuilder.isEmpty(this.state.tablet)) {
			const ruleset = this.ruleset(
				id,
				this.state.tablet,
				options.selector
			);
			if (ruleset) {
				rulesets.push(`@media (max-width:1024px){${ruleset}}`);
			}
			if (this.state.tablet.customCSS) {
				rulesets.push(
					`@media (max-width:1024px){${this.state.tablet.customCSS}}`
				);
			}
		}
		if (!CSSBuilder.isEmpty(this.state.tabletHover)) {
			rulesets.push(
				'@media (max-width:1024px){' +
					this.ruleset(
						id,
						this.state.tabletHover,
						options.selector,
						true
					) +
					'}'
			);
		}

		if (!CSSBuilder.isEmpty(this.state.mobile)) {
			const ruleset = this.ruleset(
				id,
				this.state.mobile,
				options.selector
			);
			if (ruleset) {
				rulesets.push(`@media (max-width:480px){${ruleset}}`);
			}
			if (this.state.mobile.customCSS) {
				rulesets.push(
					`@media (max-width:480px){${this.state.mobile.customCSS}}`
				);
			}
		}
		if (!CSSBuilder.isEmpty(this.state.mobileHover)) {
			rulesets.push(
				'@media (max-width:480px){' +
					this.ruleset(
						id,
						this.state.mobileHover,
						options.selector,
						true
					) +
					'}'
			);
		}

		return rulesets.join('\n');
	}
}

export default function buildCSS(
	id: string,
	attributes: BlockCSSProperties,
	options: BuildCSSOptions = {}
): string {
	const builder = new CSSBuilder();
	builder.addAttributes(attributes);
	return builder.toCSS(id, options);
}
