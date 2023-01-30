import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFile } from '../../context';
import { Container, MarkdownContent, MarkdownPreview } from './styled';

function TextArea() {
  const { state, dispatch } = useFile();
  const { id } = useParams<{ id: string }>();
  const file = state.find((f) => f.id === Number(id));
  const [text, setText] = useState(file?.body);
  const timeoutId = useRef<NodeJS.Timeout>();

  const saveFile = (value: string) => {
    if (id) {
      const id2 = +id;

      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        dispatch({ type: 'SAVE_FILE', payload: { id: id2, body: value } });
      }, 1000);
    }
  };

  const handleTextAndSave = (value: string) => {
    setText(value);
    saveFile(value);
  };

  return (
    <Container>
      <MarkdownContent
        autoFocus
        value={text}
        placeholder="Your Text Here..."
        onChange={({ target }) => handleTextAndSave(target.value)}
      />
      <MarkdownPreview>{text}</MarkdownPreview>
    </Container>
  );
}

export default TextArea;
