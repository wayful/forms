/// <reference types="react" />
import { UseFormFieldArrayProps } from './useFormFieldArray';
interface FormFieldWatchProps extends UseFormFieldArrayProps {
    path: string;
    children: (field: any) => React.ReactNode;
}
export declare const FormFieldWatch: ({ children, path, ...props }: FormFieldWatchProps) => import("react/jsx-runtime").JSX.Element;
export default FormFieldWatch;
