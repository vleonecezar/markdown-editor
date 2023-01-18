// eslint-disable-next-line import/no-extraneous-dependencies

import TextArea from '../../components/textArea';
import SideNav from '../../components/sideNav';
import Container from './styled';

function Editor() {
  return (
    <Container>
      <SideNav />
      <TextArea />
    </Container>
  );
}

export default Editor;
