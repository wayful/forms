import { Box, Button, Flex, HStack, Input, Stack } from "@chakra-ui/react";
import { FormField, FormFragmentProvider, useFormFieldArray } from "@formed/ui";
import { QuestionFormFragment } from ".";
import { QuestionTypeKind } from "~/types";

interface SectionFormFragmentProps {
  remove: () => void;
}

export const SectionFormFragment = ({ remove, ...props }: SectionFormFragmentProps) => {
  const questions = useFormFieldArray({ name: 'questions' })
  
  return (
    <Stack {...props} p={6} spacing={6} borderRadius={24} border='1px' borderColor='gray.300' bg='white'>
      <FormField name='name' label='Section name' isRequired>
        <Input type='text' />
      </FormField>

      {/*
      <FormField name='description' label='Section Description' isRequired>
        <Input type='text' />
      </FormField>
      */}

      <HStack>
        <Button>Duplicate</Button>
        <Button variant='ghost' onClick={remove}>Delete</Button>
      </HStack>
      
      {questions.fragments.map(fragment => (
        <FormFragmentProvider key={fragment.id} path={fragment.path}>
          <QuestionFormFragment remove={fragment.remove} />
        </FormFragmentProvider>
      ))}

      <Flex justify='center'>
        <Button onClick={() => questions.append({ type: { kind: QuestionTypeKind.Number } })}>Add Question</Button>
      </Flex>
    </Stack>
  )
}