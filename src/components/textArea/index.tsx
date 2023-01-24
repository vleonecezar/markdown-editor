import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFile } from '../../context';
import { File } from '../../types';

import { Container, MarkdownContent, MarkdownPreview } from './styled';

function TextArea() {
  const { state } = useFile();
  const [file, setFile] = useState<File[]>([]);
  const { id } = useParams<{ id: string }>();
  const [text, setText] = useState('');

  useEffect(() => {
    if (id) {
      setFile(state.filter((f) => f.id === +id));
      setText(file[0]?.body ?? '');
    }
  }, [id, state, file]);
  return (
    <Container>
      <MarkdownContent
        value={text}
        placeholder="Your Text Here..."
        onChange={({ target }) => setText(target.value)}
      />
      <MarkdownPreview>{text}</MarkdownPreview>
    </Container>
  );
}

export default TextArea;
