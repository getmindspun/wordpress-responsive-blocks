import {Button} from '@wordpress/components';

import {ReactComponent as DashIcon} from './icons/Dash.svg';
import {ReactComponent as LowercaseIcon} from './icons/Lowercase.svg';
import {ReactComponent as UppercaseIcon} from './icons/Uppercase.svg';
import {ReactComponent as CapitalizeIcon} from './icons/Capitalize.svg';
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
                    icon={ DashIcon }
                    describedBy="None"
                    isPressed={ props.textTransform === 'none' }
                    onClick={ () => onChange('none') }/>
                <Button
                    icon={ UppercaseIcon }
                    describedBy="Uppercase"
                    isPressed={ props.textTransform === 'uppercase' }
                    onClick={ () => onChange('uppercase') }/>
                <Button
                    icon={ LowercaseIcon }
                    describedBy="Lowercase"
                    isPressed={ props.textTransform === 'lowercase' }
                    onClick={ () => onChange('lowercase') }/>
                <Button
                    icon={ CapitalizeIcon }
                    describedBy="Capitalize"
                    isPressed={ props.textTransform === 'capitalize' }
                    onClick={ () => onChange('capitalize') }/>
            </div>
        </div>
    );
};

export default LetterCaseControl;
