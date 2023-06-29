import * as React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DragHandleIcon } from '@chakra-ui/icons'
import { chakra, forwardRef, useStyles } from '@chakra-ui/react'

export interface ListItemDragHandleProps {}

export const ListItemDragHandle = forwardRef<ListItemDragHandleProps, 'div'>((props, ref) => {
  const styles = useStyles()

  return (
    <chakra.div ref={ref} __css={styles.drag}>
      <DragHandleIcon />
    </chakra.div>
  )
})

export interface UseDraggableListProps {
  children?: React.ReactNode,
  isDraggable?: boolean,
  DragHandle?: React.ComponentType<ListItemDragHandleProps>,
}

export function useDraggableList(props: UseDraggableListProps) {
  const {
    // children,
    isDraggable = false,
    DragHandle = ListItemDragHandle,
    // ...rest
  } = props

  return {
    // ...rest,
    isDraggable,
    DragHandle
  }
}

export interface UseDraggableListItemProps {

}

export function useDraggableListItem(props: UseDraggableListItemProps) {
  const ref = React.useRef(null)
  const [_, drop] = useDrop(() => ({
    accept: 'ListItem',
  }))
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ListItem',
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  drag(drop(ref));

  return {
    ...props,
    ref,
  }
}
