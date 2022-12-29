import CommuCenter from "../../../component/commuCenter/commuCenter";
import CommuRight from "../../../component/commuRight/commuRight";
import Header from "../../../component/header/headerIndex";
import Nav from "../../../component/nav/navIndex";
import LeftSearch from "../../../component/search/letftSearch";
import '../layout.css'
const NotInMenu = ({children}:any) => {
  
  return (
    <div className='commu-wrap'>
      <div className='commu-content'>
        <Header />
        <LeftSearch />
        <Nav />
        <article className='content'>
          <CommuCenter>
            {children}
          </CommuCenter>
        </article>
      </div>
      <CommuRight />
    </div>
  )
}

export default NotInMenu;