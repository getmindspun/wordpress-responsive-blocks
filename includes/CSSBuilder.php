<?php
declare(strict_types=1);

namespace WPX;

defined( 'ABSPATH' ) || exit;

const PROPERTIES = array(
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
    'textTransform',
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
            $property = self::kebab_case( $name );
            $array[] = "$property:$value";
        }

        $prefix = "#$id";
        if ( $selector ) {
            $prefix .= " $selector";
        }
        if ( $hover ) {
            $prefix .= ':hover';
        }

        return ( count( $array ) > 0 ) ? "$prefix{" . join( ';', $array ) . '}' : '';
    }

    /**
     * Generate the CSS using the given selector.
     *
     * @param string $id
     * @param string|null $selector
     * @return string
     */
    public function to_css( string $id, string $selector = null ): string {
        $rulesets = array();

        if ( ! empty( $this->state['desktop'] ) ) {
            $ruleset = $this->ruleset( $id, $this->state['desktop'], $selector );
            if ( $ruleset ) {
                $rulesets[] = $ruleset;
            }
        }
        if ( ! empty( $this->state['desktopHover'] ) ) {
            $rulesets[] = $this->ruleset( $id, $this->state['desktopHover'], $selector, true );
        }

        if ( ! empty( $this->state['tablet'] ) ) {
            $ruleset = $this->ruleset( $id, $this->state['tablet'], $selector );
            if ( $ruleset ) {
                $rulesets[] = '@media (max-width:780px){' . $ruleset . '}';
            }
        }
        if ( ! empty( $this->state['tabletHover'] ) ) {
            $rulesets[] = '@media (max-width:780px){' . $this->ruleset( $id, $this->state['tabletHover'], $selector, true ) . '}';
        }

        if ( ! empty( $this->state['mobile'] ) ) {
            $ruleset = $this->ruleset( $id, $this->state['mobile'], $selector );
            if ( $ruleset ) {
                $rulesets[] = '@media (max-width:480px){' . $ruleset . '}';
            }
        }
        if ( ! empty( $this->state['mobileHover'] ) ) {
            $rulesets[] = '@media (max-width:480px){' . $this->ruleset( $id, $this->state['mobileHover'], $selector, true ) . '}';
        }

        return join( "\n", $rulesets );
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
