import {CSSProperties} from 'react';
import {kebabCase} from 'change-case';
import {BlockAlign, BlockCSSProperties} from '../types';

const PROPERTIES = [
    'backgroundColor',
    'backgroundImage',
    'borderBottom',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderLeft',
    'borderRight',
    'borderTop',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'blockAlign',
    'color',
    'fontSize',
    'margin',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'padding',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'textAlign',
    'textTransform'
] as (keyof CSSProperties)[];

class Property {

    name: string;
    device: 'desktop' | 'tablet' | 'mobile' = 'desktop';
    hover: boolean = false;


    constructor(property: string) {
        this.name = property;
        this.parse();
    }

    private static lcfirst(name: string) {
        return name[0].toLowerCase() + name.slice(1)
    }

    private parse(){
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

type CSSPropertiesWithBlockAlign = CSSProperties & {
    blockAlign: BlockAlign;
}

export class CSSBuilder {
    state = {
        desktop: {} as CSSPropertiesWithBlockAlign,
        desktopHover: {} as CSSPropertiesWithBlockAlign,
        tablet: {} as CSSPropertiesWithBlockAlign,
        tabletHover: {} as CSSPropertiesWithBlockAlign,
        mobile: {} as CSSPropertiesWithBlockAlign,
        mobileHover: {} as CSSPropertiesWithBlockAlign,
    }

    private stateName(property: Property) {
        switch (property.device) {
            case 'mobile':
                return property.hover ? 'mobileHover' : 'mobile';
            case 'tablet':
                return property.hover ? 'tabletHover' : 'tablet';
        }
        return property.hover ? 'desktopHover' : 'desktop'
    }

    addProperty(name: string, value: any) {
        const property = new Property(name);
        if (PROPERTIES.includes(property.name as keyof CSSProperties) && (value !== undefined)) {
            const state = this.state[this.stateName(property)];

            // @ts-ignore
            state[property.name as keyof CSSProperties] = value;
        }
    }

    addAttributes(attributes: BlockCSSProperties) {
        for (const [name, value] of Object.entries(attributes)) {
            this.addProperty(name, value)
        }
    }

    private blockAlignRuleset(id: string, selector: string, blockAlign: BlockAlign) {
        const array: string[] = [
            'display:flex',
            'flex-direction:row',
            'width:100%',
        ];
        if (!['full', 'wide'].includes(blockAlign)) {
            array.push(`justify-content:${blockAlign}`);
        }
        return `#${id} div:has(>${selector}) {${array.join(';')}}`;
    }

    private ruleset(id: string, selector: string, style: CSSPropertiesWithBlockAlign) {
        const array: string[] = [];
        for (const [name, value] of Object.entries(style)) {
            const propertyName = kebabCase(name);
            if (name === 'blockAlign') {
                if (['full', 'wide'].includes(value)) {
                    array.push('flex-grow:1');
                }
                if (value === 'full') {
                    array.push('flex-basis:auto');
                }
            } else {
                array.push(`${propertyName}:${value}`);
            }
        }
        return array.length > 0 ? `#${id} ${selector} {${array.join(';')}}` : '';
    }

    private static isEmpty(state: CSSProperties) {
        return Object.keys(state).length === 0
    }

    toCSS(id: string, selector: string) {
        const rulesets: string[] = [];

        if (!CSSBuilder.isEmpty(this.state.desktop)) {
            if (this.state.desktop.blockAlign) {
                rulesets.push(this.blockAlignRuleset(id, selector, this.state.desktop.blockAlign))
            }
            const ruleset = this.ruleset(id, selector, this.state.desktop);
            if (ruleset) {
                rulesets.push(ruleset);
            }
        }
        if (!CSSBuilder.isEmpty(this.state.desktopHover)) {
            rulesets.push(this.ruleset(id, selector + ':hover', this.state.desktopHover));
        }

        if (!CSSBuilder.isEmpty(this.state.tablet)) {
            if (this.state.tablet.blockAlign) {
                rulesets.push('@media (max-width:780px){' + this.blockAlignRuleset(id, selector, this.state.tablet.blockAlign) + '}');
            }
            const ruleset = this.ruleset(id, selector, this.state.tablet);
            if (ruleset) {
                rulesets.push(`@media (max-width:780px){${ruleset}}`);
            }
        }
        if (!CSSBuilder.isEmpty(this.state.tabletHover)) {
            rulesets.push('@media (max-width:780px){' + this.ruleset(id,selector + ':hover', this.state.tabletHover) + '}');
        }

        if (!CSSBuilder.isEmpty(this.state.mobile)) {
            if (this.state.mobile.blockAlign) {
                rulesets.push('@media (max-width:480px){' + this.blockAlignRuleset(id, selector, this.state.mobile.blockAlign) + '}');
            }
            const ruleset = this.ruleset(id, selector, this.state.mobile);
            if (ruleset) {
                rulesets.push(`@media (max-width:480px){${ruleset}}`);
            }
        }
        if (!CSSBuilder.isEmpty(this.state.mobileHover)) {
            rulesets.push('@media (max-width:480px){' + this.ruleset(id, selector + ':hover', this.state.mobileHover) + '}');
        }

        return rulesets.join("\n");
    }
}

export default function buildCSS(id: string, selector: string, attributes: BlockCSSProperties): string {
    const builder = new CSSBuilder();
    builder.addAttributes(attributes);
    return builder.toCSS(id, selector);
}
