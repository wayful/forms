import { Link } from "react-router-dom";
import { List, ListItem } from "@formed/ui";
import { HStack, LinkBox, LinkOverlay, Spacer, Text } from "@chakra-ui/react";

import { IForm } from '../../../types';
import { FormStatusTag } from "./FormStatusTag";
import { FormListItemMenu } from "./FormListItemMenu";

interface FormListProps {
  forms: IForm[];
}

export const FormList = ({ forms }: FormListProps) => (
  <List>
    {forms.map(form => (
      <ListItem key={form.id} p={2} borderBottom='1px' borderColor='rgba(0, 0, 0, 0.05)'>
        <LinkBox flex={1}>
          <HStack flex={1} spacing={4}>
            <FormStatusTag status={form.status} />
            <LinkOverlay as={Link} to={`${form.id}`}>
              <Text>{form.name}</Text>
            </LinkOverlay>
            <Spacer />
            <Text>1h ago</Text>
            <FormListItemMenu size='xs' />
          </HStack>
        </LinkBox>
      </ListItem>
    ))}
  </List>
)
