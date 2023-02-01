import GlobalStyle from './styles/globalStyle';
import Router from './router';
import FilesContextProvider from './context';

function App() {
  return (
    <FilesContextProvider>
      <GlobalStyle />
      <Router />
    </FilesContextProvider>
  );
}

export default App;
