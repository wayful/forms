import { BsThreeDots } from 'react-icons/bs';
import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, MenuProps } from "@chakra-ui/react";

interface FormListItemMenuProps extends Omit<MenuProps,'children'> {}

export const FormListItemMenu = (props: FormListItemMenuProps) => (
  <Menu size='xs' {...props}>
    <MenuButton
      size='sm'
      as={IconButton}
      aria-label='Options'
      icon={<Icon as={BsThreeDots} />}
      variant='ghost'
    />
    <MenuList>
      <MenuItem command='⌘T'>
        New Tab
      </MenuItem>
      <MenuItem command='⌘N'>
        New Window
      </MenuItem>
      <MenuItem command='⌘⇧N'>
        Open Closed Tab
      </MenuItem>
      <MenuItem command='⌘O'>
        Open File...
      </MenuItem>
    </MenuList>
  </Menu>
);
