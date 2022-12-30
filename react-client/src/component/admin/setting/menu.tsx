import { useState } from 'react';


const AdminMenuSetting = () => {
  const [selectCategory,setSelectCategory] = useState(null);
  const category = ["직업 게시판","정보 게시판"];
  const menulist = [
    {
      category:'직업 게시판',
      name:'전사',
    },
    {
      category:'직업 게시판',
      name:'마법사',
    },
    {
      category:'정보 게시판',
      name:'게임 뉴스',
    },
    {
      category:'정보 게시판',
      name:'게임 업데이트',
    },
  ]
  function onChange(e:any){
    setSelectCategory(e.target.value)
  }
  return (
    <div>
      <select name='menu_category' onChange={onChange}>
        {category.map((data)=>{
          return <option key={data} value={data}>{data}</option>
        })}
      </select>
      <div>
        {menulist.map((data)=>{
          if(data.category === selectCategory){
            return <div>{data.name}</div>
          }
        })}
      </div>
    </div>
  )
}

export default AdminMenuSetting;