import { Link } from 'react-router-dom';
import { useMatches, useRoutes } from 'react-router-dom';
import { postDB } from '../../hooks/ServerDbHook'
import AdminNav from '../admin/nav';
import './nav.css'


const Nav = () => {
  const commuName = 'isgame';
  const query = {
    CommunityID:1,
    MenuCategoryName:'직업 게시판',
    MenuName:"전사"
  }
  function btbClick(){
    postDB.menulist(commuName,query)
    .then((result) => {
      console.log("리설트",result)
    })
    .catch((error)=>{
      console.log("에러났음",error)
    })
  }
  const router = useMatches();
  console.log(router[0].pathname)
  // <button onClick={btbClick}>메뉴 클릭</button>
  return (
    <nav>
      <ul>
        <li className='nav-category'>
          <Link to='/' target="_self">
            <span>홈</span>
          </Link>  
        </li>
        <li className='nav-category'>
          <Link to='#' target="_self">
            <span>직업 게시판</span>
          </Link>
        </li>
        <li className='nav-category'>
          <Link to='#' target="_self">
            <span>정보공유 게시판</span>
          </Link>
        </li>
        <li className='nav-category'>
          <Link to='#' target="_self">
            <span>커뮤니티 게시판</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;