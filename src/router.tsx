import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from './pages/editor-page';
import FileList from './pages/fileList-page';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileList />} />
        <Route path="/favorites" element={<FileList />} />
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}
