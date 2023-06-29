import { Link } from "react-router-dom";
import { FaChevronDown, FaPlus } from 'react-icons/fa';
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, HStack, Heading, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

import { forms } from "../../../form/data";
import { Page, TopBar } from "~/components";
import { FormList, FormTable } from "../components";


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



export const FormListPage2 = () => {  
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

export const FormListPage = () => (
  <Flex width='100%' minHeight='100%' direction='column'>
    <TopBar backTo='..'>
      <Input placeholder="Search" bg='white' />
    </TopBar>
    <FormTable />
  </Flex>
)