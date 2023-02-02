import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsHeart, BsHeartFill, BsTrash } from 'react-icons/bs';
import { useFiles } from '../../context';
import useList from '../../hooks/useList';

import * as S from './styled';

function List() {
  const { state, dispatch } = useFiles();
  const [files, setFiles] = useState(state);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { openFileOnEditor, handleFavoriteFile, deleteFileFromList } = useList({
    navigate,
    dispatch,
  });

  useEffect(() => {
    if (pathname === '/favorites') {
      setFiles(state.filter((file) => file.isFavorite));
    } else if (pathname === '/') {
      setFiles(state);
    }
  }, [pathname, state]);

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
