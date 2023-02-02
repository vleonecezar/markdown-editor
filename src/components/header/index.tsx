import { useLocation, useParams } from 'react-router-dom';
import { useFiles } from '../../context';
import useGetCurrentFile from '../../hooks/useGetCurrentFile';

import * as S from './styled';

function Header() {
  const { state } = useFiles();
  const { id } = useParams();
  const idNumber = Number(id);
  const currentFile = useGetCurrentFile(state, idNumber);
  const { pathname } = useLocation();

  return (
    <S.Header>
      <S.FileCount>Total Files: {state.length}</S.FileCount>
      {pathname.includes('/editor') && (
        <S.FileTitle>{currentFile?.title}</S.FileTitle>
      )}
    </S.Header>
  );
}

export default Header;
