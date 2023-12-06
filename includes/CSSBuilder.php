<?php
declare( strict_types=1 );

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
     * Create a ruleset for the parent div of block align elements.
     *
     * @param string $id
     * @param string $selector
     * @param string $block_align
     *
     * @return string
     */
    public function block_align_ruleset( string $id, string $selector, string $block_align ): string {
        $array = array(
            'display:flex',
            'flex-direction:row',
            'width:100%',
        );
        if ( ! in_array( $block_align, array( 'full', 'wide' ) ) ) {
            $array[] = "justify-content:$block_align";
        }
        return "#$id div:has(>$selector){" . join( ';', $array ) . '}';
    }

    /**
     * Creates a ruleset for the selector from the given style.
     *
     * @param string $id
     * @param string $selector
     * @param array  $style
     * @return string
     */
    private function ruleset( string $id, string $selector, array $style ): string {
        $array = array();

        foreach ( $style as $name => $value ) {
            $property = self::kebab_case( $name );
            if ( 'blockAlign' === $name ) {
                if ( in_array( $value, array( 'full', 'wide' ) ) ) {
                    $array[] = 'flex-grow:1';
                }
                if ( 'full' === $value ) {
                    $array[] = 'flex-basis:auto';
                }
            } else {
                $array[] = "$property:$value";
            }
        }

        return count( $array ) > 0 ? "#$id $selector" . '{' . join( ';', $array ) . '}' : '';
    }

    /**
     * Generate the CSS using the given selector.
     *
     * @param string $id
     * @param string $selector
     * @return string
     */
    public function to_css( string $id, string $selector ): string {
        $rulesets = array();

        if ( ! empty( $this->state['desktop'] ) ) {
            if ( $this->state['desktop']['blockAlign'] ?? '' ) {
                $rulesets[] = $this->block_align_ruleset( $id, $selector, $this->state['desktop']['blockAlign'] );
            }
            $ruleset = $this->ruleset( $id, $selector, $this->state['desktop'] );
            if ( $ruleset ) {
                $rulesets[] = $ruleset;
            }
        }
        if ( ! empty( $this->state['desktopHover'] ) ) {
            $rulesets[] = $this->ruleset( $id, $selector . ':hover', $this->state['desktopHover'] );
        }

        if ( ! empty( $this->state['tablet'] ) ) {
            if ( $this->state['tablet']['blockAlign'] ?? '' ) {
                $rulesets[] = '@media (max-width:780px){' . $this->block_align_ruleset( $id, $selector, $this->state['tablet']['blockAlign'] ) . '}';
            }
            $ruleset = $this->ruleset( $id, $selector, $this->state['tablet'] );
            if ( $ruleset ) {
                $rulesets[] = '@media (max-width:780px){' . $ruleset . '}';
            }
        }
        if ( ! empty( $this->state['tabletHover'] ) ) {
            $rulesets[] = '@media (max-width:780px){' . $this->ruleset( $id, $selector . ':hover', $this->state['tabletHover'] ) . '}';
        }

        if ( ! empty( $this->state['mobile'] ) ) {
            if ( $this->state['mobile']['blockAlign'] ?? '' ) {
                $rulesets[] = '@media (max-width:480px){' . $this->block_align_ruleset( $id, $selector, $this->state['mobile']['blockAlign'] ) . '}';
            }
            $ruleset = $this->ruleset( $id, $selector, $this->state['mobile'] );
            if ( $ruleset ) {
                $rulesets[] = '@media (max-width:480px){' . $ruleset . '}';
            }
        }
        if ( ! empty( $this->state['mobileHover'] ) ) {
            $rulesets[] = '@media (max-width:480px){' . $this->ruleset( $id, $selector . ':hover', $this->state['mobileHover'] ) . '}';
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
