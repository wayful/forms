import React from 'react';
import { UseFormFieldObjectProps } from './useFormFieldObject';
interface FormFieldProps extends UseFormFieldObjectProps {
    children: React.ReactElement | ((field: any) => React.ReactElement);
}
export declare const FormFieldObject: ({ children, ...props }: FormFieldProps) => import("react/jsx-runtime").JSX.Element;
export default FormFieldObject;
