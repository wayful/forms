import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Form, FormField } from "@formed/ui";
import { Card, CardHeader, Heading, CardBody, Stack, Input, Button, Text } from "@chakra-ui/react";

import { Page } from "../../components";

export const SignUpPage = () => {
  const handleSubmit = useCallback((data: unknown) => {
    console.log('signup', data);
  }, []);
  
  return (
    <Page align='center'>
      <Card mt={14} width='360px'>
        <CardHeader>
          <Heading size='md'>Sign Up</Heading>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Stack spacing={6}>
              <Stack>
                <FormField name='firstName' label="First Name">
                  <Input type="text" />
                </FormField>
                <FormField name='lastName' label="Last Name">
                  <Input type="text" />
                </FormField>
                <FormField name='email' label="Email Address">
                  <Input type="email" />
                </FormField>
                <FormField name='password' label="Password">
                  <Input type="password" />
                </FormField>
              </Stack>
              <Button type='submit'>Sign Up</Button>
            </Stack>
          </Form>
        </CardBody>
      </Card>

      <Card mt={6} width='360px'>
        <Text mb={4}>Already have an account?</Text>
        <Button as={Link} to='/auth/signin' variant='outline'>Sign In</Button>
      </Card>
    </Page>
  );
};
