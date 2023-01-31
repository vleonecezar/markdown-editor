import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFile } from '../../context';

import * as S from './styled';

function TextArea() {
  const { state, dispatch } = useFile();
  const { id } = useParams<{ id: string }>();
  const idNumber = Number(id);
  const currentFile = state.find((file) => file.id === idNumber);
  const [currentFileBody, setCurrentFileBody] = useState(currentFile?.body);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentFileBody) {
        dispatch({
          type: 'SAVE_FILE',
          payload: { id: idNumber, body: currentFileBody },
        });
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentFileBody, dispatch, idNumber]);

  return (
    <S.Container>
      <S.TextArea
        placeholder="Enter your Text Here..."
        autoFocus
        value={currentFileBody}
        onChange={({ target }) => setCurrentFileBody(target.value)}
      />
      <S.MarkdownPreview>{currentFileBody}</S.MarkdownPreview>
    </S.Container>
  );
}

export default TextArea;
