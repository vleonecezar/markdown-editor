import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: var(--secondary-color);
  padding: 20px 30px;
`;

export const ListComponent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  cursor: pointer;
  background-color: var(--primary-color);
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 15px;
  border: 1px solid var(--action-color);
  border-radius: 5px;

  & + li {
    margin-top: 20px;
  }

  > span {
    font-size: 1rem;
    color: var(--text-color);
  }

  > div button {
    background-color: transparent;
    border: none;
    padding: 0;

    & + button {
      margin-left: 15px;
    }

    > svg {
      font-size: 1.3rem;
      color: white;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        filter: brightness(60%);
      }
    }
  }
`;
