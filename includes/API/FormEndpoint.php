<?php
declare(strict_types=1);

namespace MRBLX\API;

use MRBLX\Facades\Globals;
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
            do_action_ref_array( 'mrblx_form_submit', array( &$params ) );
        }

        return apply_filters( 'mrblx_form_rest_response', new WP_REST_Response( array(), 200 ) );
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
            if ( 'errors' !== $key && 'error' !== $key ) {
                if ( ! empty( $lines ) ) {
                    $lines[] = '';
                }
                $lines[] = "<dt style=\"text-transform:uppercase\"><strong>$key</strong></dt>";
                $lines[] = "<dd style=\"margin-bottom:1em\">$value</dd>";
            }
        }

        $errors = array();
        if ( array_key_exists( 'error', $params ) ) {
            $errors = array( $params['error'] );
        } else if ( array_key_exists( 'errors', $params ) ) {
            $errors = $params['errors'];
        }

        if ( ! empty( $errors ) ) {
            if ( ! empty( $lines ) ) {
                $lines[] = '';
            }
            $lines[] = '<dt style="text-transform:uppercase"><strong>Errors</strong></dt>';
            foreach ( $errors as $error ) {
                $lines[] = "<dd style=\"margin-bottom:1em;color:red\">$error</dd>";
            }
        }

        $to = $this->get_to();
        $to = apply_filters( 'mrblx_form_email_to', $to, $params );

        $subject = __( 'Form submission', 'mrblx' );
        $subject = apply_filters( 'mrblx_form_email_subject', $subject, $params );

        $message = ! empty( $lines ) ? '<dl>' . join( "\n", $lines ) . '</dl>' : 'Empty form submission: no field data found.';
        $message = apply_filters( 'mrblx_form_email_message', $message, $params );

        $headers = array( 'Content-Type: text/html; charset=UTF-8' );
        $headers = apply_filters( 'mrblx_form_email_headers', $headers, $params );

        Globals::wp_mail( $to, $subject, $message, $headers );
    }
}
