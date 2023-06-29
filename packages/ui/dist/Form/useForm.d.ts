/// <reference types="react" />
import { UseFormProps as UseReactHookFormProps } from 'react-hook-form';
export interface UseFormProps extends UseReactHookFormProps {
    isError?: boolean;
    isLoading?: boolean;
}
export declare const useForm: ({ isError, isLoading, ...rest }: UseFormProps) => {
    isError: boolean;
    isLoading: boolean;
    watch: import("react-hook-form").UseFormWatch<{
        [x: string]: any;
    }>;
    getValues: import("react-hook-form").UseFormGetValues<{
        [x: string]: any;
    }>;
    getFieldState: import("react-hook-form").UseFormGetFieldState<{
        [x: string]: any;
    }>;
    setError: import("react-hook-form").UseFormSetError<{
        [x: string]: any;
    }>;
    clearErrors: import("react-hook-form").UseFormClearErrors<{
        [x: string]: any;
    }>;
    setValue: import("react-hook-form").UseFormSetValue<{
        [x: string]: any;
    }>;
    trigger: import("react-hook-form").UseFormTrigger<{
        [x: string]: any;
    }>;
    formState: import("react-hook-form").FormState<{
        [x: string]: any;
    }>;
    resetField: import("react-hook-form").UseFormResetField<{
        [x: string]: any;
    }>;
    reset: import("react-hook-form").UseFormReset<{
        [x: string]: any;
    }>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<{
        [x: string]: any;
    }>;
    unregister: import("react-hook-form").UseFormUnregister<{
        [x: string]: any;
    }>;
    control: import("react-hook-form").Control<{
        [x: string]: any;
    }, any>;
    register: import("react-hook-form").UseFormRegister<{
        [x: string]: any;
    }>;
    setFocus: import("react-hook-form").UseFormSetFocus<{
        [x: string]: any;
    }>;
};
export interface UseFormReturn extends ReturnType<typeof useForm> {
}
export type FormContext = UseFormReturn;
export declare const FormProvider: import("react").Provider<UseFormReturn>, useFormContext: () => UseFormReturn;
