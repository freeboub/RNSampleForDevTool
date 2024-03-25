import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useRef,
} from 'react';
import {HeaderContext} from './HeaderContext';

/* define and create context Ref */
const HeaderContextRef = createContext({
  setHeaderRef: {current: (_arg: string) => {}},
  headerRef: {current: ''},
});

type HeaderProviderRefProps = PropsWithChildren<{
  children: JSX.Element;
}>;

const HeaderProviderRef = ({children}: HeaderProviderRefProps) => {
  const {header, setHeader} = useContext(HeaderContext);
  const headerRef = useRef(header);
  headerRef.current = header;
  const setHeaderRef = useRef(setHeader);
  setHeaderRef.current = setHeader;

  const value = useMemo(
    () => ({
      headerRef,
      setHeaderRef,
    }),
    [],
  );
  return (
    <HeaderContextRef.Provider value={value}>
      {children}
    </HeaderContextRef.Provider>
  );
};

export type {HeaderProviderRefProps};
export {HeaderContextRef, HeaderProviderRef};
