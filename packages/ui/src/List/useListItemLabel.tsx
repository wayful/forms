import * as React from 'react'
import { createContext } from '@chakra-ui/react-utils'

import { useListContext } from './ListContext'
import { useListItemContext } from './useListItem'

export interface UseListItemLabelProps {

}

export function useListItemLabel(props: UseListItemLabelProps) {
  // const { isSelectable, onChange } = useListContext()
  // const { value } = useListItemContext()

  // const onClick: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   value && onChange(value)
  //   // props.onClick?.(event)
  // }

  // const isSelected = value.includes(child.props.value)

  return {
    // isSelectable,
  }
}

export interface UseListItemLabelReturn extends ReturnType<typeof useListItemLabel> {}

export const [ListItemLabelProvider, useListItemLabelContext] = createContext<UseListItemLabelReturn>({
  strict: false,
  name: 'ListItemLabelContext',
})
