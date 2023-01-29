import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
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
  const storedFiles =
    JSON.parse(localStorage.getItem('storedFiles') as string) || [];

  const a = storedFiles.length !== 0 ? storedFiles : initialState;
  const [state, dispatch] = useReducer(filesReducer, a);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    localStorage.setItem('storedFiles', JSON.stringify(state));
  }, [state]);

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
}

export default FileContextProvider;

export const useFile = () => useContext(FileContext);
