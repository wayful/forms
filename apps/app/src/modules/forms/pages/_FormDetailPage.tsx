import { FaPlus } from "react-icons/fa";
import { useCallback, useState } from "react";
import { Form, FormField, FormFieldArray, FormFieldWatch } from "@formed/ui";
import { Box, Button, Heading, Icon, Input, Stack, VStack } from "@chakra-ui/react";

import { Page, SectionEdit } from "../../../components";
import { IForm, form as _form } from "../../../types";
import { forms } from "../../../form/data";

interface FormEditPageProps{
  create?: boolean
}

export const FormEditPage = ({ create = false }: FormEditPageProps) => {
  const [form, setForm] = useState<IForm>(forms[0]);
  const handleSubmit = useCallback((form: IForm) => {
    console.log('handleSubmit', form);
    setForm(form);
  }, []);
  
  return (
    <Page p={8} direction='row'>
      <Form defaultValues={form} onSubmit={handleSubmit}>
        <VStack align='start' width='240px'>
          <Heading size='md'>Sections</Heading>
          <FormFieldArray name='items'>
            {(fields, { append }) => (
              <>
                {fields.map(({ key, data }) => <Box key={key}>{data.name}</Box>)}
                <Button size='sm' variant='ghost' leftIcon={<Icon as={FaPlus} />} onClick={() => append({ id: Date.now(), name: 'New Section' })}>Section</Button>
              </>
            )}
          </FormFieldArray>
        </VStack>
        <Box flex={1} p={6} border='1px' borderColor='gray.300' borderRadius={24}>
            <Stack p={10} bg='white' borderRadius={24}>
              <Heading>Form Edit Page {create ? 'Create' : ''}</Heading>
              <Button type="submit">Save</Button>
              <Stack>
                <FormField name='name' label="Name">
                  <Input type="text" />
                </FormField>

                <FormField name='description' label="Description">
                  <Input type="text" />
                </FormField>
              </Stack>

              <SectionEdit />
              <FormFieldArray name='presentation.sections'>
                {(sections, { append }) => (
                  <>
                    {sections.map(({ key, path, remove }) => (
                      <FormFieldPath key={key} path={`${path}.items`}>
                        <SectionEdit onRemove={remove} />
                      </FormFieldPath>
                    ))}
                    <Button onClick={() => append({ kind: SectionItemKind.Section, section: { id: Date.now() } })}>Add Section</Button>
                  </>
                )}
              </FormFieldArray>
            </Stack>
        </Box>
      </Form>
    </Page>
  )
};

export default FormEditPage;
