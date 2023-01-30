import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--primary-color);
  height: 50px;
  color: var(--text-color);
  display: flex;
  align-items: center;
`;

export const FileCount = styled.span`
  min-width: 250px;
  text-align: center;
  color: var(--text-color);
  font-size: 1rem;
`;

export const FileTitle = styled.span`
  color: var(--text-color);
  font-size: 1.2rem;
  margin: 0 auto;
`;
