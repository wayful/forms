import { useCallback } from "react";
import { Form, FormField, FormFieldObject } from "@formed/ui";
import { Button, Divider, HStack, Input, Stack, StackProps, Switch } from "@chakra-ui/react";

import { Question, QuestionType, QuestionTypeKind } from "../types";
import { QuestionTypeSelect } from "./QuestionTypeSelect";


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
  onRemove: () => void;
}

export const QuestionEdit = ({ onRemove, ...props }: QuestionEditProps) => {
  return (
    <Stack {...props} border='1px solid yellow' p={5}>
      <Button onClick={onRemove}>Remove Question</Button>
      <HStack align='start'>
        <FormField name="text" label='Text' isRequired>
          <Input type='text' />
        </FormField>

        <FormField name="type.kind" label='Type' isRequired isControlled flex={2}>
          <QuestionTypeSelect />
        </FormField>

        <FormField name="required" label='Required' flex={2}>
          <Switch />
        </FormField>
      </HStack>

      <Divider />

      <FormFieldObject name='type'>
        {(type: QuestionType) => {
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
    </Stack>
  );
}
