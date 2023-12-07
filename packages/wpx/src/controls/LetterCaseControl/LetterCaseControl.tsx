import {Button} from '@wordpress/components';
import {formatUppercase, reset, formatLowercase, formatCapitalize} from '@wordpress/icons'

import ControlHeader from '../../components/ControlHeader/ControlHeader';


export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none' | undefined;

export interface LetterCaseControlProps {
    textTransform?: TextTransform;
    onChange: (textTransform?: TextTransform) => void;
}

const LetterCaseControl = (props: LetterCaseControlProps) => {
    /* Internal state is required so that users can uncheck values */
    function onChange(value: TextTransform) {
        props.onChange(value);
    }

    return (
        <div className="wpx--letter-case-control">
            <ControlHeader title="Letter Case"/>
            <div>
                <Button
                    icon={ reset }
                    describedBy="None"
                    isPressed={ props.textTransform === 'none' }
                    onClick={ () => onChange('none') }/>
                <Button
                    icon={ formatUppercase }
                    describedBy="Uppercase"
                    isPressed={ props.textTransform === 'uppercase' }
                    onClick={ () => onChange('uppercase') }/>
                <Button
                    icon={ formatLowercase }
                    describedBy="Lowercase"
                    isPressed={ props.textTransform === 'lowercase' }
                    onClick={ () => onChange('lowercase') }/>
                <Button
                    icon={ formatCapitalize }
                    describedBy="Capitalize"
                    isPressed={ props.textTransform === 'capitalize' }
                    onClick={ () => onChange('capitalize') }/>
            </div>
        </div>
    );
};

export default LetterCaseControl;
