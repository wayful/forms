import { Children, cloneElement } from 'react'

import { FormFieldPath } from './FormFieldPath';
import { UseFormFieldArrayProps, useFormFieldArray } from './useFormFieldArray';
import { useFormContext } from '.';
import { useWatch } from 'react-hook-form';

interface Field {
  key: string,
  path: string,
  data: unknown;
  remove: () => void,
}

// type Foo = React.ReactNode | ((fields: Field[], rest: any) => React.ReactNode | React.ReactNode[])

interface FormFieldWatchProps extends UseFormFieldArrayProps {
  path: string;
  children: (field: any) => React.ReactNode;
}

export const FormFieldWatch = ({ children, path, ...props }: FormFieldWatchProps) => {
  const { control } = useFormContext();
  const field = useWatch({ control, name: path });
  return (
    <>
      {children(field)}
    </>
  );

}

export default FormFieldWatch;
