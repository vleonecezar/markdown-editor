import { BsHeart, BsHeartFill, BsTrash } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFile } from '../../context';
import { Container, ListComponent, ListItem } from './styled';

function List() {
  const { state, dispatch } = useFile();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const favorites = state.filter((file) => file.isFavorite);
  const files = pathname === '/' ? state : favorites;

  const handleFavorite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    event.stopPropagation();
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
  };

  const removeFile = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    event.stopPropagation();
    const response = window.confirm(
      'Are you sure you want to delete this file?'
    );
    if (response) dispatch({ type: 'DELETE_FILE', payload: id });
  };

  const openFileOnEditor = (id: number) => {
    navigate(`/editor/${id}`);
  };

  return (
    <Container>
      <ListComponent>
        {files.map(({ id, title, lastUpdate, isFavorite }) => (
          <ListItem key={id} onClick={() => openFileOnEditor(id)}>
            <span>{title}</span>
            <span>Last Update: {lastUpdate}</span>

            <div>
              <button
                type="button"
                onClick={(event) => handleFavorite(event, id)}
              >
                {isFavorite ? <BsHeartFill /> : <BsHeart />}
              </button>
              <button type="button" onClick={(event) => removeFile(event, id)}>
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
