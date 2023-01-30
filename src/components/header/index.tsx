import { useLocation, useParams } from 'react-router-dom';
import { useFile } from '../../context';

import * as S from './styled';

function Header() {
  const { state } = useFile();
  const { pathname } = useLocation();
  const { id } = useParams();

  const isEditorPage = pathname.includes('/editor');
  const title = id ? state.find((f) => f.id === +id)?.title : undefined;

  return (
    <S.Header>
      <S.FileCount>Total Files: {state.length}</S.FileCount>
      {isEditorPage && <S.FileTitle>{title}</S.FileTitle>}
    </S.Header>
  );
}

export default Header;
