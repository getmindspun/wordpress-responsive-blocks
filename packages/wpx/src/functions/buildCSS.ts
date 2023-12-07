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
    'color',
    'fontSize',
    'fontStyle',
    'fontWeight',
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

    private ruleset(id: string, style: CSSPropertiesWithBlockAlign, selector: string|null = null, hover: boolean = false) {
        const array: string[] = [];
        for (const [name, value] of Object.entries(style)) {
            const propertyName = kebabCase(name);
            array.push(`${propertyName}:${value}`);
        }
        if (array.length === 0) {
            return '';
        }

        let $prefix = `#${id}`;
        if (selector) {
            $prefix += ` ${selector}`
        }
        if (hover) {
            $prefix += ':hover';
        }

        return (array.length > 0) ? `${$prefix}{${array.join(';')}}` : '';
    }

    private static isEmpty(state: CSSProperties) {
        return Object.keys(state).length === 0
    }

    toCSS(id: string, selector: string | null = null) {
        const rulesets: string[] = [];

        if (!CSSBuilder.isEmpty(this.state.desktop)) {
            const ruleset = this.ruleset(id, this.state.desktop, selector );
            if (ruleset) {
                rulesets.push(ruleset);
            }
        }
        if (!CSSBuilder.isEmpty(this.state.desktopHover)) {
            rulesets.push(this.ruleset(id, this.state.desktopHover, selector, true));
        }

        if (!CSSBuilder.isEmpty(this.state.tablet)) {
            const ruleset = this.ruleset(id, this.state.tablet, selector);
            if (ruleset) {
                rulesets.push(`@media (max-width:780px){${ruleset}}`);
            }
        }
        if (!CSSBuilder.isEmpty(this.state.tabletHover)) {
            rulesets.push('@media (max-width:780px){' + this.ruleset(id,this.state.tabletHover, selector, true) + '}');
        }

        if (!CSSBuilder.isEmpty(this.state.mobile)) {
            const ruleset = this.ruleset(id, this.state.mobile, selector);
            if (ruleset) {
                rulesets.push(`@media (max-width:480px){${ruleset}}`);
            }
        }
        if (!CSSBuilder.isEmpty(this.state.mobileHover)) {
            rulesets.push('@media (max-width:480px){' + this.ruleset(id, this.state.mobileHover, selector, true) + '}');
        }

        return rulesets.join("\n");
    }
}

export default function buildCSS(id: string, attributes: BlockCSSProperties, selector: string|null = null): string {
    const builder = new CSSBuilder();
    builder.addAttributes(attributes);
    return builder.toCSS(id, selector);
}
