import Button from '../button';
import { Background, DiscardButton, ModalContainer } from './styled';

type SetIsModalOpen = React.Dispatch<React.SetStateAction<boolean>>;

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

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

function Modal({ setIsModalOpen }: Props) {
  return (
    <Background
      onClick={(event) => closeModalByClickOnBackground(event, setIsModalOpen)}
    >
      <ModalContainer>
        <label htmlFor="title">
          File Name
          <input type="text" />
        </label>
        <div>
          <DiscardButton
            type="button"
            onClick={() => closeModalByClickOnButton(setIsModalOpen)}
          >
            Discard
          </DiscardButton>
          <Button type="button">Create</Button>
        </div>
      </ModalContainer>
    </Background>
  );
}

export default Modal;
