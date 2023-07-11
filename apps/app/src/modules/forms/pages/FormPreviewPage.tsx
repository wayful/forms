import { FaPlus } from "react-icons/fa";
import React, { Fragment, cloneElement, useCallback, useMemo, useState } from "react";
import { Box, Button, Heading, Icon, Text, Stack, VStack, HStack, Input,  Container, FormControl, Flex, FormLabel, FormErrorMessage, FormControlProps } from "@chakra-ui/react";


import { Page } from "../../../components";

// 

import { chakra } from "@chakra-ui/react"
import { createContext } from "@chakra-ui/react-context"
import { useForm as useReactHookForm, useFieldArray as useReactHookFieldArray, Controller, UseFormProps as UseReactHookFormProps, UseFieldArrayProps as UseReactHookFieldArrayProps } from 'react-hook-form'

// Form

interface UseFormProps extends UseReactHookFormProps {
  isError?: boolean,
  isLoading?: boolean,
}

const useForm = ({ isError = false, isLoading = false, ...rest }: UseFormProps) => {
  const form = useReactHookForm(rest);

  return {
    ...form,
    isError,
    isLoading,
  }
}

export interface UseFormReturn extends ReturnType<typeof useForm> {}

export type FormContext = UseFormReturn

const [FormProvider, useFormContext] = createContext<FormContext>({
  strict: false,
  name: 'FormContext',
})

interface FormProps extends UseFormProps {
  onError?: () => void;
  onSubmit: (data: any) => void;
  children: React.ReactNode | ((context: FormContext) => React.ReactNode);
}

const Form = ({ onSubmit, onError, children, ...props }: FormProps) => {
  const form = useForm(props);

  return (
    <FormProvider value={form}>
      <chakra.form onSubmit={form.handleSubmit(onSubmit, onError)}>
        {typeof(children) === 'function' ? children(form) : children}
      </chakra.form>
    </FormProvider>
  )
}

// FormFieldPath

const [FormFieldPathProvider, useFormFieldPathContext] = createContext<FormFieldPathContext>({
  strict: false,
  name: 'FormFieldPathContext',
  defaultValue: { path: '' },
});

export interface UseFormFieldPathProps {
  path?: string;
}

const useFormFieldPath = ({ path, ...rest }: UseFormFieldPathProps) => {
  return {
    path
  }
}

export interface UseFormFieldPathReturn extends ReturnType<typeof useFormFieldPath> {}
export type FormFieldPathContext = UseFormFieldPathReturn

// FormField

export interface UseFormFieldProps {
  name: string;
  isRequired?: boolean;
  isControlled?: boolean;
}


const useFormField = ({ isRequired = false, isControlled, ...props }: UseFormFieldProps) => {
  const { path } = useFormFieldPathContext();
  const { control, register, formState: { errors } } = useFormContext()

  const name = path ? `${path}.${props.name}` : props.name;
  const error = errors[name];
  const rules = { required: isRequired }

  return {
    name,
    error,
    rules,
    control,
    register,
  }
}

interface FormFieldProps extends FormControlProps, UseFormFieldProps {
  name: string;
  label?: string;
  children: React.ReactElement; // ReactNode ?
}

const FormField = (props: FormFieldProps) => {
  const { name, error, rules, register, control } = useFormField(props);
  const { label, children, isRequired, isControlled = false, ...rest } = props

  return (
    <FormControl {...rest} isInvalid={!!error}>
      <Flex justify='space-between'>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
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

//

interface FormFragmentProps extends UseFormFieldPathProps {
  children?: React.ReactNode;
}

const FormFragment = ({ children, ...props }: FormFragmentProps) => {
  const context = useFormFieldPath(props);

  return (
    <FormFieldPathProvider value={context}>
      {children}
    </FormFieldPathProvider>
  )
}

// --

interface UseFormFieldArrayProps extends UseReactHookFieldArrayProps, UseFormFieldPathProps {}

const useFormFieldArray = (props: UseFormFieldArrayProps) => {
  const foo = useReactHookFieldArray(props);

  return foo
}

interface Foo {
  key: string;
  path: string;
  remove: () => void;
}

interface FormFieldArrayProps extends UseFormFieldArrayProps { 
  name: string;
  children: ((data: Foo[], fieldArray: ReturnType<typeof useFormFieldArray>) => React.ReactElement);
}

const FormFieldArray = ({ name, children, ...props }: FormFieldArrayProps) => {
  const { control } = useFormContext();
  const array = useFormFieldArray({ name, control });

  const foo = useMemo(() => array.fields.map((field, index) => ({
    key: field.id,
    path: `${name}.${index}`,
    remove: () => array.remove(index),
  })), [array])

  return (
    <>
      {children(foo, array)}
    </>
  )
}

// --

interface FormFragmentFooProps extends FormFragmentProps {
  remove: () => void;
}

const FormFragmentFoo = (props: FormFragmentFooProps) => {
  return (
    <FormFragment {...props}>
      <VStack border='1px solid red'>
        <HStack>
          <Button onClick={props.remove}>Remove</Button>
        </HStack>
        <FormField name='field_fragment_1' label='Field Fragment 1' isRequired>
          <Input type='text' />
        </FormField>
        <FormField name='field_fragment_2' label='Field Fragment 2' isRequired>
          <Input type='text' />
        </FormField>
      </VStack>
    </FormFragment>
  )
}

export const FormPreviewPage = () => {
  const defaultValues = useMemo(() => ({
    field_1: '1',
    field_2: '2',
    // foo: {
    //   field_fragment_1: '1',
    //   field_fragment_2: '2',
    // },
    // foos: [{
    //   field_fragment_1: '1',
    //   field_fragment_2: '2',
    // }, {
    //   field_fragment_1: '1',
    //   field_fragment_2: '2',
    // }]
  }), []);
  const handleSubmit = useCallback((data: any) => {
    console.log('handleSubmit', data);
  }, []);

  return (
    <Page p={8} direction='row'>
      <Form defaultValues={defaultValues} onSubmit={handleSubmit}>

        <FormField name='field_1' label='Field 1' isRequired>
          <Input type='text' />
        </FormField>

        <FormField name='field_2' label='Field 2' isRequired>
          <Input type='text' />
        </FormField>

        <FormFieldArray name='foos'>
          {(foos, { append }) => (
            <>
              {foos.map(foo => <FormFragmentFoo {...foo} />)}
              <Button onClick={() => append({})}>Append</Button>
            </>
          )}
        </FormFieldArray>

        <Button type='submit'>Submit</Button>
      </Form>
    </Page>
  )
};

export default FormPreviewPage;
