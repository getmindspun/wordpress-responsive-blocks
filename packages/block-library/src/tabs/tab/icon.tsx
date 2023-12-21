import {SVG, Path} from '@wordpress/components';

const Icon = () => {
    return (
        <SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.325 3.325H8.675V7.325H21.675V21.675H1.325V3.325ZM2.675 4.675V20.325H20.325V8.675H7.325V4.675H2.675Z"
                  fill="currentColor"/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M18 13.675H5V12.325H18V13.675ZM16 17.175H5V15.825H16V17.175Z" fill="currentColor"/>
        </SVG>
    )
}

export default Icon;
