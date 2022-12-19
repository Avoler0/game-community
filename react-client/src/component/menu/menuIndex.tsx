import JobMenu from './job/jobMenu';
import MenuList from './list/menuList';
import './menu.css'


const Menu = () => {
  const menu = [
    {
      name:'정보 게시판',
      path:'info',
      list:[
        { name:'게임 뉴스', path:'gamenews' },
        { name:'게임 업데이트', path:'gameupdate' },
        { name:'팁 게시판', path:'gametip' },
        { name:'가이드 게시판', path:'gameguide' },
      ]
    },
    {
      name:'커뮤니티 게시판',
      path:'community',
      list:[
        { name:'자유 게시판', path:'free' },
        { name:'질문 게시판', path:'gamenews' },
        { name:'구인 게시판', path:'hunting' },
        { name:'길드 게시판', path:'guild' },
      ]
    },
    {
      name:'이슈 게시판',
      path:'issue',
      list:[
        { name:'사건사고 게시판', path:'incident' },
        { name:'토론 게시판', path:'debate' },
        { name:'버그 게시판', path:'bug' },
      ]
    }
  ]
  console.log(menu)
  // Object.keys(menu).map((dd)=>{
  //   console.log("데이터",menu[dd as keyof any])
  // })
  return (
    <div className="left-menu">
      <JobMenu />
      {menu.map((data)=> {
        return <MenuList menuData={data}/>
      })}
      {/* <MenuList listName='정보 게시판' menuList={menu.info}/>
      <MenuList listName='커뮤니티 게시판' menuList={menu.community}/>
      <MenuList listName='이슈 게시판' menuList={menu.issue}/> */}
    </div>
  )
}

export default Menu;