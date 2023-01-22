import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import List from '../../components/list';
import SideNav from '../../components/sideNav';
import Wrapper from '../../components/wrapper';
import { useFile } from '../../context';
import { Container } from './styled';

function FileList() {
  const { state, dispatch } = useFile();
  const { pathname } = useLocation();
  const favorites = state.filter((file) => file.isFavorite);
  const files = pathname === '/' ? state : favorites;
  return (
    <Wrapper>
      <Header />
      <Container>
        <SideNav />
        <List files={files} dispatch={dispatch} />
      </Container>
    </Wrapper>
  );
}

export default FileList;
