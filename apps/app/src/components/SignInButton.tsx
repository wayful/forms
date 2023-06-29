import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

export const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={() => loginWithRedirect({})} variant='outline'>Sign In / Sign Up</Button>
  );
};
