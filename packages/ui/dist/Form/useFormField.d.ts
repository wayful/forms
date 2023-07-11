import { ValidationRule } from 'react-hook-form';
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
export declare const useFormField: ({ name: fieldName, isRequired, isControlled, valueAs, min, max, minLength, maxLength, ...rest }: UseFormFieldProps) => {
    name: string;
    error: import("react-hook-form").FieldError | import("react-hook-form").Merge<import("react-hook-form").FieldError, import("react-hook-form").FieldErrorsImpl<any>> | undefined;
    rules: {
        required: boolean;
        valueAsDate: boolean;
        valueAsNumber: boolean;
        setValueAs: (<T>(value: any) => T) | undefined;
        minLength: ValidationRule<number> | undefined;
        maxLength: ValidationRule<number> | undefined;
    };
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, any>;
    register: import("react-hook-form").UseFormRegister<import("react-hook-form").FieldValues>;
};
