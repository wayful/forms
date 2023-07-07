import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import { chakra, SystemStyleObject, StyleProps, HTMLChakraProps } from '@chakra-ui/react'
import { cx } from "@chakra-ui/shared-utils"

import { useForm, FormProvider, FormContext, UseFormProps } from './useForm'

interface FormProps extends UseFormProps, Omit<HTMLChakraProps<"form">, keyof UseFormProps | 'children'> {
  onError?: () => void,
  onSubmit: (data: any) => void,
  children: React.ReactNode | ((context: FormContext) => React.ReactNode),
  _valid?: StyleProps;
  _dirty?: StyleProps;
  _loading?: StyleProps;
  _validating?: StyleProps;
  _submitted?: StyleProps;
  _submitting?: StyleProps;
  _submitSuccessful?: StyleProps;
}
// @ts-ignore
export const Form = forwardRef<FormProps, 'form'>(({ _valid, _dirty, _loading, _validating, _submitted, _submitting, _submitSuccessful, children, ...props }: FormProps, ref) => {
  const formContext = useForm(props)
  const { reset, formState, handleSubmit } = formContext
  const { onError, onSubmit, defaultValues, className, ...rest } = props
    
  useEffect(() => reset(defaultValues), [reset, defaultValues])
  // @ts-ignore
  useImperativeHandle(ref, () => ({ submit: handleSubmit(onSubmit, onError) }))

  const dataFormState = [
    formState.isValid ? 'valid' : '',
    formState.isDirty ? 'dirty' : '',
    formState.isLoading ? 'loading' : '',
    formState.isValidating ? 'validating' : '',
    formState.isSubmitted ? 'submitted' : '',
    formState.isSubmitting ? 'submitting' : '',
    formState.isSubmitSuccessful ? 'submitSuccessful' : '',
  ].join(' ').trim();

  const sx: SystemStyleObject = {
    display: 'contents',
    ...(_valid ? { '&[data-form-state*="valid"]': _valid } : {}),
    ...(_dirty ? { '&[data-form-state*="dirty"]': _dirty } : {}),
    ...(_loading ? { '&[data-form-state*="loading"]': _loading } : {}),
    ...(_validating ? { '&[data-form-state*="validating"]': _validating } : {}),
    ...(_submitted ? { '&[data-form-state*="submitted"]': _submitted } : {}),
    ...(_submitting ? { '&[data-form-state*="submitting"]': _submitting } : {}),
    ...(_submitSuccessful ? { '&[data-form-state*="submitSuccessful"]': _submitSuccessful } : {}),
  };

  return (
    <FormProvider value={formContext}>
      <chakra.form
        ref={ref}
        {...rest}
        sx={sx}
        data-form-state={dataFormState} 
        className={cx("formed-form", className)}
        onSubmit={handleSubmit(onSubmit, onError)}>
        {typeof(children) === 'function' ? children(formContext) : children}
      </chakra.form>
    </FormProvider>
  )
})

export default Form
