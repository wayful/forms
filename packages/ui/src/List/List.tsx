import * as React from 'react'
import { cx } from "@chakra-ui/shared-utils"

import {
  chakra,
  forwardRef,
  omitThemingProps,
  useMultiStyleConfig,
  ThemingProps,
  HTMLChakraProps,
  ComponentWithAs
} from '@chakra-ui/react'

import { useList, UseListProps } from './useList'
import { ListProvider, ListStylesProvider } from './ListContext'

export interface ListProps extends UseListProps, Omit<HTMLChakraProps<"div">, keyof UseListProps>, ThemingProps<'List'> {
  size?: '';
  variant?: string;
  children: React.ReactNode;
}

export const List: ComponentWithAs<"div", ListProps> = forwardRef<ListProps, 'div'>((props, ref) => {
  const { className, children } = props
  
  const ownProps = omitThemingProps(props);
  const styles = useMultiStyleConfig('List', props);

  const { htmlProps, ...ctx } = useList(ownProps);
  const context = React.useMemo(() => ctx, [ctx]);

  return (
    <ListProvider value={context}>
      <ListStylesProvider value={styles}>
        <chakra.div
          ref={ref}
          {...htmlProps}
          className={cx("formed-list", className)}
          __css={styles.root}>
          {children}
        </chakra.div>
      </ListStylesProvider>
    </ListProvider>
  )
})

List.displayName = 'List';
