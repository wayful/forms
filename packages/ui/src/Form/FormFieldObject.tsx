import React from 'react'

import { FormFieldPath } from './FormFieldPath';
import { UseFormFieldObjectProps, useFormFieldObject } from './useFormFieldObject';

interface FormFieldProps extends UseFormFieldObjectProps {
  children: React.ReactElement | ((field: any) => React.ReactElement);
}

export const FormFieldObject = ({ children, ...props }: FormFieldProps) => {
  const { name, field } = useFormFieldObject(props);
  return (
    <FormFieldPath path={name}>
      {typeof children === 'function' ? children(field) : children}
    </FormFieldPath>
  )
}

export default FormFieldObject;
