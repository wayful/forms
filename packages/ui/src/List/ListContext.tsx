import { createStylesContext } from "@chakra-ui/react";
import { createContext } from "@chakra-ui/react-context";

import { UseListReturn } from "./useList";

export const [ ListStylesProvider, useListStyles ] = createStylesContext('List');

export type ListContext = Omit<UseListReturn, "htmlProps">

export const [ListProvider, useListContext] = createContext<ListContext>({
  strict: false,
  name: 'ListContext',
  hookName: 'useListContext',
  providerName: '<List />',
});
