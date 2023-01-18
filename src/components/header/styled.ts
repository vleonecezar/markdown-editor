import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  height: 50px;
  color: var(--text-color);
  display: flex;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const FileCount = styled.span`
  min-width: 250px;
  text-align: center;
  color: var(--text-color);
`;

export const FileName = styled.span`
  margin-right: 30px;
  color: var(--text-color);
`;

export const SaveButton = styled.button``;
