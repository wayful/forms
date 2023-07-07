import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom'

import { NavBar } from '~/components';

export const MainLayout = () => (
  <Flex width='100vw' minHeight='100vh' direction='column'>
    <NavBar />
    <Flex flex={1}>
      <Outlet />
    </Flex>
  </Flex>
);

export default MainLayout;

