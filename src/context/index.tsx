import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { Action, File } from '../types';
import filesReducer, { initialState } from './reducers/fileReducer';

type Children = React.ReactNode;

interface ContextArgument {
  state: File[];
  dispatch: React.Dispatch<Action>;
}

const contextArgument = {
  state: initialState,
  dispatch: () => null,
};

const FileContext = createContext<ContextArgument>(contextArgument);

function FileContextProvider({ children }: { children: Children }) {
  const [state, dispatch] = useReducer(filesReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
}

export default FileContextProvider;

export const useFile = () => useContext(FileContext);
