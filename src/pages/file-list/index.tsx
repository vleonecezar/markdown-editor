import Header from '../../components/header';
import MainContainer from '../../components/main-container';
import AsideNav from '../../components/aside-nav';
import List from '../../components/list';

function FileList() {
  return (
    <>
      <Header />
      <MainContainer>
        <AsideNav />
        <List />
      </MainContainer>
    </>
  );
}

export default FileList;
