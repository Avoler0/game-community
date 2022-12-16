import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom';
import Router from './router/router';
import Menu from './component/menu/menuIndex';
import './App.css'
import Header from './component/header/headerIndex';
import Nav from './component/nav/navIndex';
import Profile from './component/profile/profileIndex';
import LeftSearch from './component/search/letftSearch';

function App() {
  return (
      <div className='commu-wrap'>
        <Header />
        <LeftSearch />
        <Nav />
        <div className='commut-content'>
          <article className='content'>
            <section className='commu-left'>
              <Profile />
              <Menu />
            </section>
            <section className='commu-right'>
              <RouterProvider router={Router} />
            </section>
          </article>
        </div>
      </div>
  );
}

export default App;

