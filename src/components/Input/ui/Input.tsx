import type { InputHTMLAttributes, RefObject } from 'react';
import cssClasses from './Input.module.css';
import ValidationMessage from './ValidationMessage.tsx';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label: string;
  name: string;
  validationMessage?: string;
  ref?: RefObject<HTMLInputElement>;
}

export default function Input(props: Readonly<Props>) {
  const { label, validationMessage, ...inputProps } = props;

  return (
    <div>
      <div className={cssClasses.container}>
        <input className={cssClasses.input} {...inputProps}
               placeholder=""
               id={inputProps.name}/>
        <label className={cssClasses.label}
               htmlFor={inputProps.name}
        >
          {inputProps.required ? `${label}*` : label}
        </label>
      </div>
      <div>
        <ValidationMessage>{validationMessage}</ValidationMessage>
      </div>
    </div>
  );
}
