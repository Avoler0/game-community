import './layout/layout.css'
import Header from "../component/header/headerIndex";
import LeftSearch from "../component/search/letftSearch";
import Nav from "../component/nav/navIndex";
import CommuCenter from "../component/commuCenter/commuCenter";
import CommuRight from "../component/commuRight/commuRight";
import AdminNav from '../component/admin/nav';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  const admin = true

  if(!admin) {
    window.location.replace('/');
    return <div></div>
  }
  return (
    <div className='commu-wrap'>
      <div className='commu-content'>
        <Header />
        <LeftSearch />
        <AdminNav />
        <article className='content'>
          <CommuCenter>
            <Outlet />
          </CommuCenter>
        </article>
      </div>
      <CommuRight />
    </div>
  )
}

export default Admin; 