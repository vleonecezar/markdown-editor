import Header from '../../components/header';
import MainContainer from '../../components/main-container';
import SideNav from '../../components/aside-nav';
import List from '../../components/list';

function FileList() {
  return (
    <>
      <Header />
      <MainContainer>
        <SideNav />
        <List />
      </MainContainer>
    </>
  );
}

export default FileList;
