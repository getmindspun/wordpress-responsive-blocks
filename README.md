# Responsive Blocks for WordPress

WordPress plugin that adds fully-responsive Gutenberg blocks to your WordPress instance.

## Blocks
All blocks are [static blocks](https://developer.wordpress.org/block-editor/getting-started/glossary/#static-block) to ensure optimal performance.

### Heading

Implements a range of heading sizes, precise margin and padding adjustments, and customizable text appearance -
including font styles, colors, and alignment option. Provides an alternative to the core heading block.

### Paragraph

Customize text styles to match your design preferences with font sizes, various appearance options and one-click letter
case styles. Provides an alternative to the core paragraph block.

### Buttons

Create primary, outline or link style buttons with a variety of options to control the target action. Provides an
alternative to the core buttons block.

### Image

Fully-responsive images. Show different images - or hide entirely - for different screen sizes.

### Grid

Layout block that uses a 12-point grid system to create fully responsive designs based on rows and columns.

### Container

Advanced block for creating virtually any type of flex layout. Offers all the control of native CSS.

### Link Group

Turn any collection of blocks into a single link.

### Tabs

Structures your information into tabs, providing a clean and organized layout for your users. Creators can manage tabbed
container, heading and content sections separately to align and adjust the content.

### Show/Hide

Conditionally show or hide one of a collection of blocks based on an event.   Choose from either a flip or slide transition. 

In addition, each block allows developers and advanced users to specify custom CSS scoped only to that particular block
instance using persistent block ids.

### Form

Create a form element containing other blocks.   The form can be submitted to any form handler you choose.
Forms are usually used in conjunction with the `field` and `submit` blocks.

### Field

A block containing an input, optional label and error message.   When a field is contained inside a `form` block, 
styles are added on the containing `form`.

## Events
Some block communicate with one another via Javascript events internally.   If you are a developer
and wish to extend listen to one of these events to extend the base functionality, here's how they work.

### Fields
Form elements generate a 'submit' event when that form is submitted.  
Fields listen to the 'submit' event of parent form and validate themselves as needed.  
If the field is invalid, notes the error on the event.  The form then cancels the submission.


## Create Custom Responsive Blocks

You can create your own responsive blocks for the Gutenberg block editor just like you do regular custom blocks.

### Quick Start

```shell
npx @wordpress/create-block --template @mindspun/create-block example
cd example
npm run postinstall
npm run build
npm run plugin-zip
```

### Controls

This package adds a set of fully responsive block controls that can be used like core block controls in your custom
block.

See the [Storybook](https://getmindspun.github.io/wordpress-responsive-blocks) for a complete list of available
controls.