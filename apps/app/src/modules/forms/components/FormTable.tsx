import { Avatar, Button, Checkbox, HStack, Icon, IconButton, Table, TableCaption, TableContainer, Tag, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

const forms = [{
  id: 'form:1',
  name: 'Form 1',
  lastUpdatedAt: new Date(),
  lastUpdatedBy: {
    id: 'user:1',
    name: 'User 1'
  }
}, {
  id: 'form:2',
  name: 'Form 2',
  lastUpdatedAt: new Date(),
  lastUpdatedBy: {
    id: 'user:1',
    name: 'User 1'
  }
}]

export const FormTable = (props) => (
  <TableContainer p={4} {...props}>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th><Checkbox /></Th>
          <Th width='100%'>Name</Th>
          <Th>Updated</Th>
          <Th>Last Updated By</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {forms.map((form, i) => (
          <Tr cursor='pointer'>
            <Td><Checkbox /></Td>
            <Td>
              <Link to={`./${form.id}`}>{form.name}</Link>
            </Td>
            <Td>{form.lastUpdatedAt.toISOString()}</Td>
            <Td>
              <Avatar size='xs' mr={3} />
              {form.lastUpdatedBy.name}
            </Td>
            <Td>
              <Tag colorScheme='green'>Published</Tag>
            </Td>
            <Td>
              <IconButton aria-label="todo" size='xs' variant='ghost' icon={<Icon as={FaEllipsisH} />} />
            </Td>
          </Tr> 
        ))}
      </Tbody>
    </Table>
  </TableContainer>
)