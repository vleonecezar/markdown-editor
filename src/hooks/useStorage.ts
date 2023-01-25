import { useEffect, useState } from 'react';
import { File } from '../types';

function useStorage() {
  const getStoredFiles = (): File[] | [] => {
    return JSON.parse(localStorage.getItem('storedFiles') as string) || [];
  };

  const [storedFiles, setStoredFiles] = useState<File[]>(getStoredFiles());

  const setStoredFilesInLocalStorage = (files: File[]) => {
    return localStorage.setItem('storedFiles', JSON.stringify(files));
  };

  useEffect(() => {
    setStoredFilesInLocalStorage(storedFiles);
  }, [storedFiles]);

  return {
    storedFiles,
    setStoredFiles,
  };
}

export default useStorage;
