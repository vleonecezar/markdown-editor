/* eslint-disable import/no-extraneous-dependencies */

import { useState } from 'react';
import { BsHeart, BsTrash } from 'react-icons/bs';
import { useFile } from '../../context';
import { CREATE_FILE, REMOVE_FILE } from '../../context/actions/fileActions';
import { FilesState } from '../../types';

import { Container, ListComponent, ListItem } from './styled';

function List() {
  const { state, dispatch } = useFile();
  const [files] = useState<FilesState>(state);

  return (
    <Container>
      <ListComponent>
        {files.map((file) => (
          <ListItem key={file.id}>
            <span>{file.title}</span>
            <span>Last Update: {file.lastUpdate}</span>
            <div>
              <button type="button">
                <BsHeart />
              </button>
              <button type="button">
                <BsTrash />
              </button>
            </div>
          </ListItem>
        ))}
      </ListComponent>
    </Container>
  );
}

export default List;
