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
  const storedFiles: File[] = JSON.parse(
    localStorage.getItem('storedFiles') as string
  );
  const chosenState: File[] = storedFiles.length ? storedFiles : initialState;
  const [state, dispatch] = useReducer(filesReducer, chosenState);
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
