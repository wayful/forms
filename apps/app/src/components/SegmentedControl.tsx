import React, { Children, cloneElement } from "react";
import { chakra, Box, Button, ButtonGroup, Icon, IconButton, UseRadioGroupProps, useRadio, useRadioGroup, ButtonProps, useControllableState, UseControllableStateProps } from "@chakra-ui/react"
import { QuestionTypeKind } from "../types";
import { VscSymbolBoolean } from "react-icons/vsc";


interface SegmentedControlProps<T> extends UseControllableStateProps<T> {
  children: React.ReactNode;
}

export const SegmentedControl = <T,>({ children, ...props }: SegmentedControlProps<T>) => {
  const [value, setValue] = useControllableState(props)

  return (
    <ButtonGroup size='md' isAttached variant='outline'>
      {children}
      {/* {Children.map(children, (child, index) => cloneElement(child, getRadioProps()))} */}
      <IconButton
        aria-label='Number'
        icon={<Icon as={MdNumbers} />} 
        isActive={value === QuestionTypeKind.Number}
        onClick={() => setValue(QuestionTypeKind.Number)} />
    </ButtonGroup>
  )
}

interface SegmentedControlItemProps extends UseRadioGroupProps, Omit<ButtonProps, 'value' | 'onChange'> {
  children?: React.ReactNode;
}

export const SegmentedControlItem = ({ ...props }: SegmentedControlItemProps) => {
  const { name, value, defaultValue, onChange, isDisabled, isFocusable, isNative, ...buttonProps } = props
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } = useRadio({ name, value, defaultValue, onChange, isDisabled, isFocusable, isNative })

  console.log(getInputProps())
  return (
    // <chakra.label {...htmlProps} cursor='pointer'>
      <chakra.input as={Button} type="radio" {...getRadioProps()}  {...buttonProps} />
      // <Button {...buttonProps} />
    // </chakra.label>
  )
}
