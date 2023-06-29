import * as React from 'react';
import { HTMLChakraProps, ComponentWithAs } from '@chakra-ui/react';
import { UseListItemLabelProps } from './useListItemLabel';
export interface ListItemLabelProps extends UseListItemLabelProps, HTMLChakraProps<'div'> {
    children: React.ReactNode;
    before?: React.ReactNode;
    after?: React.ReactNode;
    isSelected?: boolean;
    spacing?: number | string;
}
export declare const ListItemLabel: ComponentWithAs<"div", ListItemLabelProps>;
