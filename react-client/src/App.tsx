import { RouterProvider } from 'react-router-dom';
import Router from './router/router';
import './App.css'
import Header from './component/header/headerIndex';
import Nav from './component/nav/navIndex';
import LeftSearch from './component/search/letftSearch';
import CommuLeft from './component/commuLeft/commuLeft';

function App() {
  return <RouterProvider router={Router} />
}

export default App;

