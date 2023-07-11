import { UseFieldArrayProps } from "react-hook-form";
export interface UseFormFieldArrayProps extends UseFieldArrayProps {
    name: string;
}
export declare const useFormFieldArray: (props: UseFormFieldArrayProps) => {
    fragments: {
        id: string;
        index: number;
        path: string;
        remove: () => void;
    }[];
    swap: import("react-hook-form").UseFieldArraySwap;
    move: import("react-hook-form").UseFieldArrayMove;
    prepend: import("react-hook-form").UseFieldArrayPrepend<import("react-hook-form").FieldValues, string>;
    append: import("react-hook-form").UseFieldArrayAppend<import("react-hook-form").FieldValues, string>;
    remove: import("react-hook-form").UseFieldArrayRemove;
    insert: import("react-hook-form").UseFieldArrayInsert<import("react-hook-form").FieldValues, string>;
    update: import("react-hook-form").UseFieldArrayUpdate<import("react-hook-form").FieldValues, string>;
    replace: import("react-hook-form").UseFieldArrayReplace<import("react-hook-form").FieldValues, string>;
    fields: Record<"id", string>[];
};
