import { useEffect, useState } from 'react';
import { File } from '../types';

function useStorage() {
  const getStoredFiles = (): File[] | [] => {
    return JSON.parse(localStorage.getItem('files') as string) || [];
  };

  const [storedFiles, setStoredFiles] = useState<File[]>(getStoredFiles());

  const handleStoredFiles = (files: File[]) => {
    setStoredFiles(files);
  };

  const setStoredFilesInLocalStorage = (files: File[]) => {
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
