import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FileList from './pages/file-list';
import Editor from './pages/editor';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileList />} />
        <Route path="/favorites" element={<FileList />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </BrowserRouter>
  );
}
