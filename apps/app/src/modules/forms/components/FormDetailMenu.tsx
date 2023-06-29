import { FaLink, FaPlus, FaEllipsisH, } from "react-icons/fa";
import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const FormDetailMenu = () => (
  <Menu>
    <MenuButton
      as={IconButton}
      variant='ghost'
      aria-label='Options'
      icon={<Icon as={FaEllipsisH} />}
    />
    <MenuList>
      <MenuItem icon={<Icon as={FaPlus} />} command='⌘T'>
        New Tab
      </MenuItem>
      <MenuItem icon={<Icon as={FaLink} />} command='⌘N'>
        New Window
      </MenuItem>
    </MenuList>
  </Menu>
)
