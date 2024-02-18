<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use MRBLX\CSSBuilder;

defined( 'ABSPATH' ) || exit;

class CSSBuilderTest extends TestCase {

    public function test_builder() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'marginTop' => '1em' ) );
        $this->assertEquals( '#123 .block{margin-top:1em}', $builder->to_css( '123', $options ) );
    }

    public function test_hover() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'marginTopHover' => '1em' ) );
        $this->assertEquals( '#123 .block:hover{margin-top:1em}', $builder->to_css( '123', $options ) );
    }

    public function test_custom_css() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'customCSS' => '.foo{bar:baz}' ) );
        $this->assertEquals( '.foo{bar:baz}', $builder->to_css( '123', $options ) );
    }

    public function test_tablet() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'tabletMarginTop' => '1em' ) );
        $this->assertEquals( '@media (max-width:1024px){#123 .block{margin-top:1em}}', $builder->to_css( '123', $options ) );
    }

    public function test_tablet_hover() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'tabletMarginTopHover' => '1em' ) );
        $this->assertEquals( '@media (max-width:1024px){#123 .block:hover{margin-top:1em}}', $builder->to_css( '123', $options ) );
    }

    public function test_tablet_custom_css() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'tabletCustomCSS' => '.foo{bar:baz}' ) );
        $this->assertEquals( '@media (max-width:1024px){.foo{bar:baz}}', $builder->to_css( '123', $options ) );
    }

    public function test_mobile() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'mobileMarginTop' => '1em' ) );
        $this->assertEquals( '@media (max-width:480px){#123 .block{margin-top:1em}}', $builder->to_css( '123', $options ) );
    }

    public function test_mobile_hover() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'mobileMarginTopHover' => '1em' ) );
        $this->assertEquals( '@media (max-width:480px){#123 .block:hover{margin-top:1em}}', $builder->to_css( '123', $options ) );
    }

    public function test_mobile_custom_css() {
        $options = array(
            'selector' => '.block',
        );
        $builder = new CSSBuilder();
        $builder->add_attributes( array( 'mobileCustomCSS' => '.foo{bar:baz}' ) );
        $this->assertEquals( '@media (max-width:480px){.foo{bar:baz}}', $builder->to_css( '123', $options ) );
    }
}
