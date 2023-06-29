export interface UseFormFieldObjectProps {
    name: string;
}
export declare const useFormFieldObject: ({ name: fieldName, ...rest }: UseFormFieldObjectProps) => {
    name: string;
    field: any;
};
