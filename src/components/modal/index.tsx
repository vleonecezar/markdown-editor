import React, { useRef } from 'react';
import Button from '../button';
import { Background, DiscardButton, ModalContainer } from './styled';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setIsModalOpen }: Props) {
  const backgroundElement = useRef<HTMLDivElement>(null);
  const closeModal = (element: HTMLElement) => {
    if (element === backgroundElement.current) {
      setIsModalOpen(false);
    }
  };

  return (
    <Background
      ref={backgroundElement}
      onClick={({ target }) => closeModal(target as HTMLElement)}
    >
      <ModalContainer>
        <label htmlFor="title">
          File Name
          <input type="text" />
        </label>
        <div>
          <DiscardButton type="button" onClick={() => setIsModalOpen(false)}>
            Discard
          </DiscardButton>
          <Button type="button">Create</Button>
        </div>
      </ModalContainer>
    </Background>
  );
}

export default Modal;
