import { createContext } from "@chakra-ui/react-context"

export interface UseFormFieldPathProps {
  path: string;
}

export const useFormFieldPath = ({ path, ...rest }: UseFormFieldPathProps) => {
  return {
    path
  }
}

export interface UseFormFieldPathReturn extends ReturnType<typeof useFormFieldPath> {}
export type FormFieldPathContext = UseFormFieldPathReturn

export const [FormFieldPathProvider, useFormFieldPathContext] = createContext<FormFieldPathContext | undefined>({
  strict: false,
  name: 'FormFieldPathContext',
});
