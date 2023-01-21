import GlobalStyle from './styles/globalStyle';
import Router from './router';
import FileContextProvider from './context';

function App() {
  return (
    <FileContextProvider>
      <GlobalStyle />
      <Router />
    </FileContextProvider>
  );
}

export default App;
