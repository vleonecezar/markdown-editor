// eslint-disable-next-line import/no-extraneous-dependencies

import Header from '../../components/header';
import MainContainer from '../../components/main-container';
import SideNav from '../../components/aside-nav';
import TextArea from '../../components/markdown-area';

function Editor() {
  return (
    <>
      <Header />
      <MainContainer>
        <SideNav />
        <TextArea />
      </MainContainer>
    </>
  );
}

export default Editor;
