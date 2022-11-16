import Main from './Components/Main/Main';
import GlobalContextProvider from './context/globalContext';
// import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
// import {ConfigureStore} from './Redux/configureStore'

// const store = ConfigureStore();

function App() {

  return (
    <><GlobalContextProvider>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
      </GlobalContextProvider>
       </>
  );
}

export default App;
