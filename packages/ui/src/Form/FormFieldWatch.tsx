import React from 'react';

import { useFormFieldWatch, UseFormFieldWatchProps } from './useFormFieldWatch';

interface FormFieldWatchProps extends UseFormFieldWatchProps {
  children: <T>(watch: T) => React.ReactNode | React.ReactNode[];
}

export const FormFieldWatch = ({ children, ...rest }: FormFieldWatchProps) => {
  const watch = useFormFieldWatch(rest);

  return <>{children(watch)}</>
}

export default FormFieldWatch;
