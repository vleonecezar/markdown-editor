// eslint-disable-next-line import/no-extraneous-dependencies

import TextArea from '../../components/textArea';
import SideNav from '../../components/sideNav';
import Container from './styled';
import Header from '../../components/header';

function Editor() {
  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <TextArea />
      </Container>
    </>
  );
}

export default Editor;
