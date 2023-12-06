<?php
/**
 * Plugin Name:       Mindspun Responsive Blocks for Gutenberg
 * Description:       Fully-responsive, easy-to-use Gutenberg blocks for your site.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           0.0.0
 * Author: Mindspun
 * Author URI: https://www.mindspun.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpx
 */

use WPX\CSSBuilder;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
    // Exit if accessed directly.
}

require_once __DIR__ . '/vendor/autoload.php';

/**
 * Helper function to build CSS from the block attributes using the given selector.
 *
 * @param string $id
 * @param string $selector
 * @param array  $attributes
 * @return string
 * @noinspection PhpUnused
 */
function wpx_build_css( string $id, string $selector, array $attributes ): string {
    $builder = new CSSBuilder();
    $builder->add_attributes( $attributes );
    return $builder->to_css( $id, $selector );
}

/**
 * Generate a style for the given block if needed.
 *
 * @param array $block
 * @return void
 */
function wpx_style_block( array $block ): void {
    $registry = WP_Block_Type_Registry::get_instance();

    $attrs = $block['attrs'] ?? array();

    $block_id = $attrs['blockId'] ?? '';
    if ( $block_id ) {
        /* @var array $attribute */
        foreach ( $attrs as $attr => $value ) {
            if ( is_array( $value ) ) {
                $block_type = $registry->get_registered( $block['blockName'] );
                if ( $block_type ) {
                    $selector = $block_type->attributes[ $attr ]['selector'] ?? '';
                    if ( $selector ) {
                        // Use wp_stripe_all_tags instead of an esc_* function to avoid converting
                        // characters like (>) to html entities.
                        echo '<style>' . wp_strip_all_tags( wpx_build_css( "wpx-$block_id", $selector, $value ) ) . '</style>';  # phpcs:ignore
                    }
                }
            }
        }
    }
}

if ( ! is_admin() ) {
    add_action(
        'wp_head',
        function () {
            $post = get_post();
            if ( $post && $post->post_content ) {
                $blocks = parse_blocks( $post->post_content );
                foreach ( $blocks as $block ) {
                    wpx_style_block( $block );
                }
            }
        }
    );
}

add_action(
    'admin_enqueue_scripts',
    function () {
        $asset_path = __DIR__ . '/dist/wpx.asset.php';
        $args = require_once $asset_path;

        $style_path = plugins_url( '/dist/wpx.css', __FILE__ );
        wp_register_style( 'wpx', $style_path, array(), $args['version'] );

        $script_path = plugins_url( '/dist/wpx.js', __FILE__ );
        wp_register_script( 'wpx', $script_path, $args['dependencies'], $args['version'] );
    }
);
