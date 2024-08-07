<?php
declare( strict_types=1 );

namespace MRBLX\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * Simple settings page for this plugin.
 */
class SettingsPage {

    const PAGE_SLUG = 'mrblx';

    /**
     * Constructor.
     */
    public function __construct() {
        add_submenu_page(
            'options-general.php',
            'Mindspun Responsive Blocks',
            'Responsive Blocks',
            'manage_options',
            'mrblx',
            array( $this, 'add_menu_page_callback' )
        );
    }

    /**
     * Code that runs on the admin_init hook (after admin_menu).
     */
    public function admin_init() {
        register_setting( 'mrblx', MRBLX_OPTION );

        add_settings_section(
            'default',
            '',
            '__return_true',
            self::PAGE_SLUG
        );

        $enable_rest_api = new EnableRestApiField( self::PAGE_SLUG );
        $enable_rest_api->add_settings_field();

        $forms_enabled = new FormEmailsField( self::PAGE_SLUG );
        $forms_enabled->add_settings_field();
    }

    /**
     * Top level menu callback function.
     */
    public function add_menu_page_callback() {
        // check user capabilities.
        if ( ! current_user_can( 'manage_options' ) ) {
            return;
        }

        // show error/update messages.
        settings_errors( 'mrblx_messages' );
        ?>
        <div class="wrap">
            <h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
            <!--suppress HtmlUnknownTarget -->
            <form action="options.php" method="post">
                <?php
                settings_fields( 'mrblx' );
                do_settings_sections( 'mrblx' );
                submit_button( 'Save Settings' );
                ?>
            </form>
        </div>
        <?php
    }
}
