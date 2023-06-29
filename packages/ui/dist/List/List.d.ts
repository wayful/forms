import * as React from 'react';
import { ThemingProps, HTMLChakraProps, ComponentWithAs } from '@chakra-ui/react';
import { UseListProps } from './useList';
export interface ListProps extends UseListProps, Omit<HTMLChakraProps<"div">, keyof UseListProps>, ThemingProps<'List'> {
    size?: '';
    variant?: string;
    children: React.ReactNode;
}
export declare const List: ComponentWithAs<"div", ListProps>;
