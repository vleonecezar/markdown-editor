import GlobalStyle from './styles/global-styles';
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
