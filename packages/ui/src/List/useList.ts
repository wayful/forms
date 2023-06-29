import * as React from 'react'
import { createContext } from "@chakra-ui/react-utils"
// import { useDraggableList, UseDraggableListProps } from './useDraggableList'
import { useSelectableList, UseSelectableListProps } from './useSelectableList'

export interface UseListProps { // extends UseSelectableListProps {
  // direction?: 'ltr' | 'rtl',
  // children?: React.ReactNode,
}

export function useList(props: UseListProps = {}) {
  const {
    // onChange,
    // children,
    ...htmlProps
  } = props;

  // const selectable = useSelectableList(props)
  // const draggable = useDraggableList(props)

  return {
    // children,
    htmlProps,
    
    // ...selectable,
    // ...draggable
  }
}

export type UseListReturn = ReturnType<typeof useList>
