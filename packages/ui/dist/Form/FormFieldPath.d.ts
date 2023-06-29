import React from "react";
import { UseFormFieldPathProps } from "./useFormFieldPath";
interface FormFieldPathProps extends UseFormFieldPathProps {
    children: React.ReactNode;
}
export declare const FormFieldPath: ({ children, ...props }: FormFieldPathProps) => import("react/jsx-runtime").JSX.Element;
export {};
