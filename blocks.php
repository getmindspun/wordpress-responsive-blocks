<?php
/**
 * Plugin Name:       Mindspun Responsive Blocks
 * Description:       Fully-responsive, easy-to-use Gutenberg blocks for your site.
 * Requires at least: 6.2
 * Requires PHP:      7.4
 * Version:           0.17.1
 * Author:            Mindspun
 * Author URI:        https://www.mindspun.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mrblx
 */

use MRBLX\Vendor\Mindspun\Framework\Autoloader;
use MRBLX\CSSBuilder;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
    // Exit if accessed directly.
}

require_once __DIR__ . '/vendor-prefixed/autoload.php';
Autoloader::autoload( 'MRBLX', __DIR__ . '/includes' );

/**
 * Helper function to build CSS from the block attributes using the given selector.
 *
 * @param string $id
 * @param array  $attributes
 * @param array  $options
 * @return string
 * @noinspection PhpUnused
 */
function mrblx_build_css( string $id, array $attributes, array $options = array() ): string {
    $builder = new CSSBuilder();
    $builder->add_attributes( $attributes );
    return $builder->to_css( $id, $options );
}

/**
 * Returns the CSS for one block, not including inner blocks.
 *
 * @param array $block
 * @return string
 */
function mrblx_block_css( array $block ): string {
    $css = '';
    $registry = WP_Block_Type_Registry::get_instance();

    $attrs = $block['attrs'] ?? array();

    $block_id = $attrs['blockId'] ?? '';
    if ( $block_id ) {
        /* @var array $attribute */
        foreach ( $attrs as $attr => $value ) {
            if ( is_array( $value ) && ! empty( $value ) ) {
                /* The selector can be specified inside the array or as a 'magic' property of the attribute. */
                $selector = $value['__selector__'] ?? null;
                if ( ! $selector ) {
                    $block_type = $registry->get_registered( $block['blockName'] );
                    if ( $block_type ) {
                        $selector = $block_type->attributes[ $attr ]['selector'] ?? null;
                    }
                }

                /* An attribute is a style if it is named 'style' or has a selector */
                if ( 'style' === $attr || $selector ) {
                    $css .= mrblx_build_css( "mrblx-$block_id", $value, array( 'selector' => $selector ) );
                }
            }
        }
    }
    return $css;
}

/**
 * Generate a style for the given block if needed.
 *
 * @param array $block
 * @return void
 */
function mrblx_style_block( array $block ): void {
    $attrs = $block['attrs'] ?? array();
    $block_id = $attrs['blockId'] ?? '';

    if ( $block_id ) {
        $css = mrblx_block_css( $block );
        if ( $css ) {
            wp_add_inline_style( 'style-mrblx', $css );
        }
    } else {
        // synced patterns/reusable blocks.
        $name = $block['blockName'] ?? null;
        $ref = $attrs['ref'] ?? false;
        if ( $ref && 'core/block' === $name ) {
            $post_id = intval( $ref );
            mrblx_style_post( get_post( $post_id ) );
        }
    }

    foreach ( $block['innerBlocks'] ?? array() as $inner_block ) {
        mrblx_style_block( $inner_block );
    }
}

/**
 * Handle a post or pattern.
 *
 * @param WP_Post|null $post
 * @return void
 */
function mrblx_style_post( ?WP_Post $post ) {
    // Keep track of the posts we've already seen in case the same pattern
    // is used multiple times on the same page.
    static $posts = array();

    if ( $post && $post->post_content && ! isset( $posts[ $post->ID ] ) ) {
        $blocks = parse_blocks( $post->post_content );
        foreach ( $blocks as $block ) {
            mrblx_style_block( $block );
        }
        $posts[ $post->ID ] = true;
    }
}

add_action(
    'enqueue_block_editor_assets',
    function () {
        $handle = '@mindspun/mrblx';
        wp_enqueue_style( $handle );
    }
);

add_action(
    'admin_enqueue_scripts',
    function () {
        $handle = '@mindspun/mrblx';
        $asset_path = __DIR__ . '/dist/mrblx.asset.php';
        $args = require_once $asset_path;

        $style_path = plugins_url( '/dist/mrblx.css', __FILE__ );
        wp_register_style( $handle, $style_path, array( 'wp-codemirror' ), $args['version'] );

        $script_path = plugins_url( '/dist/mrblx.js', __FILE__ );
        if ( ! wp_register_script( $handle, $script_path, $args['dependencies'], $args['version'] ) ) {
            error_log( 'Failed to register script: mrblx.js' );
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
        return array_merge( array( $category ), $categories );
    }
);

/* Register our blocks. */
add_action(
    'init',
    function () {
        foreach ( scandir( __DIR__ . '/dist' ) as $name ) {
            if ( ! str_contains( $name, '.' ) ) {
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
function mrblx_enqueue_style() {
    if ( ! function_exists( 'get_plugin_data' ) ) {
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
    }

    $plugin_data = get_plugin_data( __FILE__ );
    wp_enqueue_style(
        'style-mrblx',
        plugins_url( 'dist/style-mrblx.css', __FILE__ ),
        array(),
        $plugin_data['Version']
    );
}

/* Global stylesheet for blocks that need it. This style is used in both the front-end and the editor. */
add_action( 'wp_enqueue_scripts', 'mrblx_enqueue_style' );
add_action( 'admin_enqueue_scripts', 'mrblx_enqueue_style' );

if ( ! is_admin() ) {
    /* The wp_enqueue_scripts hook is the first hook where $post is defined. */
    add_action(
        'wp_enqueue_scripts',
        function () {
            /* Post content */
            mrblx_style_post( get_post() );

            /* If we have a block theme, look for blocks in the template. */
            global $_wp_current_template_content;
            if ( current_theme_supports( 'block-templates' ) && $_wp_current_template_content ) {
                $blocks = parse_blocks( $_wp_current_template_content );
                foreach ( $blocks as $block ) {
                    mrblx_style_block( $block );
                }
            }
        }
    );
}//end if
