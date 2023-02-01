import * as ACTIONS from '../context/actions/fileActions';

export interface File {
  id: number;
  title: string;
  body: string;
  lastUpdate: string;
  isFavorite: boolean;
}

export interface CreateNewFileAction {
  type: typeof ACTIONS.CREATE_NEW_FILE;
  payload: {
    id: number;
    title: string;
  };
}

export interface SaveFileAction {
  type: typeof ACTIONS.SAVE_FILE;
  payload: {
    id: number;
    body: string;
  };
}

export interface DeleteFileAction {
  type: typeof ACTIONS.DELETE_FILE;
  payload: number;
}

export interface ToggleFavoriteFileAction {
  type: typeof ACTIONS.TOGGLE_FAVORITE_FILE;
  payload: number;
}

export type Action =
  | CreateNewFileAction
  | SaveFileAction
  | DeleteFileAction
  | ToggleFavoriteFileAction;
