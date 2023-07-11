
import { FormField, FormFieldPath, FormFieldWatch, FormFragmentProvider, useFormFieldArray } from "@formed/ui";
import { Button, Checkbox, Divider, Flex, HStack, Icon, IconButton, Input, Stack, StackProps, Switch, VStack } from "@chakra-ui/react";

import { QuestionTypeSelect } from "~/components";
import { TQuestionType, QuestionTypeKind, IQuestion } from "~/types";
import { Fragment, useCallback } from "react";
import { FaTrash } from "react-icons/fa";

const QuestionTypeNumberEdit = () => {
  return (
    <HStack>
      <FormField name="min" label='Min' valueAs="number">
        <Input type='number' />
      </FormField>
      <FormField name="max" label='Max' valueAs="number">
        <Input type='number' />
      </FormField>
      <FormField name="step" label='Step' valueAs="number">
        <Input type='number' />
      </FormField>
    </HStack>
  )
}

const QuestionTypeStringEdit = () => {
  return (
    <HStack>
      <FormField name="minLength" label='Min length'>
        <Input type='number' min={0} step={1} />
      </FormField>
      <FormField name="maxLength" label='Max length'>
        <Input type='number' min={0} step={1} />
      </FormField>
    </HStack>
  )
}

const QuestionTypeBooleanEdit = () => {
  return (
    <HStack>
      <FormField name="trueLabel" label='True label'>
        <Input type='text' />
      </FormField>
      <FormField name="falseLabel" label='False label'>
        <Input type='text' />
      </FormField>
    </HStack>
  )
}

const QuestionTypeOptionsEdit = () => {
  const options = useFormFieldArray({ name: 'options '})
  return (
    <Stack spacing={3}>
      {options.fragments.map(fragment => (
        <FormFragmentProvider key={fragment.id} path={fragment.path}>
          <HStack spacing={4}>
            <Checkbox />
            <Input />
            <IconButton onClick={fragment.remove} placeholder='Insert Option' aria-label="remove" variant='ghost' icon={<Icon as={FaTrash} />} />
          </HStack>
        </FormFragmentProvider>
      ))}
      <Flex>
        <Button onClick={() => options.append({})}>Add Option</Button>
      </Flex>
    </Stack>
  )
}

interface QuestionFormFragmentProps extends StackProps {
  remove: () => void;
}

const TYPES = {
  [QuestionTypeKind.Number]: () => <QuestionTypeNumberEdit />,
  [QuestionTypeKind.String]: () => <QuestionTypeStringEdit />,
  [QuestionTypeKind.Boolean]: () => <QuestionTypeBooleanEdit />,
  [QuestionTypeKind.Options]: () => <QuestionTypeOptionsEdit />,
}

export const QuestionFormFragment = ({ remove, ...props }: QuestionFormFragmentProps) => {
  const render = useCallback((type: QuestionTypeKind) => {
    const foo = TYPES[type] ?? (() => null)
    return foo()
  }, []);

  return (
    <Stack {...props} p={6} spacing={6} borderRadius={12} border='1px' borderColor='gray.100' bg='white'>
      <HStack align='start'>
        <FormField name="text" label='Question' isRequired flexGrow={1}>
          <Input type='text' />
        </FormField>

        <FormField name="required" label='Required' flex={1}>
          <Switch />
        </FormField>
      </HStack>

      <FormField name="type" label='Question Type' isRequired isControlled flex={2}>
        <QuestionTypeSelect flex={1} width='100%'/>
      </FormField>

      <FormFieldWatch name="type">
        {type => (
          <FormFieldPath name='rules'>
            {render(type as QuestionTypeKind)}
          </FormFieldPath>
        )}
      </FormFieldWatch>
      
      <Divider />

      <HStack>
        <Button onClick={remove}>Remove</Button>
        <Button onClick={remove}>Duplicate</Button>
      </HStack>
    </Stack>
  );
}
