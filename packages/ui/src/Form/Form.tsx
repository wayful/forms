import { cx } from "@chakra-ui/shared-utils"
import { useFormContext } from 'react-hook-form';
import { useImperativeHandle, useMemo, forwardRef } from 'react'
import { chakra, StyleProps, SystemStyleObject, HTMLChakraProps } from '@chakra-ui/react'

interface FormProps extends HTMLChakraProps<'form'> {
  onError?: () => void,
  onSubmit: (data: any) => void,
  children: React.ReactNode | React.ReactNode[];
  _valid?: StyleProps;
  _dirty?: StyleProps;
  _loading?: StyleProps;
  _validating?: StyleProps;
  _submitted?: StyleProps;
  _submitting?: StyleProps;
  _submitSuccessful?: StyleProps;
}

export const Form = forwardRef<'form', FormProps>(({
  onError,
  onSubmit,
  children,
  _valid,
  _dirty,
  _loading,
  _validating,
  _submitted,
  _submitting,
  _submitSuccessful,
  className,
  ...rest
}: FormProps, ref) => {
  const { formState, handleSubmit } = useFormContext();
  
  // useImperativeHandle(ref, () => ({ aa: () => {} }), []);

  const dataFormState = useMemo(() => ([
    formState.isValid ? 'valid' : '',
    formState.isDirty ? 'dirty' : '',
    formState.isLoading ? 'loading' : '',
    formState.isValidating ? 'validating' : '',
    formState.isSubmitted ? 'submitted' : '',
    formState.isSubmitting ? 'submitting' : '',
    formState.isSubmitSuccessful ? 'submitSuccessful' : '',
  ].join(' ').trim()), [formState]);

  const sx: SystemStyleObject = useMemo(() => ({
    display: 'contents',
    ...(_valid ? { '&[data-form-state*="valid"]': _valid } : {}),
    ...(_dirty ? { '&[data-form-state*="dirty"]': _dirty } : {}),
    ...(_loading ? { '&[data-form-state*="loading"]': _loading } : {}),
    ...(_validating ? { '&[data-form-state*="validating"]': _validating } : {}),
    ...(_submitted ? { '&[data-form-state*="submitted"]': _submitted } : {}),
    ...(_submitting ? { '&[data-form-state*="submitting"]': _submitting } : {}),
    ...(_submitSuccessful ? { '&[data-form-state*="submitSuccessful"]': _submitSuccessful } : {}),
  }), [_valid, _dirty, _loading, _validating, _submitted, _submitting, _submitSuccessful]);

  return (
    <chakra.form
      ref={ref}
      {...rest}
      sx={sx}
      data-form-state={dataFormState}
      className={cx("formed-form", className)}
      onSubmit={handleSubmit(onSubmit, onError)}>
      {children}
    </chakra.form>
  )
})

export default Form
