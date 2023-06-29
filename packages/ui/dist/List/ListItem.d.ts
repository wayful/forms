/// <reference types="react" />
import { HTMLChakraProps, ComponentWithAs } from '@chakra-ui/react';
import { UseListItemProps } from './useListItem';
export interface ListItemProps extends UseListItemProps, Omit<HTMLChakraProps<'div'>, 'onClick'>, Pick<HTMLChakraProps<'button'>, 'onClick'> {
    isActive?: boolean;
    children: React.ReactNode;
}
export declare const ListItem: ComponentWithAs<"div", ListItemProps>;
