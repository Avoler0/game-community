import '../menu.css'


type Props = {
  menuData:any
}
type MenuDataList = {
  name:string,
  path:string
}
const MenuList = ({menuData}:Props) =>{
  const {name,path,list} = menuData;
  console.log(menuData)
  return (
    <ul>
      <li className='menuTitle'>{name}</li>
      {list.map((data:MenuDataList)=> (
        <li className='menu-item' key={data.name}>
          <a href={`/board/${path}/${data.path}`}>{data.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;