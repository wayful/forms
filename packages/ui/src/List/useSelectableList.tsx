import * as React from 'react'
import { Checkbox, useControllableState, useStyles } from '@chakra-ui/react'
import { isArray, addItem, removeItem } from '@chakra-ui/utils'

export interface ListItemCheckboxProps {
  isSelected: boolean
  onSelect: (value: boolean) => void
}

export const ListItemCheckbox = ({ isSelected, onSelect, ...rest }: ListItemCheckboxProps) => {
  const styles = useStyles()
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect && onSelect(event.target.checked)
  }, [onSelect])

  return <Checkbox {...rest} isChecked={isSelected} onChange={handleChange} sx={styles.checkbox} />
}

export interface UseSelectableListProps {
  children?: React.ReactNode,
  value?: string | string[],
  onChange?: (value: string | string[]) => void,
  onSelect?: (value: string) => void,
  onUnselect?: (value: string) => void,
  defaultValue?: string | string[],
  isSelectable?: boolean,
  SelectHandle?: React.ComponentType<ListItemCheckboxProps>,
}

export function useSelectableList(props: UseSelectableListProps) {
  const {
    value: valueProp,
    onChange: onChangeProp,
    onSelect,
    onUnselect,
    defaultValue: defaultValueProp,
    isSelectable = false,
    SelectHandle = ListItemCheckbox,
    // ...rest
  } = props
 
  const [value, setValue] = useControllableState({
    value: valueProp,
    onChange: onChangeProp,
    defaultValue: defaultValueProp || [],
  })

  const onChange = React.useCallback((selectedValue: string) => {
    if (isArray(value)) {
      if (value.includes(selectedValue)) {
        setValue(removeItem(value, selectedValue))
        onUnselect?.(selectedValue)
      } else {
        setValue(addItem(value, selectedValue))
        onSelect?.(selectedValue)
      }
    }
  }, [value, setValue])

  return {
    value,
    onChange,
    isSelectable,
    SelectHandle,
  }
}

export default useSelectableList
