/// <reference types="react" />
export interface UseFormFieldPathProps {
    path: string;
}
export declare const useFormFieldPath: ({ path, ...rest }: UseFormFieldPathProps) => {
    path: string;
};
export interface UseFormFieldPathReturn extends ReturnType<typeof useFormFieldPath> {
}
export type FormFieldPathContext = UseFormFieldPathReturn;
export declare const FormFieldPathProvider: import("react").Provider<UseFormFieldPathReturn | undefined>, useFormFieldPathContext: () => UseFormFieldPathReturn | undefined;
