import { useEffect, useState } from 'react';
import { File } from '../types';

function useStorage() {
  const getStoredFiles: File[] =
    JSON.parse(localStorage.getItem('files') as string) || [];
  const [storedFiles, setStoredFiles] = useState<File[]>(getStoredFiles);

  const handleStoredFiles = (files: File[]) => {
    setStoredFiles(files);
  };

  useEffect(() => {
    localStorage.setItem('files', JSON.stringify(storedFiles));
  }, [storedFiles]);

  return {
    storedFiles,
    handleStoredFiles,
  };
}

export default useStorage;
