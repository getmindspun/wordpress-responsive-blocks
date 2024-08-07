<?php
declare(strict_types=1);

namespace MRBLX\API;

use MRBLX\Vendor\Mindspun\Framework\Facades\Globals;
use WP_REST_Request;
use WP_REST_Response;

defined( 'ABSPATH' ) || exit;

/**
 * REST API endpoint for forms.
 */
class FormEndpoint {

    /**
     * Constructor.
     */
    public function __construct() {
        add_action( 'mrblx_form_submit', array( $this, 'form_submit' ), 10, 1 );
    }

    /**
     * POST - email submitted form contents.
     *
     * @param WP_REST_Request $request
     *
     * @return WP_REST_Response
     */
    public function post( WP_REST_Request $request ): WP_REST_Response {

        $params = apply_filters( 'mrblx_form_params', $request->get_params() );
        if ( null !== $params ) {
            do_action( 'mrblx_form_submit', $params );
        }

        return apply_filters( 'mrblx_form_rest_response', new WP_REST_Response( null, 204 ) );
    }

    /**
     * Build the email to:
     */
    private function get_to(): string {
        $option = get_option( MRBLX_OPTION );

        $to = $option['form_emails'] ?? null;
        if ( ! $to ) {
            return get_option( 'admin_email' );
        }
        return $to;
    }

    /**
     * Handle form submission be emailing the contents.
     *
     * @param array $params
     */
    public function form_submit( array $params ) {

        $lines = array();

        foreach ( $params as $key => $value ) {
            if ( ! empty( $lines ) ) {
                $lines[] = '';
            }
            $lines[] = $key;
            $lines[] = $value;
        }

        $to = $this->get_to();
        $to = apply_filters( 'mrblx_form_email_to', $to, $params );

        $subject = __( 'Form submission', 'mrblx' );
        $subject = apply_filters( 'mrblx_form_email_subject', $subject, $params );

        $message = join( "\n", $lines );
        $message = apply_filters( 'mrblx_form_email_message', $message, $params );

        /* @noinspection PhpUndefinedMethodInspection */
        Globals::wp_mail( $to, $subject, $message );
    }
}
