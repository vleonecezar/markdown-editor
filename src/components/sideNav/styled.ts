import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  background-color: var(--primary-color);
  min-width: 250px;
  height: 100%;
`;

export const List = styled.ul`
  list-style: none;
`;

export const NewFileButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  padding: 25px 0;
  text-align: center;
  transition: 0.2s;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--decorative-color);
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  display: block;
  padding: 25px 0;
  text-align: center;
  transition: 0.2s;

  &:hover {
    background-color: var(--decorative-color);
  }
`;
