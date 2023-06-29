import { Tag } from "@chakra-ui/react";
import { FormStatus } from "../../../types";

const map = {
  [FormStatus.DRAFT]: {
    colorScheme: 'teal',
    children: 'Draft'
  },
  [FormStatus.PUBLISHED]: {
    colorScheme: 'blue',
    children: 'Published'
  },
  [FormStatus.ARCHIVED]: {
    colorScheme: 'red',
    children: 'Archived'
  },
}

interface FormStatusTagProps {
  status: FormStatus;
}

export const FormStatusTag = ({ status }: FormStatusTagProps) => (
  <Tag {...map[status]} justifyContent='center' width='96px' py={1} size='lg' borderRadius='full' />
)
