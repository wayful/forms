import React from 'react';
import { UseFormFieldWatchProps } from './useFormFieldWatch';
interface FormFieldWatchProps extends UseFormFieldWatchProps {
    children: <T>(watch: T) => React.ReactNode | React.ReactNode[];
}
export declare const FormFieldWatch: ({ children, ...rest }: FormFieldWatchProps) => import("react/jsx-runtime").JSX.Element;
export default FormFieldWatch;
