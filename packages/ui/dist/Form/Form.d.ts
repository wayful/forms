import React from 'react';
import { StyleProps, HTMLChakraProps } from '@chakra-ui/react';
import { FormContext, UseFormProps } from './useForm';
interface FormProps extends UseFormProps, Omit<HTMLChakraProps<"form">, keyof UseFormProps | 'children'> {
    onError?: () => void;
    onSubmit: (data: any) => void;
    children: React.ReactNode | ((context: FormContext) => React.ReactNode);
    _valid?: StyleProps;
    _dirty?: StyleProps;
    _loading?: StyleProps;
    _validating?: StyleProps;
    _submitted?: StyleProps;
    _submitting?: StyleProps;
    _submitSuccessful?: StyleProps;
}
export declare const Form: React.ForwardRefExoticComponent<"form" & React.RefAttributes<FormProps>>;
export default Form;
