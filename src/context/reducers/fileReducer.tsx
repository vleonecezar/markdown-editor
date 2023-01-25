import { Action, File } from '../../types';
import * as ACTIONS from '../actions/fileActions';

export interface CreateFilePayload {
  id: number;
  title: string;
}

export interface SaveFilePayload {
  id: number;
  body: string;
}

export const initialState: File[] = [
  {
    id: 1,
    title: 'This is an example',
    body: '#Hello World!',
    lastUpdate: '00/00/00',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'This is an example 2',
    body: '##Hello World 2!',
    lastUpdate: '00/00/00',
    isFavorite: true,
  },
];

const createFile = (state: File[], payload: CreateFilePayload) => {
  const { id, title } = payload;
  return [
    ...state,
    { id, title, body: '', lastUpdate: '00/00/00', isFavorite: false },
  ];
};

const saveFile = (state: File[], payload: SaveFilePayload) => {
  const { id, body } = payload;
  return state.map((file) => {
    if (file.id === id) {
      return { ...file, body };
    }

    return file;
  });
};

const deleteFile = (state: File[], payload: number) => {
  return state.filter((file) => file.id !== payload);
};

const toggleFavorite = (state: File[], payload: number) => {
  return state.map((file) => {
    const id = payload;
    if (file.id === id) {
      return { ...file, isFavorite: !file.isFavorite };
    }

    return file;
  });
};

const handleUnknownAction = () => {
  throw new Error('Unknown action type');
};

function filesReducer(state: File[], action: Action) {
  switch (action.type) {
    case ACTIONS.CREATE_FILE:
      return createFile(state, action.payload);
    case ACTIONS.SAVE_FILE:
      return saveFile(state, action.payload);
    case ACTIONS.DELETE_FILE:
      return deleteFile(state, action.payload);
    case ACTIONS.TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    default:
      return handleUnknownAction();
  }
}

export default filesReducer;
