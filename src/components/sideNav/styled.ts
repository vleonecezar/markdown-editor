import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  background-color: var(--primary-purple);
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const NavigationLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
  padding: 25px 0;
  text-align: center;
  transition: 0.2s;

  &:hover {
    background-color: var(--secondary-purple);
  }
`;
