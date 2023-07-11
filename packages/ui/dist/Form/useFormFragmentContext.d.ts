/// <reference types="react" />
interface FormFragmentContext {
    path: string;
}
declare const FormFragmentContext: import("react").Context<FormFragmentContext | null>;
export declare const useFormFragmentContext: () => FormFragmentContext | null;
interface FormFragmentProviderProps extends FormFragmentContext {
    children: React.ReactNode | React.ReactNode[];
}
export declare const FormFragmentProvider: ({ children, ...rest }: FormFragmentProviderProps) => import("react/jsx-runtime").JSX.Element;
interface FormFieldPathProps {
    name: string;
    children: React.ReactNode | React.ReactNode[];
}
export declare const FormFieldPath: (props: FormFieldPathProps) => import("react/jsx-runtime").JSX.Element;
export {};
