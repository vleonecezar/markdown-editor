import { useState } from 'react';
import { Container, MarkdownContent, MarkdownPreview } from './styled';

function TextArea() {
  const [text, setText] = useState('');

  return (
    <Container>
      <MarkdownContent
        placeholder="Your Text Here..."
        onChange={({ target }) => setText(target.value)}
      />
      <MarkdownPreview>{text}</MarkdownPreview>
    </Container>
  );
}

export default TextArea;
