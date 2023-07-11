import React, { useCallback, useMemo } from "react";
import { Flex, Text, VStack, HStack, Input, Button, FormControl, FormLabel, FormErrorMessage, FormControlProps } from "@chakra-ui/react";

import { Page } from "../../../components";

// 
import { Form, FormField, FormFragmentProvider, useFormFieldArray } from "@formed/ui";
import { useForm, useFormContext, useFieldArray, FormProvider, Controller, UseFieldArrayProps } from 'react-hook-form'


// FormFieldPath


// FormField

// export interface UseFormFieldProps {
//   name: string;
//   isRequired?: boolean;
//   isControlled?: boolean;
// }

// const useFormField = ({ isRequired = false, isControlled, ...props }: UseFormFieldProps) => {
//   const fragment = useFormFragmentContext();
//   const { control, register, formState: { errors } } = useFormContext()

//   const name = fragment ? `${fragment.path}.${props.name}` : props.name;
//   const error = errors[name];
//   const rules = { required: isRequired }

//   return {
//     name,
//     error,
//     rules,
//     control,
//     register,
//   }
// }

// interface FormFieldProps extends FormControlProps, UseFormFieldProps {
//   name: string;
//   label?: string;
//   children: React.ReactElement; // ReactNode ?
// }

// const FormField = (props: FormFieldProps) => {
//   const { name, error, rules, register, control } = useFormField(props);
//   const { label, children, isRequired, isControlled = false, ...rest } = props

//   return (
//     <FormControl {...rest} isInvalid={!!error}>
//       <Flex justify='space-between'>
//         {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
//       </Flex>
//       {isControlled 
//         ? <Controller name={name} rules={rules} control={control} render={({ field }) => React.cloneElement(React.Children.only(children), field)} />
//         : React.cloneElement(React.Children.only(children), register(name, rules as any))}
//       {error && (
//         <FormErrorMessage>
//           <Text>Error: {error.type?.toString()}</Text>
//         </FormErrorMessage>
//       )}
//     </FormControl>
//   )
// }

//

// interface UseFormFieldArrayProps extends UseFieldArrayProps {

// }

// const useFormFieldArray = (props: UseFormFieldArrayProps) => {
//   const fragment = useFormFragmentContext();
//   const name = fragment ? `${fragment.path}.${props.name}` : props.name;
//   const fieldArray = useFieldArray({ ...props, name });

//   return {
//     ...fieldArray,
//     fragments: fieldArray.fields.map((field, index) => ({
//       id: field.id,
//       index: index,
//       path: `${name}.${index}`,
//       remove: () => fieldArray.remove(index),
//     }))
//   }
// }

// --

interface QuestionFragmentProps {
  remove: () => void;
}

const QuestionFragment = ({ remove }: QuestionFragmentProps) => {
  return (
    <VStack border='1px solid red'>
      <HStack>
        <Button onClick={remove}>Remove Question</Button>
      </HStack>
      <FormField name='name' label='Name' isRequired>
        <Input type='text' />
      </FormField>
      <FormField name='description' label='Description'>
        <Input type='text' />
      </FormField>
    </VStack>
  )
}

interface SectionFragmentProps {
  remove: () => void;
}

const SectionFragment = ({ remove }: SectionFragmentProps) => {
  const questions = useFormFieldArray({ name: 'questions' });
  return (
    <VStack border='1px solid yellow'>
      <HStack>
        <Button onClick={remove}>Remove Section</Button>
      </HStack>
      <FormField name='field_fragment_1' label='Field Fragment 1' isRequired>
        <Input type='text' />
      </FormField>
      <FormField name='field_fragment_2' label='Field Fragment 2' isRequired>
        <Input type='text' />
      </FormField>

      <VStack>
        {questions.fragments.map(fragment => (
          <FormFragmentProvider key={fragment.id} path={fragment.path}>
            <QuestionFragment remove={fragment.remove} />
          </FormFragmentProvider>
        ))}
        <Button onClick={() => questions.append({})}>Append Question</Button>
      </VStack>
    </VStack>
  )
}


export const FormPreviewPage = () => {
  const defaultValues = useMemo(() => ({}), []);

  const form = useForm({ defaultValues });
  const sections = useFormFieldArray({ name: 'sections', control: form.control });

  const handleSubmit = useCallback((data: any) => console.log('handleSubmit', data), []);

  return (
    <Page p={8} direction='row'>
      <FormProvider {...form}>
        <Form onSubmit={handleSubmit}>
          <VStack>
            <FormField name='field_1' label='Field 1' isRequired>
              <Input type='text' />
            </FormField>

            <FormField name='field_2' label='Field 2' isRequired>
              <Input type='text' />
            </FormField>

            <VStack>
              {sections.fragments.map(fragment => (
                <FormFragmentProvider key={fragment.id} path={fragment.path}>
                  <SectionFragment remove={fragment.remove} />
                </FormFragmentProvider>
              ))}
              <Button onClick={() => sections.append({})}>Append Section</Button>
            </VStack>

            <Button type='submit'>Submit</Button>
          </VStack>
        </Form>
      </FormProvider>
    </Page>
  )
};

export default FormPreviewPage;
