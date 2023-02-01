import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from 'react';
import { Actions, File } from '../types';
import filesReducer, { initialState } from './reducers/files-reducer';

type Children = React.ReactNode;

interface ContextArguments {
  state: File[];
  dispatch: React.Dispatch<Actions>;
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
