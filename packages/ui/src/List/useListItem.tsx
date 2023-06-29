// import { useDrag, useDrop } from 'react-dnd'
import { createContext, getValidChildren } from '@chakra-ui/react-utils'

import { useListContext } from './ListContext'
import { useCallback } from 'react'

export interface UseListItemProps {
  // value?: string,
  // direction?: 'ltr' | 'rtl',
  // onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function useListItem(props: UseListItemProps) {
  const { ...htmlProps } = props
  // const { isSelectable, SelectHandle, isDraggable, DragHandle, value, onChange } = useListContext()

  // const [_, drop] = useDrop({
  //   accept: 'ListItem',
  // })
  // const [{ isDragging }, drag, preview] = useDrag(
  //   () => ({
  //     type: 'ListItem',
  //     // item: { text },
  //     collect: (monitor) => ({
  //       isDragging: monitor.isDragging(),
  //     })
  //   }),
  //   []
  // )

  // const onSelect = useCallback(() => !!props.value && onChange(props.value), [props.value, onChange])

  return {
    htmlProps,
    // drag,
    // preview,
    // drop,
    // isDragging,
    // value: props.value,
    // onClick: props.onClick,
    // isSelected: !!props.value && value.includes(props.value),
    // isSelectable,
    // onSelect,
    // SelectHandle,
    // isDraggable,
    // DragHandle
  }
}

export interface UseListItemReturn extends ReturnType<typeof useListItem> {}
export type ListItemContext = Omit<UseListItemReturn, 'htmlProps' | 'drag' | 'drop' | 'preview' | 'isDragging' | 'onSelect' | 'onClick' | 'isSelected' | 'isSelectable' | 'SelectHandle' |'isDraggable' | 'DragHandle'>

export const [ListItemProvider, useListItemContext] = createContext<ListItemContext>({
  strict: false,
  name: 'ListItemContext',
})
