import { useCallback } from "react";
import { useForm, useWatch, FormProvider } from 'react-hook-form';
import { Stack, Container, Button, VStack, Heading, Box, Icon, Text, HStack, Flex } from "@chakra-ui/react";
import { useFormFieldArray, Form, FormFragmentProvider } from "@formed/ui";

import { forms } from "../../../form/data";

import { Page } from "~/components";
import { SectionFormFragment } from "../components";
import { FaPlus } from "react-icons/fa";
import { ISection } from "~/types";

// interface SectionsControllerProps {
//   // sections: ISection[];
//   remove: (index: number) => void;
//   append: (section: ISection) => void;
// }

// const SectionsController = ({ append, remove }: SectionsControllerProps) => {
//   const sections = useWatch({ name: 'sections' });
  
//   console.log(sections);

//   return (
    
//   )
// }

// --

interface FormEditPageProps{
  create?: boolean
}

export const FormEditPage = ({ create = false }: FormEditPageProps) => {
  const form = useForm({ defaultValues: forms[0] });
  const sections = useFormFieldArray({ name: 'sections', control: form.control });
  const handleSubmit = useCallback((data: any) => console.log('handleSubmit', data), []);

  const addSection = useCallback(() => sections.append({ id: Date.now().toString(), name: 'New Section', questions: [] }), [sections.append])

  return (
    <Page p={8} direction='row'>
      <FormProvider {...form}>
        <Form onSubmit={handleSubmit}>
          <HStack align='flex-start' flex={1}>
            <VStack align='start' width='240px'>
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
            <VStack align='stretch' flex={1} bg='white' p={6} borderRadius='24px' border='1px solid' borderColor='gray.300'>
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
