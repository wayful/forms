import { useFieldArray, UseFieldArrayProps } from "react-hook-form";

import { useFormFragmentContext } from "./useFormFragmentContext";

export interface UseFormFieldArrayProps extends UseFieldArrayProps {
  name: string;
}

export const useFormFieldArray = (props: UseFormFieldArrayProps) => {
  const fragment = useFormFragmentContext();
  const name = fragment ? `${fragment.path}.${props.name}` : props.name;
  const fieldArray = useFieldArray({ ...props, name });

  return {
    ...fieldArray,
    fragments: fieldArray.fields.map((field, index) => ({
      id: field.id,
      index: index,
      path: `${name}.${index}`,
      remove: () => fieldArray.remove(index),
    }))
  };
};
