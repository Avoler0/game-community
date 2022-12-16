import '../menu.css'

type Props = {
  listName:string,
  menuList:string[]
}
const MenuList = ({listName,menuList}:Props) =>{

  return (
    <ul>
      <li className='menuTitle'>{listName}</li>
      {menuList.map((name)=>{
        return <li className='menu-item'>{name}</li>
      })}
    </ul>
  );
}

export default MenuList;