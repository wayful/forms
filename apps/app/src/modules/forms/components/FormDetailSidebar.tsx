import { Tag, Button, HStack, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Text, Tabs } from "@chakra-ui/react";

export const FormDetailSidebar = () => (
  <Tabs width='360px' borderLeft='1px' borderColor='gray.300' bg='gray.100'>
    <TabList justifyContent='center'>
      <Tab>General</Tab>
      <Tab>Comments</Tab>
      <Tab>Info</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Stack spacing={5}>
          <Stack spacing={3}>
            <Heading size='xs' borderBottom='1px' borderColor='gray.400'>STATUS</Heading>
            <HStack>
              <Text flex={1}>Current</Text>
              <Tag colorScheme='green'>Published</Tag>
            </HStack>
            <Button colorScheme='green'>Change Status</Button>
            <Text>Last saved X hours ago</Text>
          </Stack>
          <Stack spacing={3}>
            <Heading size='xs' borderBottom='1px' borderColor='gray.400'>PREVIEW</Heading>
            <Button colorScheme='blue'>Open Preview</Button>
          </Stack>
          <Stack spacing={3}>
            <Heading size='xs' borderBottom='1px' borderColor='gray.400'>VERSIONS</Heading>
          </Stack>
        </Stack>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
)
