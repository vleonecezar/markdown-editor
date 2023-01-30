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
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  const closeModalByClickOnBackground = (event: Event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const validation = () => {
    const noSpaceRegex = !/^\s*$/.test(title);
    return title && title.length <= 30 && noSpaceRegex;
  };

  const createFile = () => {
    if (validation()) {
      const id = getUniqueId(state);
      dispatch({ type: 'CREATE_FILE', payload: { id, title } });
      navigate(`/editor/${id}`);
    } else {
      setInputError(true);
    }
  };

  const a = (target: string) => {
    if (inputError) {
      setInputError(false);
    }
    setTitle(target);
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
            onChange={({ target }) => a(target.value)}
          />
        </label>
        {inputError && <span>Enter the file name.</span>}
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
