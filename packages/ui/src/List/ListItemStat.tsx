import * as React from 'react'
import { __DEV__, cx } from '@chakra-ui/utils'
import { chakra, ComponentWithAs, forwardRef, HTMLChakraProps, useStyles } from '@chakra-ui/react'
import { useListItemLabel, UseListItemLabelProps } from './useListItemLabel'

export interface ListItemStatProps extends UseListItemLabelProps, HTMLChakraProps<'div'> {
  children: React.ReactNode,
}

export const ListItemStat: ComponentWithAs<"div", ListItemStatProps> = forwardRef<ListItemStatProps, 'div'>((props, ref) => {
  const styles = useStyles()
  const { className, ...rest } = props
  
  // const { onClick } = useListItemLabel(props)

  return <chakra.div
    ref={ref}
    className={cx('list-item-label')}
    {...rest}
    __css={styles.stat} /> 
})

if (__DEV__) {
  ListItemStat.displayName = 'ListItemStat'
}
