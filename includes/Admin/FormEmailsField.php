<?php
declare(strict_types=1);

namespace MRBLX\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * The form email(s) field.
 */
class FormEmailsField {

    /**
     * The containing page.
     *
     * @var string $section
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
            'mrblx_field_form_emails',
            __( 'Form Email(s)', 'mrblx' ),
            array( $this, 'callback' ),
            $this->page,
            'default',
            array(
                'label_for'         => 'mrblx_field_form_emails',
                'class'             => 'mrblx_row',
            )
        );
    }

    /**
     * What emails should forms be sent to?
     *
     * @param array $args
     *
     * @noinspection PhpUnusedParameterInspection
     */
    public function callback( array $args ) {
        // Get the value of the setting we've registered with register_setting().
        $options = get_option( 'mrblx_options' );
        ?>
        <!--suppress HtmlFormInputWithoutLabel -->
        <input name="mrblx_options[form_emails]" type="text" id="form_emails" value="<?php echo esc_attr( $options['form_emails'] ?? '' ); ?>" class="regular-text" />
        <p class="description">
            <?php esc_html_e( 'Comma-separated list of email addresses that forms should be sent to.   If left blank, forms are emailed to the site owner.' ); ?>
        </p>
        <?php
    }
}
