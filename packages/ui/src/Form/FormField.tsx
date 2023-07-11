import React from 'react'
import { Controller } from 'react-hook-form'
import { Flex, Text, FormLabel, FormControl, FormControlProps, FormErrorMessage } from '@chakra-ui/react'

import { useFormField, UseFormFieldProps } from './useFormField';

interface FormFieldProps extends FormControlProps, UseFormFieldProps {
  name: string;
  label?: string;
  children: React.ReactElement;
}

export const FormField = (props: FormFieldProps) => {
  const { name, error, rules, register, control } = useFormField(props);
  const { label, children, valueAs, isRequired, minLength, maxLength, isControlled = false, ...rest } = props

  return (
    <FormControl {...rest} isInvalid={!!error}>
      <Flex justify='space-between'>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        {/* {(minLength || maxLength) && <Text>{watch(name, '').length}/{maxLength}</Text>} */}
      </Flex>
      {isControlled 
        ? <Controller name={name} rules={rules} control={control} render={({ field }) => React.cloneElement(React.Children.only(children), field)} />
        : React.cloneElement(React.Children.only(children), register(name, rules as any))}
      {error && (
        <FormErrorMessage>
          <Text>Error: {error.type?.toString()}</Text>
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default FormField;
