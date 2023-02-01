/* eslint-disable @typescript-eslint/no-loop-func */
import { File } from '../types';

const getUniqueId = (files: File[]) => {
  let uniqueId: number;
  do {
    uniqueId = +(Date.now() + Math.random() * 999).toFixed();
  } while (files.some((file) => file.id === uniqueId));

  return uniqueId;
};

export default getUniqueId;
