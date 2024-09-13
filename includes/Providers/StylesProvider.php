<?php
declare(strict_types=1);

namespace MRBLX\Providers;

use MRBLX\Vendor\Mindspun\Framework\Provider;

defined( 'ABSPATH' ) || exit;

/**
 * Singleton class to hold built styles until they are ready to be rendered.
 *
 * @method static StylesProvider provide()
 */
class StylesProvider extends Provider {
    /**
     * Accumulated styles.
     *
     * @var array
     */
    private array $styles = array();

    /**
     * Add more CSS;
     *
     * @param string $css
     */
    public function add( string $css ): void {
        $this->styles[] = $css;
    }

    /**
     * Get and reset the styles
     */
    public function get_clean(): string {
        if ( ! empty( $this->styles ) ) {
            $styles = $this->styles;
            $this->styles = array();
            return join( "\n", $styles );
        }
        return '';
    }
}
