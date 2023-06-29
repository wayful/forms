import { Tag, Button, HStack, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Text, Tabs, TabsProps } from "@chakra-ui/react";

interface FormDetailTabsProps extends Omit<TabsProps, 'children'> {}

export const FormDetailTabs = (props: FormDetailTabsProps) => (
  <Tabs {...props} borderLeft='1px' borderColor='gray.300' bg='white' minHeight='100%'>
    <TabList pl={10}>
      <Tab>Structure</Tab>
      <Tab>Presentation</Tab>
      <Tab>Logic</Tab>
    </TabList>
    <TabPanels minHeight='100%'>
      <TabPanel minHeight='100%'>
        <p>two!</p>
      </TabPanel>
      <TabPanel minHeight='100%'>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
)
