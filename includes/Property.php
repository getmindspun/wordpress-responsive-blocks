<?php
declare(strict_types=1);

namespace MRBLX;

defined( 'ABSPATH' ) || exit;

/**
 * Converts styles to CSS.
 */
class Property {


    /**
     * Raw name of the property without device or psuedo-class.
     *
     * @var string
     */
    public string $name;

    /**
     * Device type.
     *
     * @var string
     */
    public string $device = 'desktop';

    /**
     * Hover psuedo-class or not.
     *
     * @var bool
     */
    public bool $hover = false;

    /**
     * Constructor
     *
     * @param string $property
     */
    public function __construct( string $property ) {
        $this->name = $property;
        $this->parse();
    }

    /**
     * Parse the fullname.
     *
     * @return void
     */
    private function parse(): void {
        if ( str_starts_with( $this->name, 'tablet' ) ) {
            $this->name = lcfirst( substr( $this->name, 6 ) );
            $this->device = 'tablet';
        } elseif ( str_starts_with( $this->name, 'mobile' ) ) {
            $this->name = lcfirst( substr( $this->name, 6 ) );
            $this->device = 'mobile';
        }

        if ( str_ends_with( $this->name, 'Hover' ) ) {
            $this->name = substr( $this->name, 0, strlen( $this->name ) - 5 );
            $this->hover = true;
        }
    }
}
