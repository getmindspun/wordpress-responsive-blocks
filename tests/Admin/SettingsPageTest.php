<?php
declare(strict_types=1);

namespace Admin;

use PHPUnit\Framework\TestCase;
use MRBLX\Admin\SettingsPage;

defined( 'ABSPATH' ) || exit;

class SettingsPageTest extends TestCase {

    public function test_page() {
        $page = new SettingsPage();

        ob_start();
        $page->admin_init();
        self::assertEmpty( ob_get_clean() );
    }

    public function test_callback() {
        $original_user_id = get_current_user_id();
        wp_set_current_user( 1 );
        $page = new SettingsPage();

        ob_start();
        $page->add_menu_page_callback();
        self::assertNotEmpty( ob_get_clean() );
        wp_set_current_user( $original_user_id );
    }

    public function test_callback_with_user() {
        $page = new SettingsPage();

        ob_start();
        $page->add_menu_page_callback();
        self::assertEmpty( ob_get_clean() );
    }
}
