import { useEffect, useState } from 'react';
import { FilesState } from '../types';

function useStorage() {
  const getStoredFiles = (): FilesState => {
    return JSON.parse(localStorage.getItem('files') as string) || [];
  };

  const [storedFiles, setStoredFiles] = useState<FilesState>(getStoredFiles());

  const handleStoredFiles = (files: FilesState) => {
    setStoredFiles(files);
  };

  const setStoredFilesInLocalStorage = (files: FilesState) => {
    return localStorage.setItem('files', JSON.stringify(files));
  };

  useEffect(() => {
    setStoredFilesInLocalStorage(storedFiles);
  }, [storedFiles]);

  return {
    storedFiles,
    handleStoredFiles,
  };
}

export default useStorage;
