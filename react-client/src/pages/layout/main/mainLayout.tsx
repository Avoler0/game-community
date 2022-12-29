import CommuCenter from "../../../component/commuCenter/commuCenter";
import CommuLeft from "../../../component/commuLeft/commuLeft";
import CommuRight from "../../../component/commuRight/commuRight";
import Header from "../../../component/header/headerIndex";
import Nav from "../../../component/nav/navIndex";
import LeftSearch from "../../../component/search/letftSearch";
import '../layout.css'


const MainLayout = ({children}:any) => {

  return (
    <div className='commu-wrap'>
      <div className='commu-content'>
        <Header />
        <LeftSearch />
        <Nav />
        <article className='content'>
          <CommuLeft />
          <CommuCenter>
            {children}
          </CommuCenter>
        </article>
      </div>
      <CommuRight />
    </div>
  )
}

export default MainLayout;