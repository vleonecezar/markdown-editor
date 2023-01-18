import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
