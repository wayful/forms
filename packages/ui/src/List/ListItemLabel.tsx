import * as React from 'react'
import { __DEV__, cx } from '@chakra-ui/utils'
import { chakra, forwardRef, HTMLChakraProps, useStyles, SystemStyleObject, ComponentWithAs } from '@chakra-ui/react'
import { useListItemLabel, UseListItemLabelProps } from './useListItemLabel'

export interface ListItemLabelProps extends UseListItemLabelProps, HTMLChakraProps<'div'> {
  children: React.ReactNode,
  before?: React.ReactNode,
  after?: React.ReactNode,
  isSelected?: boolean,
  spacing?: number | string
}

export const ListItemLabel: ComponentWithAs<"div", ListItemLabelProps> = forwardRef<ListItemLabelProps, 'div'>((props, ref) => {
  const { className, ...rest } = props

  const styles = useStyles()
  
  const {
    // isSelectable
  } = useListItemLabel(props)

  // const aliasedProps = filterUndefined({
  //   textAlign: align,
  //   textDecoration: decoration,
  //   textTransform: casing,
  // })

  // const label = (
  //   <chakra.p
  //     ref={isSelectable ? undefined : ref}
  //     className={cx('list-item-label', className)}
  //     // {...aliasedProps}
  //     {...rest}
  //     __css={styles.label} />
  // )

  return <chakra.div
    ref={ref}
    className={cx('list-item-label', className)}
    {...rest}
    __css={styles.label} /> 
})

if (__DEV__) {
  ListItemLabel.displayName = 'ListItemLabel'
}
