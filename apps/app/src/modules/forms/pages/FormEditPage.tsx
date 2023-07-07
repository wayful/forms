import { FaPlus } from "react-icons/fa";
import { useCallback, useState } from "react";
import { Form, FormField, FormFieldArray, FormFieldPath, FormFieldWatch, FormProvider } from "@formed/ui";
import { Box, Button, Heading, Icon, Text, Stack, VStack, HStack, Input,  Container } from "@chakra-ui/react";
import { useForm, useFieldArray } from 'react-hook-form'

import { Page } from "../../../components";
import { IForm, IQuestion, IQuestionType, ISection, QuestionTypeKind, form as _form } from "../../../types";
import { forms } from "../../../form/data";
import { QuestionEdit } from "../components/QuestionEdit";

interface FormEditPageProps{
  create?: boolean
}

interface SectionsControllerProps {
  sections: ISection[];
  remove: (index: number) => void;
  append: (section: ISection) => void;
}

const SectionsController = ({ sections, append, remove }: SectionsControllerProps) => (
  <VStack align='start' width='240px'>
    <Heading size='md'>Sections</Heading>
    {sections.map((section => <Box key={section.id}>{section.name}</Box>))}
    <Button size='sm' variant='ghost' leftIcon={<Icon as={FaPlus} />} onClick={() => append({ id: Date.now().toString(), name: 'New Section', questions: [] })}>Section</Button>
  </VStack>
)


const SectionEdit = ({ control, remove }) => {
  const questions = useFieldArray({ control, name: 'questions' })
  
  return (
    <Stack p={6} spacing={6} borderRadius={24} border='1px' borderColor='gray.300' bg='white'>
      <FormField name="name" label='Section name' isRequired>
        <Input type='text' />
      </FormField>

      <FormField name="description" label='Section Description' isRequired>
        <Input type='text' />
      </FormField>

      <HStack>
        <Button>Duplicate</Button>
        <Button variant='ghost' onClick={remove}>Delete</Button>
      </HStack>
      {/* <FormFieldArray name='presentation.sections'>
        {(questions, { append, remove }) => questions.map((question, index) =>
          <QuestionEdit key={question.id} question={question} onRemove={() => remove(index)} />
        )}
      </FormFieldArray> */}
      <Button onClick={() => questions.append({ type: { kind: QuestionTypeKind.Number } })}>Add</Button>
    </Stack>
  )
}

export const FormEditPage = ({ create = false }: FormEditPageProps) => {
  const [form, setForm] = useState<IForm>(forms[0]);

  const { control, register } = useForm({ defaultValues: forms[0] });
  const sections = useFieldArray<ISection>({ control, name: 'sections' })


  const handleSubmit = useCallback((form: IForm) => {
    console.log('handleSubmit', form);
    // setForm(form);
  }, []);
  
  return (
    <Page p={8} direction='row'>
      <Form defaultValues={form} onSubmit={handleSubmit}>
        <SectionsController sections={sections.fields} append={sections.append} />
        <Container maxW='1240px'>
          <Stack>  
            {sections.fields.map((section, index) =>
              <FormFieldPath key={section.id} path={`sections.${index}`}>
                <SectionEdit control={control} index={index} />
              </FormFieldPath>
            )}
          </Stack>
        </Container>  
      </Form>
    </Page>
  )
};

export default FormEditPage;
