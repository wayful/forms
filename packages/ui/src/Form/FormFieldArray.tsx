import { Children, cloneElement } from 'react'

import { FormFieldPath } from './FormFieldPath';
import { UseFormFieldArrayProps, useFormFieldArray } from './useFormFieldArray';

interface Field<T> {
  key: string,
  path: string,
  data: T;
  remove: () => void,
}

// type Foo = React.ReactNode | ((fields: Field[], rest: any) => React.ReactNode | React.ReactNode[])

interface FormFieldArrayProps<T> extends UseFormFieldArrayProps {
  children: ((fields: Field<T>[], rest: any) => React.ReactNode | React.ReactNode[]); // Foo | Foo[];
}

export const FormFieldArray = <T,>({ children, ...props }: FormFieldArrayProps<T>) => {
  const fieldArray = useFormFieldArray(props);

  // const fields = fieldArray.fields.map((field, index) => ({
  //   key: field.id,
  //   data: field as T,
  //   path: `${fieldArray.name}.${index}`,
  //   remove: () => fieldArray.remove(index),
  // }));

  // console.log(children)
  // Children.map(children, (child, i) => console.log(i, typeof child));

  // Array.isArray(children) ? children.map(child => console.log(child)) : '';

  return (
    <>
      {/* {Children.map(children, child =>
        typeof child === 'function'
          ? child(fields, fieldArray)
          : child
      )} */}
      {children(fieldArray.fields, fieldArray)}
    </>
  );

  // if (typeof children === 'function'){
  //   return (
  //     <>
  //       {Children.map(children(fields, rest), (child, index) => (
  //         <FormFieldPath key={fields[index].id} name={`${name}.${index}`}>
  //           {child}
  //         </FormFieldPath>
  //       ))}
  //     </>
  //   )
  // } else {
  //   return (
  //     <>
  //       {fields.map((field, index) => (
  //         <FormFieldPath key={field.id} name={`${name}.${index}`}>
  //           {cloneElement(Children.only(children))}
  //         </FormFieldPath>
  //       ))}
  //     </>
  //   )
  // }
}

export default FormFieldArray;
