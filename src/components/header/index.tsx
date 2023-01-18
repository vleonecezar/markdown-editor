import { FileCount, FileName, HeaderContainer, SaveButton } from './styled';

function Header() {
  return (
    <HeaderContainer>
      <FileCount>Total Files: 0</FileCount>
      <div>
        <FileName>File Name</FileName>
        <SaveButton type="button">Save</SaveButton>
      </div>
    </HeaderContainer>
  );
}

export default Header;
