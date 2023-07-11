import { useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useForm, FormProvider } from 'react-hook-form';
import { useFormFieldArray, Form, FormFragmentProvider, FormField } from "@formed/ui";
import { Stack, Container, Button, VStack, Heading, Icon, Text, HStack, Flex, Input } from "@chakra-ui/react";

import { Page } from "~/components";

import { forms } from "../data";
import { SectionFormFragment } from "../components";

interface FormEditPageProps{
  create?: boolean
}

export const FormEditPage = ({ create = false }: FormEditPageProps) => {
  const { id } = useParams();
  const form = useForm({ defaultValues: forms.find(form => form.id === id) });
  const sections = useFormFieldArray({ name: 'sections', control: form.control });
  const handleSubmit = useCallback((data: any) => console.log('handleSubmit', data), []);

  const addSection = useCallback(() => sections.append({ id: Date.now().toString(), name: 'New Section', questions: [] }), [sections.append])

  return (
    <Page p={8} direction='row'>
      <FormProvider {...form}>
        <Form onSubmit={handleSubmit}>
          <HStack align='flex-start' flex={1}>
            <VStack position='sticky' top='50px' align='start' width='240px'>
              <Heading size='md'>Sections</Heading>
              {form.watch('sections').map(((section, index) => (
                <HStack key={section.id}>
                  <Text>{section.name}</Text>
                </HStack>
              )))}
              <Button size='sm' variant='ghost' leftIcon={<Icon as={FaPlus} />} onClick={addSection}>Section</Button>
              <Button type="submit">Submit</Button>
            </VStack>
            <Flex flex={5}>
              <Container maxW='920px'>
                <Stack spacing={6}>
                  {sections.fragments.map(fragment => (
                    <FormFragmentProvider key={fragment.id} path={fragment.path}>
                      <SectionFormFragment remove={fragment.remove} />
                    </FormFragmentProvider>
                  ))}
                  <Flex justify='center'>
                    <Button bg="white" onClick={addSection}>Add Section</Button>
                  </Flex>
                </Stack>
              </Container>
            </Flex>
            <VStack position='sticky' top='50px' align='stretch' minWidth='350px' flex={1} bg='white' p={6} borderRadius='24px' border='1px solid' borderColor='gray.300'>
              <FormField name='name' label='Form name' isRequired>
                <Input type='text' />
              </FormField>
              <Button variant='outline' type="submit">Preview</Button>
              <Button variant='solid' colorScheme="blue" type="submit">Publish</Button>
            </VStack>
          </HStack>
        </Form>
      </FormProvider>
    </Page>
  )
};

export default FormEditPage;
