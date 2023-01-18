import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  background-color: var(--primary-color);
  min-width: 250px;
  height: 100%;

  ul {
    list-style: none;
  }
`;

export const NavigationLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
  padding: 25px 0;
  text-align: center;
  transition: 0.2s;

  &:hover {
    background-color: var(--action-color);
  }
`;
