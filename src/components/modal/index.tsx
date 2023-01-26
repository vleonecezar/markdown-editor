/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFile } from '../../context';
import { Action, File } from '../../types';
import getUniqueId from '../../utils/getUniqueId';
import Button from '../button';
import { Background, DiscardButton, ModalContainer } from './styled';

type SetIsModalOpen = React.Dispatch<React.SetStateAction<boolean>>;

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

interface CreateFileProps {
  state: File[];
  title: string;
  dispatch: React.Dispatch<Action>;
  navigate: (path: string) => void;
}

interface Props {
  setIsModalOpen: SetIsModalOpen;
}

const closeModalByClickOnBackground = (
  event: Event,
  setIsModalOpen: SetIsModalOpen
) => {
  if (event.target === event.currentTarget) {
    setIsModalOpen(false);
  }
};

const closeModalByClickOnButton = (setIsModalOpen: SetIsModalOpen) => {
  setIsModalOpen(false);
};

const createFile = (props: CreateFileProps) => {
  const { state, title, dispatch, navigate } = props;
  if (title && title.length <= 30) {
    const id = getUniqueId(state);
    dispatch({ type: 'CREATE_FILE', payload: { id, title } });
    navigate(`/editor/${id}`);
  } else {
    alert('Please, enter the file name.'); /* temporary */
  }
};

function Modal({ setIsModalOpen }: Props) {
  const { state, dispatch } = useFile();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const createFileProps = {
    state,
    title,
    dispatch,
    navigate,
  };

  return (
    <Background
      onClick={(event) => closeModalByClickOnBackground(event, setIsModalOpen)}
    >
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
          <DiscardButton
            type="button"
            onClick={() => closeModalByClickOnButton(setIsModalOpen)}
          >
            Discard
          </DiscardButton>
          <Button type="button" onClick={() => createFile(createFileProps)}>
            Create
          </Button>
        </div>
      </ModalContainer>
    </Background>
  );
}

export default Modal;
