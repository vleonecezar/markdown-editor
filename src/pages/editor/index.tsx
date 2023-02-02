// eslint-disable-next-line import/no-extraneous-dependencies

import Header from '../../components/header';
import MainContainer from '../../components/main-container';
import AsideNav from '../../components/aside-nav';
import MarkdownArea from '../../components/markdown-area';

function Editor() {
  return (
    <>
      <Header />
      <MainContainer>
        <AsideNav />
        <MarkdownArea />
      </MainContainer>
    </>
  );
}

export default Editor;
