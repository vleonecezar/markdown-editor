import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFiles } from '../../context';
import { SAVE_FILE } from '../../context/actions/file-actions';
import useGetCurrentFile from '../../hooks/useGetCurrentFile';

import * as S from './styled';

function MarkdownArea() {
  const { state, dispatch } = useFiles();
  const { id } = useParams();
  const idNumber = Number(id);
  const currentFile = useGetCurrentFile(state, idNumber);
  const [currentFileBody, setCurrentFileBody] = useState(currentFile?.body);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentFileBody || currentFileBody === '') {
        dispatch({
          type: SAVE_FILE,
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

export default MarkdownArea;
