import { useEffect, useState } from 'react';
import { getDB } from '../../../hooks/ServerDbHook';
import JobMenu from './job/jobMenu';
import MenuList from './list/menuList';
import './menu.css'

type listType = {
  name: string,
  number: number
}
type boardMenuList = {
  name:string
  list:listType// 게시판 숫자 한 웹마다 0~100가지의 숫자를 가짐
}

const Menu = () => {
  const [menulist,setMenulist] = useState<any>();

  useEffect(()=>{
    getDB.menulist()
    .then((result)=>{
      console.log(result)
      setMenulist(result)
    })
  },[])
  if(!menulist) return <div>dfdf</div>
  return (
    <div className="left-menu">
      {menulist?.map((data:any)=> {
        return <MenuList menuData={data}/>
      })}
    </div>
  )
}

export default Menu;