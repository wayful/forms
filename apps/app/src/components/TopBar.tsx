import { FlexProps, HStack, IconButton, Icon, VStack, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface TopBarProps extends FlexProps {
  backTo?: string;
  children?: React.ReactNode;
}

export const TopBar = ({ backTo, children }: TopBarProps) => (
  <HStack px={2} py={2} borderBottom='1px' borderColor='gray.300' bg='gray.100'>
    <HStack flex={1}>
      {backTo && (<IconButton
        as={Link}
        to={backTo}
        variant='ghost'
        aria-label="Back"
        icon={<Icon as={FaArrowLeft} />} />
      )}
      <VStack align='flex-start' spacing={0}>
        {/* <Text fontSize='xx-small'>Form</Text>
        <Text>Form 1 asdadadd</Text> */}
      </VStack>
    </HStack>
    <HStack flex={1}>
      {children}
    </HStack>
    <HStack flex={1} justify='flex-end'>
      <Text>asds</Text>
    </HStack>
  </HStack>
)
