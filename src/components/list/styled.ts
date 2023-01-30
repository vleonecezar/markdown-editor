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
  max-width: 1250px;
  display: flex;
  align-items: center;
  padding: 18px;
  border: 1px solid var(--action-color);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s filter;

  + li {
    margin-top: 10px;
  }

  > div {
    flex: 1;
    display: flex;
    justify-content: end;
  }

  > div button {
    font-size: 1.4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s color;

    + button {
      margin-left: 10px;
    }

    &:hover {
      color: var(--action-color);
    }
  }

  > span {
    flex: 1;
    font-size: 1.1rem;
  }

  > span,
  button {
    color: var(--text-color);
  }

  > span:nth-child(2) {
    text-align: center;
  }

  &:hover {
    filter: brightness(90%);
  }
`;
