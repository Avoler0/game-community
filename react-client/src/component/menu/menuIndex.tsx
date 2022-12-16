import JobMenu from './job/jobMenu';
import MenuList from './list/menuList';
import './menu.css'


const Menu = () => {
  const infoMenu = ["게임 뉴스","게임 업데이트","팁 게시판","가이드 게시판"]
  const commuMenu = ["자유 게시판","질문 게시판","구인 게시판","길드 게시판"]
  const isuueMenu = ["사건사고 게시판","토론 게시판","버그 게시판"]

  return (
    <div className="left-menu">
      <JobMenu />
      <MenuList listName='정보 게시판' menuList={infoMenu}/>
      <MenuList listName='커뮤니티 게시판' menuList={commuMenu}/>
      <MenuList listName='이슈 게시판' menuList={isuueMenu}/>
    </div>
  )
}

export default Menu;