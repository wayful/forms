import { useWatch } from "react-hook-form";
import { UseFormFieldPathProps, useFormFieldPath, useFormFieldPathContext } from "./useFormFieldPath";
import { useFormContext } from "./useForm";

export interface UseFormFieldObjectProps {
  name: string
}

export const useFormFieldObject = ({ name: fieldName, ...rest }: UseFormFieldObjectProps) => {
  const formFieldPathContext = useFormFieldPathContext();
  const name = formFieldPathContext ? `${formFieldPathContext.path}.${fieldName}` : fieldName;

  const { control } = useFormContext();
  const field = useWatch({ control, name })

  return {
    name,
    field,
  };
}
