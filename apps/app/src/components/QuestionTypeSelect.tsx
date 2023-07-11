import { MdNumbers, MdList } from 'react-icons/md';
import { CgFormatText } from 'react-icons/cg';
import { VscSymbolBoolean } from 'react-icons/vsc';
import { Button, ButtonGroup, Icon, IconButton, UseControllableStateProps, forwardRef, useControllableState } from "@chakra-ui/react"

import { QuestionTypeKind } from '../types';

interface QuestionTypeSelectProps extends UseControllableStateProps<QuestionTypeKind> {}

export const QuestionTypeSelect = forwardRef((props: QuestionTypeSelectProps, ref) => {
  const [value, setValue] = useControllableState(props);
  return (
    <ButtonGroup ref={ref} size='md' isAttached variant='outline' width='100%' {...props}>
      <Button
        flex={1}
        isActive={value === QuestionTypeKind.Number}
        onClick={() => setValue(QuestionTypeKind.Number)}>
        Number
      </Button>
      <Button
        flex={1}
        isActive={value === QuestionTypeKind.String}
        onClick={() => setValue(QuestionTypeKind.String)}>
        Text
      </Button>
      <Button
        flex={1}
        isActive={value === QuestionTypeKind.Boolean}
        onClick={() => setValue(QuestionTypeKind.Boolean)}>
        Boolean
      </Button>
      <Button
        flex={1}
        isActive={value === QuestionTypeKind.Options}
        onClick={() => setValue(QuestionTypeKind.Options)}>
        Options
      </Button>
    </ButtonGroup>
  )
})
