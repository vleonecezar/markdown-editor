import { Container, MarkdownContent, MarkdownPreview } from './styled';

interface Props {
  text: string | undefined;
  setText: (text: string | undefined) => void;
}

function TextArea({ text, setText }: Props) {
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
