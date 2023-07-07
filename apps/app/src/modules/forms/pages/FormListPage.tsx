import { Link } from "react-router-dom";
import { FaChevronDown, FaPlus } from 'react-icons/fa';
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { Page } from "~/components";
import { FormList } from "../components";
import { forms } from "../../../form/data";

const SortByMenu = () => (
  <Menu>
    <MenuButton as={Button} size='sm' variant='outline' rightIcon={<Icon as={FaChevronDown} />}>
      Last Edited
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>
)

export const FormListPage = () => {  
  return (
    <Page pt='48px'>
      <Container maxWidth='2xl'>
        <Card>
          <CardHeader>
            <SortByMenu />
          </CardHeader>
          <CardBody>
            <FormList forms={forms} />
          </CardBody>
          <CardFooter>
            <Button as={Link} to='create' leftIcon={<Icon as={FaPlus} />}>New Form</Button>
          </CardFooter>
        </Card>
      </Container>
    </Page>
  );
}

// export const FormListPage = () => (
//   <Flex width='100%' minHeight='100%' direction='column'>
//     <TopBar backTo='..'>
//       <Input placeholder="Search" bg='white' />
//     </TopBar>
//     <FormTable />
//   </Flex>
// )