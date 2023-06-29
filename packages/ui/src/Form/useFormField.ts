import { createContext } from "@chakra-ui/react-context"
import { ValidationRule } from 'react-hook-form'

import { useFormContext } from './useForm';
import { useFormFieldPathContext } from "./useFormFieldPath";

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
  const formFieldPathContext = useFormFieldPathContext();
  const { register, control, formState: { errors } } = useFormContext()

  const rules = {
    required: isRequired,
    valueAsDate: valueAs === 'date',
    valueAsNumber: valueAs === 'number',
    setValueAs: typeof valueAs === 'function' ? valueAs : undefined,
    minLength,
    maxLength
  }

  const name = formFieldPathContext ? `${formFieldPathContext.path}.${fieldName}` : fieldName

  const error = errors[name];

  return {
    name,
    error,
    rules,
    control,
    register,
  }
}
