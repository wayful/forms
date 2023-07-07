
import { FormField, FormFieldObject, FormProvider, useForm } from "@formed/ui";
import { Button, Divider, HStack, Input, Stack, StackProps, Switch } from "@chakra-ui/react";

import { QuestionTypeSelect } from "~/components";
import { TQuestionType, QuestionTypeKind, IQuestion } from "~/types";

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
  return (
    <HStack>
      
    </HStack>
  )
}

interface QuestionEditProps extends StackProps {
  question: IQuestion;
  onRemove: () => void;
}

export const QuestionEdit = ({ question, onRemove, ...props }: QuestionEditProps) => {
  const formContext = useForm({ defaultValues: question });
  return (
    <FormProvider value={formContext}>
      <Stack {...props} p={6} borderRadius={12} border='1px' borderColor='gray.100' bg='white'>
        <HStack align='start'>
          <FormField name="text" label='Question' isRequired flexGrow={1}>
            <Input type='text' />
          </FormField>

          <FormField name="required" label='Required' flex={1}>
            <Switch />
          </FormField>
        </HStack>

        <FormField name="type.kind" label='Question Type' isRequired isControlled flex={2}>
          <QuestionTypeSelect />
        </FormField>



        <Divider />

        <FormFieldObject name='type'>
          {(type: TQuestionType) => {
            switch (type.kind) {
              case QuestionTypeKind.Number:
                return <QuestionTypeNumberEdit />
              case QuestionTypeKind.String:
                return <QuestionTypeStringEdit />
              case QuestionTypeKind.Boolean:
                return <QuestionTypeBooleanEdit />
              case QuestionTypeKind.Options:
                return <QuestionTypeOptionsEdit /> 
            }
          }}
        </FormFieldObject>
        <Divider />
        <HStack>
          <Button onClick={onRemove}>Remove</Button>
          <Button onClick={onRemove}>Duplicate</Button>
        </HStack>
      </Stack>
    </FormProvider>
  );
}
