import * as ACTIONS from '../context/actions/file-actions';

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

export type Actions =
  | CreateNewFileAction
  | SaveFileAction
  | DeleteFileAction
  | ToggleFavoriteFileAction;

export type Navigate = (path: string) => void;

export type DispatchActions = React.Dispatch<Actions>;
