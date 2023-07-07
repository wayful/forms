import { useFieldArray } from "react-hook-form";

import { useFormContext } from "./useForm";
import { useFormFieldPathContext } from "./useFormFieldPath";

export interface UseFormFieldArrayProps {
  name: string;
}

const map = new Map<string, any>();

export const useFormFieldArray = ({ name: fieldName, ...rest }: UseFormFieldArrayProps) => {
  const formFieldPathContext = useFormFieldPathContext();
  const { control } = useFormContext();

  const name = formFieldPathContext ? `${formFieldPathContext.path}.${fieldName}` : fieldName;

  const fieldArray = useFieldArray({
    name,
    control,
  });

  if(map.has(name)) {
    map.set(name, fieldArray)
  }

  console.log(map.get(name))
  
  return {
    name,
    ...(map.get(name))
  };
}
