<?php
/**
 * Plugin Name:       Mindspun Responsive Blocks for Gutenberg
 * Description:       Fully-responsive, easy-to-use Gutenberg blocks for your site.
 * Requires at least: 6.2
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
 * @param string      $id
 * @param array       $attributes
 * @param string|null $selector
 * @return string
 * @noinspection PhpUnused
 */
function wpx_build_css( string $id, array $attributes, string $selector = null ): string {
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
                    $selector = $block_type->attributes[ $attr ]['selector'] ?? null;
                    // Use wp_stripe_all_tags instead of an esc_* function to avoid converting
                    // characters like (>) to html entities.
                    echo '<style>' . wp_strip_all_tags(wpx_build_css("wpx-$block_id", $value, $selector)) . '</style>';  # phpcs:ignore
                }
            }
        }
    }

    foreach ( $block['innerBlocks'] ?? array() as $inner_block ) {
        wpx_style_block( $inner_block );
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
    'enqueue_block_editor_assets',
    function () {
        $handle = '@mindspun/wpx';
        $asset_path = __DIR__ . '/dist/wpx.asset.php';
        $args = require_once $asset_path;

        $style_path = plugins_url( '/dist/wpx.css', __FILE__ );
        wp_enqueue_style( $handle, $style_path, array(), $args['version'] );

        $script_path = plugins_url( '/dist/wpx.js', __FILE__ );
        if ( ! wp_register_script( $handle, $script_path, $args['dependencies'], $args['version'] ) ) {
            error_log( 'Failed to register script: wpx.js' );
        }
    }
);

/* Custom Block Editor category for our blocks. */
add_filter(
    'block_categories_all',
    function ( $categories ) {
        $category = array(
            'slug' => 'mindspun-responsive-blocks',
            'title' => 'Mindspun Responsive Blocks',
        );

        return array( $category ) + $categories;
    }
);

/* Register our blocks. */
add_action(
    'init',
    function () {
        foreach ( scandir( __DIR__ . '/dist' ) as $name ) {
            if ( ! in_array( $name, array( '..', '.' ) ) ) {
                register_block_type( __DIR__ . '/dist/' . $name );
            }
        }
    }
);

/**
 * Registers our front-end style.
 *
 * @return void
 */
function wpx_enqueue_style() {
    if ( ! function_exists( 'get_plugin_data' ) ) {
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
    }

    $plugin_data = get_plugin_data( __FILE__ );
    wp_register_style(
        'style-wpx',
        plugins_url( 'dist/style-wpx.css', __FILE__ ),
        array(),
        $plugin_data['Version']
    );
}

/* Global stylesheet for blocks that need it. This style is used in both the front-end and the editor. */
add_action( 'wp_enqueue_scripts', 'wpx_enqueue_style' );
add_action( 'admin_enqueue_scripts', 'wpx_enqueue_style' );
