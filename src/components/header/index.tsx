import { useLocation, useParams } from 'react-router-dom';
import { useFile } from '../../context';
import { FileCount, FileName, HeaderContainer } from './styled';

function Header() {
  const { state } = useFile();
  const { pathname } = useLocation();
  const { id } = useParams();
  const title = id ? state.find((f) => f.id === +id)?.title : undefined;

  return (
    <HeaderContainer>
      <FileCount>Total Files: {state.length}</FileCount>
      {pathname.includes('/editor') && (
        <div>
          <FileName>{title}</FileName>
        </div>
      )}
    </HeaderContainer>
  );
}

export default Header;
