import React from 'react';
import { FormControlProps } from '@chakra-ui/react';
import { UseFormFieldProps } from './useFormField';
interface FormFieldProps extends FormControlProps, UseFormFieldProps {
    name: string;
    label?: string;
    children: React.ReactElement;
}
export declare const FormField: (props: FormFieldProps) => import("react/jsx-runtime").JSX.Element;
export default FormField;
