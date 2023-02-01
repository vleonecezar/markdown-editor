import { useLocation, useNavigate } from 'react-router-dom';
import { BsHeart, BsHeartFill, BsTrash } from 'react-icons/bs';
import { useFiles } from '../../context';
import {
  TOGGLE_FAVORITE_FILE,
  DELETE_FILE,
} from '../../context/actions/fileActions';

import * as S from './styled';

function List() {
  const { state, dispatch } = useFiles();
  const { pathname } = useLocation();
  const favoritesFiles = state.filter((file) => file.isFavorite);
  const files = pathname === '/' ? state : favoritesFiles;
  const navigate = useNavigate();

  const handleFavoriteFile = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    event.stopPropagation();
    dispatch({ type: TOGGLE_FAVORITE_FILE, payload: id });
  };

  const getDeletedFileConfirmation = () => {
    return window.confirm('Are you sure you want to delete this file?');
  };

  const deleteFileFromList = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    event.stopPropagation();

    if (getDeletedFileConfirmation()) {
      dispatch({ type: DELETE_FILE, payload: id });
    }
  };

  const openFileOnEditor = (id: number) => {
    navigate(`/editor/${id}`);
  };

  return (
    <S.List>
      {files.map(({ id, title, lastUpdate, isFavorite }) => (
        <S.Item key={id} onClick={() => openFileOnEditor(id)}>
          <S.FileTitle>{title}</S.FileTitle>
          <S.FileLastUpdate>Last Update: {lastUpdate}</S.FileLastUpdate>
          <S.ButtonsContainer>
            <S.FavoriteButton
              onClick={(event) => handleFavoriteFile(event, id)}
            >
              {isFavorite ? <BsHeartFill /> : <BsHeart />}
            </S.FavoriteButton>
            <S.DeleteButton onClick={(event) => deleteFileFromList(event, id)}>
              <BsTrash />
            </S.DeleteButton>
          </S.ButtonsContainer>
        </S.Item>
      ))}
    </S.List>
  );
}

export default List;
