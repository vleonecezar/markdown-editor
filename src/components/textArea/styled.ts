// eslint-disable-next-line import/no-extraneous-dependencies
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--secondary-color);
`;

export const MarkdownContent = styled.textarea`
  resize: none;
  flex: 1;
  border: none;
  outline: none;
  border-right: 2px solid var(--primary-color);
  color: var(--text-color);
  padding: 10px 30px;
  background-color: var(--secondary-color);
  font-size: 1rem;
  height: 100%;

  &::placeholder {
    text-align: center;
  }
`;

export const MarkdownPreview = styled(Markdown)`
  flex: 1;
  color: var(--text-color);
  padding: 10px 30px;
  background-color: var(--secondary-color);
  overflow-y: scroll;
  overflow-x: hidden;
  word-wrap: break-word;
`;
