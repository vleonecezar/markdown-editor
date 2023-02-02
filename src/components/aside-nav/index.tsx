import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../modal';

import * as S from './styled';

function AsideNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <S.Navigation>
      <S.List>
        <li>
          <S.ItemLink to="/">Files</S.ItemLink>
        </li>
        <li>
          <S.ItemLink to="/favorites">Favorites</S.ItemLink>
        </li>
        {!pathname.includes('/editor') && (
          <li>
            <S.NewFileButton type="button" onClick={() => setIsModalOpen(true)}>
              New File
            </S.NewFileButton>
          </li>
        )}
      </S.List>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </S.Navigation>
  );
}

export default AsideNav;
