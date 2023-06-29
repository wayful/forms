import { MdNumbers, MdList } from 'react-icons/md';
import { CgFormatText } from 'react-icons/cg';
import { VscSymbolBoolean } from 'react-icons/vsc';
import { ButtonGroup, Icon, IconButton, UseControllableStateProps, forwardRef, useControllableState } from "@chakra-ui/react"

import { QuestionTypeKind } from '../types';

interface QuestionTypeSelectProps extends UseControllableStateProps<QuestionTypeKind> {}

export const QuestionTypeSelect = forwardRef((props: QuestionTypeSelectProps, ref) => {
  const [value, setValue] = useControllableState(props);
  return (
    <ButtonGroup ref={ref} size='md' isAttached variant='outline' {...props}>
      <IconButton
        aria-label='Number'
        icon={<Icon as={MdNumbers} />} 
        isActive={value === QuestionTypeKind.Number}
        onClick={() => setValue(QuestionTypeKind.Number)} />
      <IconButton
        aria-label='Text'
        icon={<Icon as={CgFormatText} />}
        isActive={value === QuestionTypeKind.String}
        onClick={() => setValue(QuestionTypeKind.String)} />
      <IconButton
        aria-label='Boolean'
        icon={<Icon as={VscSymbolBoolean} />}
        isActive={value === QuestionTypeKind.Boolean}
        onClick={() => setValue(QuestionTypeKind.Boolean)} />
      <IconButton
        aria-label='Boolean'
        icon={<Icon as={MdList} />}
        isActive={value === QuestionTypeKind.Options}
        onClick={() => setValue(QuestionTypeKind.Options)} />
    </ButtonGroup>
  )
})
