<?php
declare(strict_types=1);

namespace MRBLX\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * Enabled the REST API endpoint(s)?
 */
class EnableRestApiField {

    /**
     * Top-level page slug.
     *
     * @var string $page
     */
    private string $page;

    /**
     * Constructor.
     *
     * @param string $page
     */
    public function __construct( string $page ) {
        $this->page = $page;
    }

    /**
     * Add all settings for this section.
     */
    public function add_settings_field() {
        add_settings_field(
            'mrblx_field_rest_api_enable',
            __( 'Enable REST API?', 'mrblx' ),
            array( $this, 'callback' ),
            $this->page,
            'default',
            array(
                'label_for'         => 'mrblx_field_rest_api_enable',
                'class'             => 'mrblx_row',
            )
        );
    }

    /**
     * Enable REST API field callback
     *
     * @param array $args
     *
     * @noinspection PhpUnusedParameterInspection
     * */
    public function callback( array $args ) {
        // Get the value of the setting we've registered with register_setting().
        $options = get_option( 'mrblx_options' );
        ?>
        <fieldset>
            <legend class="screen-reader-text">
                <span><?php esc_html_e( 'Enable REST API?', 'mrblx' ); ?></span>
            </legend>
            <label for="rest_api_enabled">
                <input name="mrblx_options[rest_api_enabled]" type="hidden" value="0" />
                <input name="mrblx_options[rest_api_enabled]" type="checkbox" id="rest_api_enabled" value="1" <?php checked( $options['rest_api_enabled'] ?? true ); ?>/>
                <?php esc_html_e( 'Should the REST API be used?', 'mrblx' ); ?>
            </label>
        </fieldset>
        <?php
    }
}
