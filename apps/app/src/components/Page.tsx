import { FlexProps, Flex, HStack, IconButton, Icon, VStack, Spacer, Button, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PageProps extends FlexProps {
  children?: React.ReactNode;
}

const TopBar = ({ backTo }) => (
  <HStack px={2} py={2} borderBottom='1px' borderColor='gray.300' bg='gray.100'>
    {backTo && (<IconButton
      as={Link}
      to={backTo}
      variant='ghost'
      aria-label="Back"
      icon={<Icon as={FaArrowLeft} />} />
    )}
    <VStack align='flex-start' spacing={0}>
      <Text fontSize='xx-small'>Form</Text>
      <Text>Form 1 asdadadd</Text>
    </VStack>
  </HStack>
)


export const Page = ({ backTo, children, ...props }: PageProps) => (
  <Flex width='100%' minHeight='100%' direction='column' {...props}>
    <TopBar backTo={backTo} />
    {children}
  </Flex>
);
