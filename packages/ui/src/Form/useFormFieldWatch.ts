import { useWatch } from 'react-hook-form'

import { useFormFragmentContext } from './useFormFragmentContext';

export interface UseFormFieldWatchProps {
  name: string;
}

export const useFormFieldWatch = (props: UseFormFieldWatchProps) => {
  const fragment = useFormFragmentContext();
  const name = fragment ? `${fragment.path}.${props.name}` : props.name;

  return useWatch({ ...props, name });
}
