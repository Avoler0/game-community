import '../menu.css'


type Props = {
  menuData:any
}
type ListData = {
  name:string,
  number:number
}
const MenuList = ({menuData}:Props) =>{
  const {name,list} = menuData;
  const commuName = 'isgame' // 후에 게임의 이름으로 대체하여 전역상태로 관리함.
  console.log(menuData)
  return (
    <ul>
      <li className='menuTitle'>{name}</li>
      {list.map((data:ListData)=> (
        <li className='menu-item' key={data.name}>
          <a href={`/board/${commuName}/${data.number}`}>{data.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;