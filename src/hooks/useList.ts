import {
  DELETE_FILE,
  TOGGLE_FAVORITE_FILE,
} from '../context/actions/file-actions';
import { deletedFileConfirmationMsg } from '../constants/warnings';
import { Navigate, DispatchActions } from '../types';

interface Props {
  navigate: Navigate;
  dispatch: DispatchActions;
}

type Event = React.MouseEvent<HTMLButtonElement, MouseEvent>;

function useList({ navigate, dispatch }: Props) {
  const openFileOnEditor = (id: number) => {
    navigate(`/editor/${id}`);
  };

  const handleFavoriteFile = (event: Event, id: number) => {
    event.stopPropagation();
    dispatch({ type: TOGGLE_FAVORITE_FILE, payload: id });
  };

  const getDeletedFileConfirmation = () => {
    return window.confirm(deletedFileConfirmationMsg);
  };

  const deleteFileFromList = (event: Event, id: number) => {
    event.stopPropagation();

    if (getDeletedFileConfirmation()) {
      dispatch({ type: DELETE_FILE, payload: id });
    }
  };

  return { openFileOnEditor, handleFavoriteFile, deleteFileFromList };
}

export default useList;
