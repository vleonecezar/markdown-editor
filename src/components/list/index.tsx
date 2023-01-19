/* eslint-disable import/no-extraneous-dependencies */
import { BsHeart, BsTrash } from 'react-icons/bs';

import { Container, ListComponent, ListItem } from './styled';

interface File {
  id: number;
  name: string;
  date: string;
}

const files: File[] = [
  { id: 1, name: 'File one', date: '00/00/00' },
  { id: 2, name: 'File Two', date: '00/00/00' },
];

function List() {
  return (
    <Container>
      <ListComponent>
        {files.map((file) => (
          <ListItem key={file.id}>
            <span>{file.name}</span>
            <span>Last Update: {file.date} - 12:00</span>
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
