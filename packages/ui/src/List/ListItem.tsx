import { useRef, useMemo } from 'react'
import { cx, dataAttr, __DEV__ } from "@chakra-ui/utils"
import { chakra, forwardRef, useStyles, HTMLChakraProps, ComponentWithAs } from '@chakra-ui/react'

import { ListItemLabel } from './ListItemLabel'
import { ListItemProvider, useListItem, UseListItemProps } from './useListItem'
import { ListItemStat } from './ListItemStat'
import { useListStyles } from './ListContext'

export interface ListItemProps extends UseListItemProps, Omit<HTMLChakraProps<'div'>, 'onClick'>, Pick<HTMLChakraProps<'button'>, 'onClick'> {
  isActive?: boolean,
  children: React.ReactNode
}

// type ListItemType = ComponentWithAs<'div', ListItemProps> & { Label: typeof ListItemLabel, Stat: typeof ListItemStat }

export const ListItem = forwardRef<ListItemProps, 'div'>((props, ref) => {
  const {
    className,
    isActive = false,
    children: _children,
    onClick: _onClick,
    ...rest
  } = props
  
  // const ref = useRef<HTMLDivElement>(null)
  const styles = useListStyles()

  const {
    // drag,
    // drop,
    // preview,
    // isDragging,
    htmlProps,
    // onClick,

    // onSelect,
    // isSelected,
    // isSelectable,
    // SelectHandle,

    // isDraggable,
    // DragHandle,
    
    ...ctx
  } = useListItem(props)

  const context = useMemo(() => ctx, [ctx])
  
  const itemStyles = {
    width: '100%',
    display: 'flex',

    // opacity: isDragging ? 0 : 1,

    "> *:first-child:not(:last-child)": {
      borderEnd: 0,
      borderEndRadius: 0
    },
    "> *:not(:first-child):last-child": {
      borderStartRadius: 0
    },
    "> *:not(:first-child):not(:last-child)": {
      borderEnd: 0,
      borderRadius: 0
    },

    "> button:not(:first-child) > *:first-child": {
      borderStartRadius: 0
    },

    ...styles.item,
  }

  const buttonStyles = {
    flex: 1,
    display: 'flex',

    "> *:first-child:not(:last-child)": {
      borderEnd: 0,
      borderEndRadius: 0
    },
    "> *:not(:first-child):last-child": {
      borderStartRadius: 0
    },
    "> *:not(:first-child):not(:last-child)": {
      borderEnd: 0,
      borderEndRadius: 0
    },
  }

  // preview(drop(ref))

  const children = typeof props.children === 'string' ? <ListItemLabel>{props.children}</ListItemLabel> : props.children

  return (
    <ListItemProvider value={context}>
      <chakra.div
        ref={ref}
        {...htmlProps}
        // data-active={dataAttr(isActive)}
        className={cx("formed-list__item", className)}
        __css={itemStyles}>
        {/* {isDraggable && (<DragHandle ref={drag} />)} */}
        {/* {isSelectable && (<SelectHandle isSelected={isSelected} onSelect={onSelect} />)} */}
        {/* {onClick
          ? <chakra.button onClick={onClick} __css={buttonStyles} children={children} />
          : children
        } */}
        {children}
      </chakra.div>
    </ListItemProvider>
  )
})

ListItem.displayName = 'ListItem';

// ListItem.Stat = ListItemStat
// ListItem.Label = ListItemLabel

