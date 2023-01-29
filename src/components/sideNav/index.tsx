import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../modal';
import { Navigation, NavigationLink } from './styled';

function SideNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <Navigation>
      <ul>
        <li>
          <NavigationLink to="/">Files</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/favorites">Favorites</NavigationLink>
        </li>
        {!pathname.includes('/editor') && (
          <li>
            <button type="button" onClick={() => setIsModalOpen(true)}>
              New File
            </button>
          </li>
        )}
      </ul>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </Navigation>
  );
}

export default SideNav;
