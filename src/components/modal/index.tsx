/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFile } from '../../context';
import getUniqueId from '../../utils/getUniqueId';
import Button from '../button';
import { Background, DiscardButton, ModalContainer } from './styled';

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setIsModalOpen }: Props) {
  const { state, dispatch } = useFile();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const closeModalByClickOnBackground = (event: Event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const createFile = () => {
    if (title && title.length <= 30) {
      const id = getUniqueId(state);
      dispatch({ type: 'CREATE_FILE', payload: { id, title } });
      navigate(`/editor/${id}`);
    } else {
      alert('Please, enter the file name.'); /* temporary */
    }
  };

  return (
    <Background onClick={(event) => closeModalByClickOnBackground(event)}>
      <ModalContainer>
        <label htmlFor="title">
          File Name
          <input
            type="text"
            value={title}
            autoFocus
            maxLength={30}
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <div>
          <DiscardButton type="button" onClick={() => setIsModalOpen(false)}>
            Discard
          </DiscardButton>
          <Button type="button" onClick={() => createFile()}>
            Create
          </Button>
        </div>
      </ModalContainer>
    </Background>
  );
}

export default Modal;
