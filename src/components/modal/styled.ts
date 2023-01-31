import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 0.2s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Modal = styled.div`
  height: 200px;
  padding: 10px 30px;
  background-color: black;
  border: 1px solid var(--action-color);
  border-radius: 5px;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  animation: dropDown 0.2s ease-in-out forwards;

  @keyframes dropDown {
    from {
      margin-top: 180px;
    }
    to {
      margin-top: 200px;
    }
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

export const Input = styled.input`
  font-size: 1.1rem;
  width: 400px;
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  margin: 10px 0 40px;

  &:focus {
    outline: 2px solid var(--action-color);
  }
`;

export const InputError = styled.span`
  color: red;
  position: absolute;
  top: 95px;
`;

export const ButtonsContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const CreateButton = styled.button`
  width: 80px;
  height: 35px;
  font-size: 1rem;
  padding: 0 10px;
  background-color: var(--action-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(85%);
  }
`;

export const DiscardButton = styled(CreateButton)`
  border: 1px solid var(--action-color);
  background-color: transparent;
  color: var(--text-color);

  &:hover {
    background-color: var(--primary-color);
  }
`;
