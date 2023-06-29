import React from "react";
import { FormFieldPathProvider, UseFormFieldPathProps, useFormFieldPath } from "./useFormFieldPath"

interface FormFieldPathProps extends UseFormFieldPathProps {
  children: React.ReactNode;
}

export const FormFieldPath = ({ children, ...props }: FormFieldPathProps) => {
  const context = useFormFieldPath(props);
  return (
    <FormFieldPathProvider value={context}>
      {children}
    </FormFieldPathProvider>
  )
};
