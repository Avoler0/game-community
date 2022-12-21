import { RouterProvider } from 'react-router-dom';
import Router from './router/router';
import './App.css'
import Header from './component/header/headerIndex';
import Nav from './component/nav/navIndex';
import LeftSearch from './component/search/letftSearch';
import CommuLeft from './component/commuLeft/commuLeft';
import CommuCenter from './component/commuCenter/commuCenter';
import CommuRight from './component/commuRight/commuRight';

function App() {
  return (
      <div className='commu-wrap'>
        <div className='commu-content'>
          <Header />
          <LeftSearch />
          <Nav />
          <article className='content'>
            <CommuLeft />
            <CommuCenter>
              <RouterProvider router={Router} />
            </CommuCenter>
          </article>
        </div>
        <CommuRight />
      </div>
  );
}

export default App;

