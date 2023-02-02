import { File } from '../types';

function useGetCurrentFile(files: File[], id: number) {
  return files.find((file) => file.id === id);
}

export default useGetCurrentFile;
