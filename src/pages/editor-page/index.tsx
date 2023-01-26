// eslint-disable-next-line import/no-extraneous-dependencies

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFile } from '../../context';
import TextArea from '../../components/textArea';
import SideNav from '../../components/sideNav';
import Container from './styled';
import Header from '../../components/header';
import Wrapper from '../../components/wrapper';
import { File } from '../../types';

const getFile = (id: string | undefined, state: File[]) => {
  return state.find((f) => f.id === Number(id));
};

function Editor() {
  const { state } = useFile();
  const { id } = useParams<{ id: string }>();
  const file = getFile(id, state);
  const [text, setText] = useState(file?.body);

  return (
    <Wrapper>
      <Header />
      <Container>
        <SideNav />
        <TextArea text={text} setText={setText} />
      </Container>
    </Wrapper>
  );
}

export default Editor;
