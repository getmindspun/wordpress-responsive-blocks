<?php
declare(strict_types=1);

namespace MRBLX;

defined( 'ABSPATH' ) || exit;

const PROPERTIES = array(
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
    'customCSS',
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
    'textAlign',
    'tableLayout',
    'textTransform',
    'top',
    'verticalAlign',
    'whiteSpace',
    'width',
);

/**
 * Creates minimized CSS rulesets
 */
class CSSBuilder {



    /**
     * List of declarations indexed by media type.
     *
     * @var array
     */
    protected array $state = array(
        'desktop' => array(),
        'desktopHover' => array(),
        'tablet' => array(),
        'tabletHover' => array(),
        'mobile' => array(),
        'mobileHover' => array(),
    );

    /**
     * Add all attributes/properties.
     *
     * @param array $attributes
     * @return void
     */
    public function add_attributes( array $attributes ) {
        foreach ( $attributes as $name => $value ) {
            $this->add_property( $name, $value );
        }
    }

    /**
     * Add a new property to the right state.
     *
     * @param string              $name
     * @param string|integer|null $value
     * @return void
     */
    protected function add_property( string $name, $value ): void {
        $property = new Property( $name );
        if ( in_array( $property->name, PROPERTIES ) && ( null !== $value ) ) {
            $state = &$this->state[ $this->state_name( $property ) ];
            $state[ $property->name ] = $value;
        }
    }

    /**
     * Gets the state key.
     *
     * @param Property $property
     * @return string
     */
    private function state_name( Property $property ): string {
        switch ( $property->device ) {
            case 'mobile':
                return $property->hover ? 'mobileHover' : 'mobile';
            case 'tablet':
                return $property->hover ? 'tabletHover' : 'tablet';
        }
        return $property->hover ? 'desktopHover' : 'desktop';
    }

    /**
     * Generate the CSS using the given selector.
     *
     * @param string $id
     * @param array  $options
     * @return string
     */
    public function to_css( string $id, array $options = array() ): string {
        $selector = $options['selector'] ?? null;

        $rulesets = array();

        if ( ! empty( $this->state['desktop'] ) ) {
            $ruleset = $this->ruleset( $id, $this->state['desktop'], $selector );
            if ( $ruleset ) {
                $rulesets[] = $ruleset;
            }
            if ( $this->state['desktop']['customCSS'] ?? '' ) {
                $rulesets[] = $this->state['desktop']['customCSS'];
            }
        }
        if ( ! empty( $this->state['desktopHover'] ) ) {
            $rulesets[] = $this->ruleset( $id, $this->state['desktopHover'], $selector, true );
        }

        if ( ! empty( $this->state['tablet'] ) ) {
            $ruleset = $this->ruleset( $id, $this->state['tablet'], $selector );
            if ( $ruleset ) {
                $rulesets[] = '@media (max-width:1024px){' . $ruleset . '}';
            }
            if ( $this->state['tablet']['customCSS'] ?? '' ) {
                $rulesets[] = '@media (max-width:1024px){' . $this->state['tablet']['customCSS'] . '}';
            }
        }
        if ( ! empty( $this->state['tabletHover'] ) ) {
            $rulesets[] = '@media (max-width:1024px){' . $this->ruleset( $id, $this->state['tabletHover'], $selector, true ) . '}';
        }

        if ( ! empty( $this->state['mobile'] ) ) {
            $ruleset = $this->ruleset( $id, $this->state['mobile'], $selector );
            if ( $ruleset ) {
                $rulesets[] = '@media (max-width:480px){' . $ruleset . '}';
            }
            if ( $this->state['mobile']['customCSS'] ?? '' ) {
                $rulesets[] = '@media (max-width:480px){' . $this->state['mobile']['customCSS'] . '}';
            }
        }
        if ( ! empty( $this->state['mobileHover'] ) ) {
            $rulesets[] = '@media (max-width:480px){' . $this->ruleset( $id, $this->state['mobileHover'], $selector, true ) . '}';
        }

        return join( "\n", $rulesets );
    }

    /**
     * Creates a ruleset for the selector from the given style.
     *
     * @param string      $id
     * @param array       $style
     * @param string|null $selector
     * @param bool        $hover
     * @return string
     */
    private function ruleset( string $id, array $style, string $selector = null, bool $hover = false ): string {
        $array = array();

        foreach ( $style as $name => $value ) {
            if ( 'customCSS' !== $name ) {
                $property = self::kebab_case( $name );
                $array[] = "$property:$value";
            }
        }

        $prefix = "#$id";
        if ( $selector ) {
            $prefix .= " $selector";
        }
        if ( $hover ) {
            $prefix .= ':hover';
        }

        return ( ! empty( $array ) ) ? "$prefix{" . join( ';', $array ) . '}' : '';
    }

    /**
     * Converts the JS or underscore name to a CSS property name.
     *
     * @param string $name
     *
     * @return string
     */
    private static function kebab_case( string $name ): string {
        $property = strtolower( preg_replace( '/(?<!^)[A-Z]/', '-$0', $name ) );
        return str_replace( '_', '-', $property );
    }
}
