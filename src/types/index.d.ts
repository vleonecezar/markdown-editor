import * as ACTIONS from '../context/actions/fileActions';

export interface File {
  id: number;
  title: string;
  body: string;
  lastUpdate: string;
  isFavorite: boolean;
}

export interface CreateFileAction {
  type: typeof ACTIONS.CREATE_FILE;
  payload: {
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

export interface ToggleFavoriteAction {
  type: typeof ACTIONS.TOGGLE_FAVORITE;
  payload: number;
}

export type Action =
  | CreateFileAction
  | SaveFileAction
  | DeleteFileAction
  | ToggleFavoriteAction;
