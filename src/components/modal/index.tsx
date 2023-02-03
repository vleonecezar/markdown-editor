import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFiles } from '../../context';
import useModal from '../../hooks/useModal';
import { inputErrorMsg } from '../../constants/warnings';

import * as S from './styled';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setIsModalOpen }: Props) {
  const { state, dispatch } = useFiles();
  const [title, setTitle] = useState('');
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  const {
    closeModalByClickOnBackdrop,
    createNewFile,
    handleInputErrorOnTyping,
  } = useModal({
    setIsModalOpen,
    state,
    title,
    setTitle,
    dispatch,
    navigate,
    inputError,
    setInputError,
  });

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
        {inputError && <S.InputError>{inputErrorMsg}</S.InputError>}
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
