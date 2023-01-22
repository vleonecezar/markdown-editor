/* eslint-disable import/no-extraneous-dependencies */

import { BsHeart, BsHeartFill, BsTrash } from 'react-icons/bs';
import { Action, FilesState } from '../../types';
import { Container, ListComponent, ListItem } from './styled';

interface ContextArgument {
  files: FilesState;
  dispatch: React.Dispatch<Action>;
}

function List({ files, dispatch }: ContextArgument) {
  const handleFavorite = (id: number) => {
    dispatch({ type: 'HANDLE_FAVORITE', payload: id });
  };

  const removeFile = (id: number) => {
    dispatch({ type: 'REMOVE_FILE', payload: id });
  };

  return (
    <Container>
      <ListComponent>
        {files.map(({ id, title, lastUpdate, isFavorite }) => (
          <ListItem key={id}>
            <span>{title}</span>
            <span>Last Update: {lastUpdate}</span>
            <div>
              <button type="button" onClick={() => handleFavorite(id)}>
                {isFavorite ? <BsHeartFill /> : <BsHeart />}
              </button>
              <button type="button" onClick={() => removeFile(id)}>
                <BsTrash />
              </button>
            </div>
          </ListItem>
        ))}
      </ListComponent>
    </Container>
  );
}

export default List;
