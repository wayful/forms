import * as React from 'react';
import { ComponentWithAs, HTMLChakraProps } from '@chakra-ui/react';
import { UseListItemLabelProps } from './useListItemLabel';
export interface ListItemStatProps extends UseListItemLabelProps, HTMLChakraProps<'div'> {
    children: React.ReactNode;
}
export declare const ListItemStat: ComponentWithAs<"div", ListItemStatProps>;
