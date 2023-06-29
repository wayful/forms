export interface UseFormFieldArrayProps {
    name: string;
}
export declare const useFormFieldArray: ({ name: fieldName, ...rest }: UseFormFieldArrayProps) => {
    swap: import("react-hook-form").UseFieldArraySwap;
    move: import("react-hook-form").UseFieldArrayMove;
    prepend: import("react-hook-form").UseFieldArrayPrepend<{
        [x: string]: any;
    }, string>;
    append: import("react-hook-form").UseFieldArrayAppend<{
        [x: string]: any;
    }, string>;
    remove: import("react-hook-form").UseFieldArrayRemove;
    insert: import("react-hook-form").UseFieldArrayInsert<{
        [x: string]: any;
    }, string>;
    update: import("react-hook-form").UseFieldArrayUpdate<{
        [x: string]: any;
    }, string>;
    replace: import("react-hook-form").UseFieldArrayReplace<{
        [x: string]: any;
    }, string>;
    fields: Record<"id", string>[];
    name: string;
};
