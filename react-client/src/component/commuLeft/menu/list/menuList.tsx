import { BoardList, MenuList } from '../../../../types/database'
import '../menu.css'


type Props = {
  menuData: MenuList
}

const List = ({menuData}:Props) =>{
  const commuName = 'isgame' // 후에 게임의 이름으로 대체하여 전역상태로 관리함.
  if(!menuData) return <div>1234</div>
  return (
    <ul>
      <li className='menuTitle'>{menuData.name}</li>
      {menuData.list.map((data:BoardList)=> (
        <li className='menu-item' key={data.name}>
          <a href={`/board/${commuName}/${data.number}`}>{data.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default List;