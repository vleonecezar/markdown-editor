import { useLocation, useParams } from 'react-router-dom';
import { useFiles } from '../../context';

import * as S from './styled';

function Header() {
  const { state } = useFiles();
  const { id } = useParams();
  const idNumber = Number(id);
  const title = idNumber
    ? state.find((file) => file.id === idNumber)?.title
    : undefined;
  const { pathname } = useLocation();
  const isEditorPage = pathname.includes('/editor');

  return (
    <S.Header>
      <S.FileCount>Total Files: {state.length}</S.FileCount>
      {isEditorPage && <S.FileTitle>{title}</S.FileTitle>}
    </S.Header>
  );
}

export default Header;
