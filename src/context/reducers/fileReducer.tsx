import { Action, File } from '../../types';
import * as ACTIONS from '../actions/fileActions';
import getDate from '../../utils/getDate';

export interface CreateNewFilePayload {
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
];

const createNewFile = (state: File[], payload: CreateNewFilePayload) => {
  const { id, title } = payload;
  return [
    ...state,
    {
      id,
      title,
      body: '',
      lastUpdate: getDate(),
      isFavorite: false,
    },
  ];
};

const saveFile = (state: File[], payload: SaveFilePayload) => {
  const { id, body } = payload;
  return state.map((file) => {
    if (file.id === id) {
      return { ...file, body, lastUpdate: getDate() };
    }

    return file;
  });
};

const deleteFile = (state: File[], payload: number) => {
  return state.filter((file) => {
    const id = payload;
    return file.id !== id;
  });
};

const toggleFavoriteFile = (state: File[], payload: number) => {
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
    case ACTIONS.CREATE_NEW_FILE:
      return createNewFile(state, action.payload);
    case ACTIONS.SAVE_FILE:
      return saveFile(state, action.payload);
    case ACTIONS.DELETE_FILE:
      return deleteFile(state, action.payload);
    case ACTIONS.TOGGLE_FAVORITE_FILE:
      return toggleFavoriteFile(state, action.payload);
    default:
      return handleUnknownAction();
  }
}

export default filesReducer;
