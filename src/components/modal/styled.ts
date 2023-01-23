import styled from 'styled-components';
import Button from '../button';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  height: 200px;
  padding: 10px 30px;
  background-color: black;
  border: 1px solid var(--action-color);
  border-radius: 5px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > label {
    font-size: 1.1rem;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    text-align: center;

    > input {
      font-size: 1.1rem;
      width: 400px;
      padding: 5px 5px;
      margin: 10px 0 30px;
      border: none;
      border-radius: 5px;

      &:focus {
        &:focus {
          outline: 2px solid var(--action-color);
        }
      }
    }
  }
  > div {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
`;

export const DiscardButton = styled(Button)`
  border: 1px solid var(--action-color);
  background-color: transparent;
  color: var(--text-color);

  &:hover {
    background-color: var(--primary-color);
  }
`;
