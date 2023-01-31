/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFile } from '../../context';
import getUniqueId from '../../utils/getUniqueId';

import * as S from './styled';

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setIsModalOpen }: Props) {
  const { state, dispatch } = useFile();
  const [title, setTitle] = useState('');
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  const closeModalByClickOnBackdrop = (event: Event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const inputValidation = () => {
    const titleHasNotOnlySpace = !/^\s*$/.test(title);
    return title && title.length <= 30 && titleHasNotOnlySpace;
  };

  const createNewFile = () => {
    if (inputValidation()) {
      const id = getUniqueId(state);
      dispatch({ type: 'CREATE_FILE', payload: { id, title } });
      navigate(`/editor/${id}`);
    } else {
      setInputError(true);
    }
  };

  const handleInputErrorOnTyping = (value: string) => {
    if (inputError) {
      setInputError(false);
    }
    setTitle(value);
  };

  return (
    <S.ModalBackdrop onClick={(event) => closeModalByClickOnBackdrop(event)}>
      <S.Modal>
        <S.Label htmlFor="title">
          File Name
          <S.Input
            type="text"
            value={title}
            autoFocus
            maxLength={30}
            onChange={({ target }) => handleInputErrorOnTyping(target.value)}
          />
        </S.Label>
        {inputError && <S.InputError>Enter the file name.</S.InputError>}
        <S.ButtonsContainer>
          <S.DiscardButton type="button" onClick={() => setIsModalOpen(false)}>
            Discard
          </S.DiscardButton>
          <S.CreateButton type="button" onClick={() => createNewFile()}>
            Create
          </S.CreateButton>
        </S.ButtonsContainer>
      </S.Modal>
    </S.ModalBackdrop>
  );
}

export default Modal;
