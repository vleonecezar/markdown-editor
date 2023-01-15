import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Editor } from './pages/editor';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}
