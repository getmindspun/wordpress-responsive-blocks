<?php
declare(strict_types=1);

namespace Providers;

use MRBLX\Facades\Styles;
use PHPUnit\Framework\TestCase;

defined( 'ABSPATH' ) || exit;

class StylesProviderTest extends TestCase {

    public function test_provider() {
        self::assertEmpty( Styles::get_clean() );
        Styles::add( 'foo;' );
        Styles::add( 'bar;' );
        self::assertEquals( "foo;\nbar;", Styles::get_clean() );
    }
}
