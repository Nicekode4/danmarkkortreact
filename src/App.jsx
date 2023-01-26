import { BrowserRouter } from 'react-router-dom';
import { APIFetch } from './APIFetch';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <BrowserRouter>
    <AppRouter />
    <div className="App">
     <APIFetch />
    </div>
    </BrowserRouter>
  );
}

export default App;
