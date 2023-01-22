import { FilesState, Action, File } from '../../types';
import {
  CREATE_FILE,
  REMOVE_FILE,
  HANDLE_FAVORITE,
} from '../actions/fileActions';

export const initialState: FilesState = [
  {
    id: 1,
    title: 'This is an example',
    body: 'Hello World!',
    lastUpdate: '00/00/00',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'This is an example 2',
    body: 'Hello World 2!',
    lastUpdate: '00/00/00',
    isFavorite: true,
  },
];

const createFile = (state: FilesState, payload: File) => {
  return [...state, payload];
};

const removeFile = (state: FilesState, payload: number) => {
  return state.filter((file) => file.id !== payload);
};

const handleFavorite = (state: FilesState, payload: number) => {
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

function filesReducer(state: FilesState, action: Action) {
  switch (action.type) {
    case CREATE_FILE:
      return createFile(state, action.payload);
    case REMOVE_FILE:
      return removeFile(state, action.payload);
    case HANDLE_FAVORITE:
      return handleFavorite(state, action.payload);
    default:
      return handleUnknownAction();
  }
}

export default filesReducer;
