import { createContext } from "@chakra-ui/react-context"
import { useForm as useReactHookForm, UseFormProps as UseReactHookFormProps } from 'react-hook-form'

export interface UseFormProps extends UseReactHookFormProps {
  isError?: boolean,
  isLoading?: boolean,
}

export const useForm = ({ isError = false, isLoading = false, ...rest }: UseFormProps) => {
  const methods = useReactHookForm(rest)

  return {
    ...methods,
    isError,
    isLoading
  }
}

export interface UseFormReturn extends ReturnType<typeof useForm> {}
export type FormContext = UseFormReturn

export const [FormProvider, useFormContext] = createContext<FormContext>({
  strict: false,
  name: 'FormContext',
})
