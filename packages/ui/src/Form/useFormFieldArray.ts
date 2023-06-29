import { useFieldArray } from "react-hook-form";

import { useFormContext } from "./useForm";
import { useFormFieldPathContext } from "./useFormFieldPath";

export interface UseFormFieldArrayProps {
  name: string;
}

export const useFormFieldArray = ({ name: fieldName, ...rest }: UseFormFieldArrayProps) => {
  const formFieldPathContext = useFormFieldPathContext();
  const { control } = useFormContext();

  const name = formFieldPathContext ? `${formFieldPathContext.path}.${fieldName}` : fieldName;

  const fieldArray = useFieldArray({
    name,
    control,
  });

  return {
    name,
    ...fieldArray
  };
}
