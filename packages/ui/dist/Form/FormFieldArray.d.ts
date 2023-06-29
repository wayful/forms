/// <reference types="react" />
import { UseFormFieldArrayProps } from './useFormFieldArray';
interface Field<T> {
    key: string;
    path: string;
    data: T;
    remove: () => void;
}
interface FormFieldArrayProps<T> extends UseFormFieldArrayProps {
    children: ((fields: Field<T>[], rest: any) => React.ReactNode | React.ReactNode[]);
}
export declare const FormFieldArray: <T>({ children, ...props }: FormFieldArrayProps<T>) => import("react/jsx-runtime").JSX.Element;
export default FormFieldArray;
