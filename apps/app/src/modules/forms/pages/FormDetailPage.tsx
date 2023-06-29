import { List } from "@formed/ui";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Box, Button, Flex, HStack, Heading, Icon, IconButton, Spacer, Stack, Text, VStack } from "@chakra-ui/react";

import { FormDetailMenu } from "../components/FormDetailMenu";
import { FormDetailSidebar } from "../components/FormDetailSidebar";
import { FormDetailTabs } from "../components/FormDetailTabs";
import { Page } from "~/components";

const sections = [{
  id: 'section:1',
  name: 'Section 1',
}, {
  id: 'section:2',
  name: 'Section 2',
}]

interface SectionLisProps {
  sections: any[]
}

const SectionList = ({ sections }: SectionLisProps) => (
  <List flex={1}>
    {sections.map(section => (
      <Flex as={Link} to='section/1' p={2} px={5} border='1px' borderColor='gray.300' borderRadius='lg' mb={3} flex={1}>{section.name}</Flex>
    ))}
  </List>
)

const TopBar = ({ children, backButton = false }) => (
  <HStack p={2} borderBottom='1px' borderColor='gray.300' bg='gray.100'>
    {backButton && (
      <IconButton
        as={Link}
        to='..'
        variant='ghost'
        aria-label="Back"
        icon={<Icon as={FaArrowLeft} />} />
    )}
    {children}
  </HStack>
)

export const FormDetailPage = () => (
  <Page backTo='..'>
    <Flex direction='row' flex={1} minHeight='100%' bg='white'>
      <FormDetailTabs flex={1} />
      <FormDetailSidebar />
    </Flex>
  </Page>
)