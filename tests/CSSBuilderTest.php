<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use WPX\CSSBuilder;

defined('ABSPATH') || exit;

class CSSBuilderTest extends TestCase
{
    public function test_builder() {
        $builder = new CSSBuilder();
        $builder->add_attributes(array('marginTop' => '1em') );
        $this->assertEquals('#123 .block{margin-top:1em}', $builder->to_css('123', '.block'));
    }

    public function test_hover() {
        $builder = new CSSBuilder();
        $builder->add_attributes(array('marginTopHover' => '1em') );
        $this->assertEquals('#123 .block:hover{margin-top:1em}', $builder->to_css('123', '.block'));
    }

    public function test_tablet() {
        $builder = new CSSBuilder();
        $builder->add_attributes(array('tabletMarginTop' => '1em') );
        $this->assertEquals('@media (max-width:1024px){#123 .block{margin-top:1em}}', $builder->to_css('123', '.block'));
    }

    public function test_tablet_hover() {
        $builder = new CSSBuilder();
        $builder->add_attributes(array('tabletMarginTopHover' => '1em') );
        $this->assertEquals('@media (max-width:1024px){#123 .block:hover{margin-top:1em}}', $builder->to_css('123', '.block'));
    }

    public function test_mobile() {
        $builder = new CSSBuilder();
        $builder->add_attributes(array('mobileMarginTop' => '1em') );
        $this->assertEquals('@media (max-width:480px){#123 .block{margin-top:1em}}', $builder->to_css('123', '.block'));
    }

    public function test_mobile_hover() {
        $builder = new CSSBuilder();
        $builder->add_attributes(array('mobileMarginTopHover' => '1em') );
        $this->assertEquals('@media (max-width:480px){#123 .block:hover{margin-top:1em}}', $builder->to_css('123', '.block'));
    }
}