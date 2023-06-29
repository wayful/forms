import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Form, FormField } from "@formed/ui";
import { Card, CardHeader, Heading, CardBody, Stack, Input, HStack, Button, Text } from "@chakra-ui/react";

import { Page } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";

export const SignInPage = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSubmit = useCallback((data: unknown) => {
    console.log('signin', data);
    loginWithRedirect();
  }, []);
  
  return (
    <Page align='center'>
      <Card mt={14} width='360px'>
        <CardHeader>
          <Heading size='md'>Sign In</Heading>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Stack spacing={6}>
              <Stack>
                <FormField name='email' label="Email Address">
                  <Input type="email" />
                </FormField>
                <FormField name='password' label="Password">
                  <Input type="password" />
                </FormField>
              </Stack>
              <HStack>
                <Button type='submit' flex={1}>Sign In</Button>
                <Button as={Link} to='/auth/forgot' flex={1} variant='ghost'>Forgot Passoword</Button>
              </HStack>
            </Stack>
          </Form>
        </CardBody>
      </Card>

      <Card mt={6} width='360px'>
        <Text mb={4}>Don’t have an account?</Text>
        <Button as={Link} to='/auth/signup' variant='outline'>Sign Up</Button>
      </Card>
    </Page>
  );
};
