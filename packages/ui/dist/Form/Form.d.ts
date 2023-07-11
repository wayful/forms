/// <reference types="react" />
import { StyleProps, HTMLChakraProps } from '@chakra-ui/react';
interface FormProps extends HTMLChakraProps<'form'> {
    onError?: () => void;
    onSubmit: (data: any) => void;
    children: React.ReactNode | React.ReactNode[];
    _valid?: StyleProps;
    _dirty?: StyleProps;
    _loading?: StyleProps;
    _validating?: StyleProps;
    _submitted?: StyleProps;
    _submitting?: StyleProps;
    _submitSuccessful?: StyleProps;
}
export declare const Form: import("react").ForwardRefExoticComponent<FormProps & import("react").RefAttributes<"form">>;
export default Form;
