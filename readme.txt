=== Mindspun Responsive Blocks ===
Contributors: mindspun, mattlaue
Donate link: https://www.mindspun.com/about
Tags: gutenberg, blocks, responsive
Requires at least: 6.2
Tested up to: 6.5
Stable tag: 0.17.1
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Fully-responsive Gutenberg blocks

== Description ==
Mindspun Responsive Blocks empowers users to create fully-responsive layouts using lightweight blocks.
It consists of easy-to-use blocks like container, image, heading, paragraph, tab, and button block that allows users to specify distinct styling for desktop, tablet, and mobile views.

= Blocks Included =
* Heading - Create headings in a range of sizes with precise margins, padding and text appearance including font styles, colors, and alignment options.
* Paragraph - Create body text match your design preferences with font sizes, various appearance options and one-click letter case styles.
* Buttons - Create and style buttons for any screen size with primary, outline and link button types.   You can even customize the hover state.
* Image - Show different images and/or sizes for different screens.
* Grid - Easily create responsive layouts using a 12-point grid system.
* Container - Advanced block allowing the user to crete any flex-based layout they choose.
* Link Group - Turns any collection of blocks into a link.
* Tabs - Structure and present information in a tabular format.   Highly customizable to create any desired tabbed layout.
* Show/Hide - Conditionally show inner blocks based on event.   Select from a slide or flip transition styles.


= Key Features =
* Easy-to-use configuration options that are separately applied to desktop, tablet and mobile.
* Works like a responsive version of core blocks making them quick to learn.
* Lightweight, modern design to creating any layout without the bloat of a page-builder.
* All blocks are [static blocks](https://developer.wordpress.org/block-editor/getting-started/glossary/#static-block) to ensure optimal performance.
* Allows optional per-block custom CSS with media queries automatically applied for advanced use cases.


= Source files =

[GitHub](https://github.com/getmindspun/wordpress-responsive-blocks)

= Support =
For any assistance or inquiries, contact us at support@mindspun.com or visit our [Facebook Community Group](https://m.facebook.com/groups/mindspun/).
Issue may be submitted via [GitHub](https://github.com/getmindspun/wordpress-responsive-blocks/issues)

== Installation ==
Install it like any other plugin and activate it.  Other versions are also available on the [GitHub](https://github.com/getmindspun/wordpress-responsive-blocks) page.

== Screenshots ==
1. Blocks added to Gutenberg
2. Sample layout
3. Responsive options
4. Tabs mobile layout
5. Editing with blocks

== Frequently Asked Questions ==

= Can I use Mindspun Responsive Blocks with any WordPress theme? =
Yes, Mindspun Responsive Blocks is designed to be compatible with all WordPress themes. It integrates seamlessly into the block editor interface, offering users flexibility in designing responsive layouts regardless of their chosen theme.

= How does Mindspun differ from the default block editor in WordPress? =
Unlike the standard block editor, Mindspun Responsive Blocks specifically focuses on providing enhanced capabilities for creating responsive designs. It addresses the limitations of the default editor, allowing users to customize layouts for different devices more efficiently.

= How can I make my existing content responsive using Mindspun? =
Mindspun allows users to convert existing content into responsive designs by utilizing its various blocks. Simply edit the content using the Mindspun Responsive Blocks, adjusting styling preferences for desktop, tablet, and mobile views.

= Does Mindspun Responsive Blocks have any performance impact on my website? =
Mindspun is designed to be lightweight and optimized for performance. It follows best practices to ensure minimal impact on your website's speed and loading times.

= Is there support available if I encounter any issues or have questions? =
Mindspun provides customer support to address any issues or queries. Users can access FAQs, and contact support@mindspun.com  for assistance with the plugin.


== Changelog ==
= 0.17.1 =
* Update build for most recent webpack.
= 0.17.0 =
Release Date: Jun 26th, 2024
* Add a whitespace control to the container block.
* Add rowspan/colspan to td/th via a general tagAttrs container attribute.
* Support synced patterns.
* Improve state tracking for style portals to avoid flicker in the block editor.
* dependabot changes.

= 0.16.0 =
Release Date: Jun 3rd, 2024
* Add a view all/clear all advanced component and add it to all parent blocks.
* Add alt text controls to the Image block.
* Update the storybook store for setDeviceType/getDeviceType.

= 0.15.2 =
* Only set the id for a block when the blockId attribute is defined in useBlockPropsWithId.save()

= 0.15.1 =
* Fix the rel attribute on the buttons block that was causing validation errors.
* Fix deprecation warning about getDeviceType/setDeviceType
* Add th svn-tag Makefile target.
* Reorder this changelog.

= 0.15.0 =
Release Date: May 20th, 2024
* Add the Show/Hide block with custom control events.
* Add table and other tags to the container plus associated controls.
* Allow auto values for margins.
* Add table, table-row and table-cell to container display.
* Add verticalAlign to the container controls and conditionally display it and flex controls.
* Add text-decoration:none to primary and outline button variants.
* Allow custom events in for buttons.
* Enable responsive controls for button width.
* Security updates for package dependencies.
* Update tested to WordPress 6.5.
* Various build improvements.

= 0.14.0 =
Release Date: Mar 2nd, 2024
* Build improvements.
* Fix the spacing values in the container display controls.
* Update the pages action to use 18.x node.
* Add the create-block package.
* Fix a moderate npm security alert from dependabot.
* Add a GitHub action to deploy storybook to pages.
* Build updates for the plugin repo.

= 0.13.0 =
* Switch prefix and library name from wpx_ to mrblx_ based on wordpress.org guidelines.
* Use wp_add_inline_style instead of manually generating styles.
* Build updates.

= 0.12.1 =
* Fix the tabs active selector.

= 0.12.0 =
Release Date: February 5th, 2024
* Add accentColor to the build CSS.
* Improve the tab default styling and add the ability to style the hover state.
* Add the className support to all top-level blocks.
* Add the anchor support to the link block.
* Create the BlockId component and add it to the top level blocks.

= 0.11.1 =
* Fix missing labels in the container overflow control.

= 0.11.0 =
Release Date: February 1st, 2024
* Add value hint for BoxShadow controls.
* Bump follow-redirects from 1.15.3 to 1.15.5 in /packages/wpx (dependabot)
* Add eslint
* Remove unused utility functions from wpx.
* Add vw/vh units to the WidthHeightControl.
* Create a position control and use it in the container block.
* Fix a typo in PHP handling of whiteSpace.
* Use a data attribute to identify styles instead of id.

= 0.10.0 =
Release Date: January 28th, 2024
* Add a variant selector and gap controls to grid.
* Add the padding control to the buttons block.
* Make the font size control configurable and add XS as a default option.
* Set a minimum img size via CSS.
* Remove debugging output from CSSEditor.

= 0.9.0 =
Release Date: January 26th, 2024
* Allow the selector to be specified via a magic property inside the attribute for inner blocks.

= 0.8.0 =
Release Date: January 25th, 2024
* Fix button default variant attribute and default the margin to 0.
* Fix border control clear option when responsive.
* Allow changing the html tag for containers - uses either div or section.
* All links in paragraph text.
* Better default styles for container and buttons.
* Add the padding control to the grid columns block.

= 0.7.2 =
* FIX: bundle readme files

= 0.7.1 =
* wordpress.org assets

= 0.7.0 =
Release Date: January 22nd, 2024
* Initial submission to wordpress.org.