import React, {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from 'react';

/* define and create context */
const HeaderContext = createContext({
  setHeader: (_arg: string) => {},
  header: '',
});

type HeaderProviderProps = PropsWithChildren<{
  children: JSX.Element;
}>;

const HeaderProvider = ({children}: HeaderProviderProps) => {
  const [header, setHeader] = useState('');

  const value = useMemo(() => {
    return {header, setHeader};
  }, [header]);

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export type {HeaderProviderProps};
export {HeaderContext, HeaderProvider};
