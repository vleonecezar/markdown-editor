import Header from '../../components/header';
import List from '../../components/list';
import SideNav from '../../components/sideNav';
import Container from './styled';

function FileList() {
  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <List />
      </Container>
    </>
  );
}

export default FileList;
