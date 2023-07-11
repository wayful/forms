import { Button, Stack, StackProps } from "@chakra-ui/react";

import { QuestionEdit } from "./QuestionEdit";
// import { SectionItem, SectionItemKind } from "../types";
// import { FormFieldArray, FormFieldPath } from "@formed/ui";

interface FormEditSectionProps extends StackProps {
  path?: string;
  onRemove?: () => void;
}

const get = (data: SectionItem) => {
  const map = {
    [SectionItemKind.Section]: {
      path: 'section',
      Component: SectionEdit
    },
    [SectionItemKind.Question]: {
      path: 'question',
      Component: QuestionEdit
    }
  };
  return map[data.kind];
};

export const SectionEdit = ({ onRemove, path = 'items', ...props }: FormEditSectionProps) => {
  return (
    <Stack {...props} border='1px solid red' p={3}>
      {onRemove && <Button onClick={onRemove}>Remove Section</Button>}
      {/* <FormFieldArray name={path}>
        {(fields, { append }) => (
          <>
            {fields.map(({ key, data, path: prefix, remove }) => {
              const { path, Component } = get(data as SectionItem);
              return (
                <FormFieldPath key={key} path={`${prefix}.${path}`}>
                  <Component onRemove={remove} />
                </FormFieldPath>
              );
            })}
            
          </>
        )}
      </FormFieldArray> */}
    </Stack>
  );
};
