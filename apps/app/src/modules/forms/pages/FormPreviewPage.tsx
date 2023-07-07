import { FaPlus } from "react-icons/fa";
import { useCallback, useState } from "react";
import { Form, FormField, FormFieldArray, FormFieldPath, FormFieldWatch, FormProvider } from "@formed/ui";
import { Box, Button, Heading, Icon, Text, Stack, VStack, HStack, Input,  Container } from "@chakra-ui/react";
import { useForm, useFieldArray } from 'react-hook-form'

import { Page } from "../../../components";
import { IForm, IQuestion, IQuestionType, ISection, QuestionTypeKind, form as _form } from "../../../types";
import { forms } from "../../../form/data";
import { QuestionEdit } from "../components/QuestionEdit";



export const FormPreviewPage = ({ create = false }: FormEditPageProps) => {
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

export default FormPreviewPage;
