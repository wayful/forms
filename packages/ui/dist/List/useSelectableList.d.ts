import * as React from 'react';
export interface ListItemCheckboxProps {
    isSelected: boolean;
    onSelect: (value: boolean) => void;
}
export declare const ListItemCheckbox: ({ isSelected, onSelect, ...rest }: ListItemCheckboxProps) => import("react/jsx-runtime").JSX.Element;
export interface UseSelectableListProps {
    children?: React.ReactNode;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    onSelect?: (value: string) => void;
    onUnselect?: (value: string) => void;
    defaultValue?: string | string[];
    isSelectable?: boolean;
    SelectHandle?: React.ComponentType<ListItemCheckboxProps>;
}
export declare function useSelectableList(props: UseSelectableListProps): {
    value: string | string[];
    onChange: (selectedValue: string) => void;
    isSelectable: boolean;
    SelectHandle: (({ isSelected, onSelect, ...rest }: ListItemCheckboxProps) => import("react/jsx-runtime").JSX.Element) | React.ComponentType<ListItemCheckboxProps>;
};
export default useSelectableList;
