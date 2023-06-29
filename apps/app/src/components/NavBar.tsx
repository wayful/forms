import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Heading, Spacer} from '@chakra-ui/react';
import { SignInButton, SignOutButton } from '.';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Heading color='#436CFF'>Formed</Heading>
)

export const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <Flex p={4} borderBottom='1px' borderColor='gray.300'>
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

// <HStack>
//   <Button as={Link} to='/auth/signin' variant='outline'>Sign In</Button>
//   <Button as={Link} to='/auth/signup'>Sign Up</Button>
// </HStack>