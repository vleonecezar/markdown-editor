import {
  CREATE_FILE,
  REMOVE_FILE,
  HANDLE_FAVORITE,
} from '../context/actions/fileActions';

export interface File {
  id: number;
  title: string;
  body?: string;
  lastUpdate: string;
  isFavorite: boolean;
}

type FilesState = File[] | [];

export interface CreateFileAction {
  type: typeof CREATE_FILE;
  payload: File;
}

export interface RemoveFileAction {
  type: typeof REMOVE_FILE;
  payload: number;
}

export interface HandleFavoriteAction {
  type: typeof HANDLE_FAVORITE;
  payload: number;
}

export type Action = CreateFileAction | RemoveFileAction | HandleFavoriteAction;
