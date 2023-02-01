import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  background-color: var(--secondary-color);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

export const Item = styled.li`
  cursor: pointer;
  background-color: var(--primary-color);
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  padding: 18px;
  border: 1px solid var(--decorative-color);
  border-radius: 5px;
  transition: 0.2s filter;

  + li {
    margin-top: 20px;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const FileTitle = styled.span`
  flex: 1;
  font-size: 1.1rem;
`;

export const FileLastUpdate = styled(FileTitle)`
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

export const FavoriteButton = styled.button`
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s color;

  &:hover {
    color: var(--decorative-color);
  }
`;

export const DeleteButton = styled(FavoriteButton)`
  margin-left: 10px;
`;
