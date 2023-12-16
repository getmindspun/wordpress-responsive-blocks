import {Button} from '@wordpress/components';
import {formatUppercase, reset, formatLowercase, formatCapitalize} from '@wordpress/icons'

import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {BlockCSSProperties} from '../../types';


export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none' | undefined;

export interface LetterCaseControlProps {
    textTransform?: BlockCSSProperties['textTransform'];
    onChange: (textTransform?: BlockCSSProperties['textTransform']) => void;
}

const LetterCaseControl = (props: LetterCaseControlProps) => {

    return (
        <div className="wpx--letter-case-control">
            <ControlHeader
                title="Letter Case"
            />
            <div>
                <Button
                    icon={ reset }
                    describedBy="None"
                    isPressed={ props.textTransform === 'none' }
                    onClick={ () => props.onChange(props.textTransform !== 'none' ? 'none' : undefined) }/>
                <Button
                    icon={ formatUppercase }
                    describedBy="Uppercase"
                    isPressed={ props.textTransform === 'uppercase' }
                    onClick={ () => props.onChange(props.textTransform !== 'uppercase' ? 'uppercase' : undefined) }/>
                <Button
                    icon={ formatLowercase }
                    describedBy="Lowercase"
                    isPressed={ props.textTransform === 'lowercase' }
                    onClick={ () => props.onChange(props.textTransform !== 'lowercase' ? 'lowercase' : undefined) }/>
                <Button
                    icon={ formatCapitalize }
                    describedBy="Capitalize"
                    isPressed={ props.textTransform === 'capitalize' }
                    onClick={ () => props.onChange(props.textTransform !== 'capitalize' ? 'capitalize' : undefined) }/>
            </div>
        </div>
    );
};

export default LetterCaseControl;
