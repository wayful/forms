/// <reference types="react" />
import { UseListReturn } from "./useList";
export declare const ListStylesProvider: import("react").Provider<Record<string, import("@chakra-ui/styled-system").SystemStyleObject>>, useListStyles: () => Record<string, import("@chakra-ui/styled-system").SystemStyleObject>;
export type ListContext = Omit<UseListReturn, "htmlProps">;
export declare const ListProvider: import("react").Provider<ListContext>, useListContext: () => ListContext;
