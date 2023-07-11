import { createContext, useContext, useMemo } from "react";

interface FormFragmentContext {
  path: string;
}

const FormFragmentContext = createContext<FormFragmentContext | null>(null);

export const useFormFragmentContext = () => useContext(FormFragmentContext);

interface FormFragmentProviderProps extends FormFragmentContext {
  children: React.ReactNode | React.ReactNode[];
}

export const FormFragmentProvider = ({ children, ...rest }: FormFragmentProviderProps) => (
  <FormFragmentContext.Provider value={rest}>
    {children}
  </FormFragmentContext.Provider>
);

interface FormFieldPathProps {
  name: string;
  children: React.ReactNode | React.ReactNode[];
}

export const FormFieldPath = (props: FormFieldPathProps) => {
  const fragment = useFormFragmentContext()
  const name = fragment ? `${fragment.path}.${props.name}` : props.name;
  const context = useMemo(() => ({ path: name }), [name])
  return (
    <FormFragmentContext.Provider value={context}>
      {props.children}
    </FormFragmentContext.Provider>
  )
};