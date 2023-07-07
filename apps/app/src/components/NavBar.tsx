import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex,  Spacer} from '@chakra-ui/react';

import { Logo, SignInButton, SignOutButton } from '.';

export const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <Flex py={4} px={6} bg='white' borderBottom='1px' borderColor='gray.300'>
      <Link to='/'>
        <Logo />
      </Link>
      <Spacer />
      {isAuthenticated
        ? <SignOutButton />
        : <SignInButton />
      }      
    </Flex>
  )
};
