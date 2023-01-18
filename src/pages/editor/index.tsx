// eslint-disable-next-line import/no-extraneous-dependencies

import TextArea from '../../components/textArea';
import SideNav from '../../components/sideNav';
import Container from './styled';
import Header from '../../components/header';
import Wrapper from '../../components/wrapper';

function Editor() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <SideNav />
        <TextArea />
      </Container>
    </Wrapper>
  );
}

export default Editor;
