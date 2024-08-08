<?php
declare(strict_types=1);

namespace API;

use Mockery;
use MRBLX\API\FormEndpoint;
use MRBLX\Vendor\Mindspun\Framework\Registry;
use PHPUnit\Framework\TestCase;
use WP_REST_Request;
use WP_REST_Server;

defined( 'ABSPATH' ) || exit;

class FormEndpointTest extends TestCase {

    private array $mocks = array();
    protected ?WP_REST_Server $server = null;

    public static function setUpBeforeClass(): void {
        global $wp_rest_server;
        if ( ! $wp_rest_server ) {
            $wp_rest_server = new WP_REST_Server();
            do_action( 'rest_api_init' );
        }
    }

    public function setUp(): void {
        parent::setUp();

        global $wp_rest_server;
        $this->server   = $wp_rest_server;
    }

    public function tearDown(): void {
        parent::tearDown();

        foreach ( $this->mocks as $alias => $provider ) {
            Registry::unregister( $alias );
            Registry::register( $alias, $provider );
        }

        Mockery::close();
    }

    public function mock_provider( string $name ) {
        assert( ! array_key_exists( $name, $this->mocks ) );

        if ( Registry::has( $name ) ) {
            $provider = Registry::get( $name );
            Registry::unregister( $name );
            $this->mocks[ $name ] = $provider;
        }

        $mock = Mockery::mock( $name );
        Registry::register( $name, $mock );
        return $mock;
    }

    public function test_endpoint() {
        $message = 'name
Alice

email
alice@example.com';

        $globals = $this->mock_provider( 'globals' );
        $globals->shouldReceive( 'wp_mail' )
            ->with( 'admin@example.org', 'Form submission', $message )
            ->once();

        $data = array(
            'name' => 'Alice',
            'email' => 'alice@example.com',
        );

        $request = new WP_REST_Request( 'POST', '/' . MRBLX_REST_NAMESPACE . '/form' );
        $request->set_header( 'Content-Type', 'application/json' );
        $request->set_body( json_encode( $data ) );

        $response = $this->server->dispatch( $request );
        $this->assertEquals( 204, $response->get_status() );
    }

    public function test_endpoint_to() {
        $this->mock_provider( 'globals' )->shouldReceive( 'wp_mail' )->once();

        $data = array(
            'name' => 'Alice',
            'email' => 'alice@example.com',
        );

        update_option( MRBLX_OPTION, array( 'form_emails' => 'test@example.org' ) );

        $request = new WP_REST_Request( 'POST', '/' . MRBLX_REST_NAMESPACE . '/form' );
        $request->set_header( 'Content-Type', 'application/json' );
        $request->set_body( json_encode( $data ) );

        $response = $this->server->dispatch( $request );
        $this->assertEquals( 204, $response->get_status() );

        delete_option( MRBLX_OPTION );
    }

    public function test_constructor() {
        // Coverage misses the construct despite it clearly being called.
        $endpoint = new FormEndpoint();
        self::assertNotEmpty( $endpoint );
    }
}
