/// <reference types="react" />
export interface UseListItemProps {
}
export declare function useListItem(props: UseListItemProps): {
    htmlProps: {};
};
export interface UseListItemReturn extends ReturnType<typeof useListItem> {
}
export type ListItemContext = Omit<UseListItemReturn, 'htmlProps' | 'drag' | 'drop' | 'preview' | 'isDragging' | 'onSelect' | 'onClick' | 'isSelected' | 'isSelectable' | 'SelectHandle' | 'isDraggable' | 'DragHandle'>;
export declare const ListItemProvider: import("react").Provider<ListItemContext>, useListItemContext: () => ListItemContext;
