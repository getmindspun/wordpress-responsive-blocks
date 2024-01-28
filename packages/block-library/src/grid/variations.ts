import {FOUR_COLUMNS, THREE_COLUMNS, TWO_COLUMNS, WIDE_LEFT, WIDE_RIGHT} from './template';

import two_columns from './_icons/two_columns';
import wide_left from './_icons/wide_left';
import wide_right from './_icons/wide_right';
import three_columns from './_icons/three_columns';
import four_columns from './_icons/four_columns';

export default [
    {
        name: "two_column",
        title: "Two Columns",
        description: "Two default columns",
        scope: ["block"],
        icon: two_columns,
        innerBlocks: TWO_COLUMNS,
    },
    {
        name: "wide_left",
        title: "Wide left column",
        description: "Two columns with the right column fitted to content.",
        scope: ["block"],
        icon: wide_left,
        innerBlocks: WIDE_LEFT
    },
    {
        name: "wide_right",
        title: "Wide right column",
        description: "Two columns with the left column fitted to content.",
        scope: ["block"],
        icon: wide_right,
        innerBlocks: WIDE_RIGHT
    },
    {
        name: "three_columns",
        title: "Three columns",
        description: "Three equal columns",
        scope: ["block"],
        icon: three_columns,
        innerBlocks: THREE_COLUMNS
    },
    {
        name: "four_columns",
        title: "Four columns",
        description: "Four equal columns",
        scope: ["block"],
        icon: four_columns,
        innerBlocks: FOUR_COLUMNS
    }
]