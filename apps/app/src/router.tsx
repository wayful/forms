import { Box, Button, Flex, HStack, Heading, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, VStack } from '@chakra-ui/react';
import { Link, Navigate, Outlet, Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { NavBar, TopBar } from '~/components';
import { FormRoutes } from '~/modules/forms';
import { SignInPage, SignUpPage } from '~/pages';
import { FormTable } from './form';
import { List, ListItem } from '@formed/ui';

export const Sidebar = () => (
  <Flex width='300px' borderEnd='1px' borderColor='gray.300' bg='white'>
    {/* <List>
      <ListItem>
        Forms
      </ListItem>
    </List> */}
  </Flex>
)

const AdminLayout = () => (
  <Flex width='100%' minHeight='100%' direction='column'>
    <TopBar title='Dashboard'>
      <Input placeholder="Search" bg='white' />
    </TopBar>
    <Flex direction='row' flex={1} minHeight='100%' bg='white'>
      <Sidebar />
      <Outlet />
    </Flex>
  </Flex>

  // <Stack width='100vw' minHeight='100vh' direction='row'>
  //   <Box width='300px'>
  //     Hello admin
  //     <VStack>
  //       <Link to='/admin'>Home</Link>
  //       <Link to='/admin/form'>Form</Link>
  //     </VStack>
  //   </Box>
  //   <Flex flex={1} >
  //     <Outlet />
  //   </Flex>
  // </Stack>
)

const Logo = () => (
  <Heading color='#436CFF'>Formed</Heading>
)

const MainLayout = () => (
  <Flex width='100vw' minHeight='100vh' direction='column'>
    <NavBar />
    <Flex flex={1}>
      <Outlet />
    </Flex>
  </Flex>
)

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path='auth'>
        <Route index element={<Navigate to='signin' />} />
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='forgot' element={<SignUpPage />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        {/* <Route index element={<Navigate to='form' />} /> */}
        <Route path="form" element={<FormTable flex={1} />} />
        {/* <Route path="form/*" element={<FormRoutes />} /> */}
      </Route>
    </Route>
  )
);

export default router;
