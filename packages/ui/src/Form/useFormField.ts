import { ValidationRule, useFormContext } from 'react-hook-form'

import { useFormFragmentContext } from './useFormFragmentContext';

export interface UseFormFieldProps {
  name: string;
  isRequired?: boolean;
  isControlled?: boolean;
  valueAs?: 'number' | 'date' | (<T>(value: any) => T);

  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
}

export const useFormField = ({ name: fieldName, isRequired = false, isControlled, valueAs, min, max, minLength, maxLength, ...rest }: UseFormFieldProps) => {
  const fragment = useFormFragmentContext();
  const { register, control, formState: { errors } } = useFormContext();
  
  const name = fragment ? `${fragment.path}.${fieldName}` : fieldName;

  const rules = {
    required: isRequired,
    valueAsDate: valueAs === 'date',
    valueAsNumber: valueAs === 'number',
    setValueAs: typeof valueAs === 'function' ? valueAs : undefined,
    minLength,
    maxLength
  }

  const error = errors[name];

  return {
    name,
    error,
    rules,
    control,
    register,
  }
}
