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

interface ContextArguments {
  state: File[];
  dispatch: React.Dispatch<Action>;
}

const contextArguments = {
  state: initialState,
  dispatch: () => null,
};

const FilesContext = createContext<ContextArguments>(contextArguments);

function FilesContextProvider({ children }: { children: Children }) {
  const localStorageFiles =
    JSON.parse(localStorage.getItem('storedFiles') as string) || [];
  const getState = localStorageFiles.length ? localStorageFiles : initialState;
  const [state, dispatch] = useReducer(filesReducer, getState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    localStorage.setItem('storedFiles', JSON.stringify(state));
  }, [state]);

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
}

export default FilesContextProvider;

export const useFiles = () => useContext(FilesContext);
