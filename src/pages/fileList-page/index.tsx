import Header from '../../components/header';
import List from '../../components/list';
import SideNav from '../../components/sideNav';
import Wrapper from '../../components/wrapper';
import { Container } from './styled';

function FileList() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <SideNav />
        <List />
      </Container>
    </Wrapper>
  );
}

export default FileList;
