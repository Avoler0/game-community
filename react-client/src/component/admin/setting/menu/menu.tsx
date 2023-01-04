import { useEffect, useState } from 'react';
import { postDB } from '../../../../hooks/ServerDbHook';
import MenuTree from '../tree';
import './menu.css'

type List = {
  category:string,
  name:string
}
const AdminMenuSetting = () => {
  const [menuList,setMenuList] = useState<any>();
  const [childAddMenuList,setChildAddMenuList] = useState<any>([]);
  const [selectCategory,setSelectCategory] = useState(null);
  const list:List[] = [
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
    {
      category:'커뮤니티 게시판',
      name:'자유 게시판',
    },
    {
      category:'커뮤니티 게시판',
      name:'질문 게시판',
    },
  ]
  useEffect(()=>{
    const result = [];
    const dataSort = list?.reduce((accumulator:any, currentValue:any)=>{
      if(accumulator[currentValue.category]){
        accumulator[currentValue.category] = [...accumulator[currentValue.category], currentValue.name]
      }else{
        accumulator[currentValue.category] = [currentValue.name]
      }
      return accumulator
    },[])
    for(const ee in dataSort){
      result.push({category:ee,list:dataSort[ee]});
    }
    console.log("리얼!!",result)
    setMenuList(result);
  },[])

  function childSetMenuList(data:any){
    const duplication = childAddMenuList.some((obj:any) => obj.category === data.category);
    
    if(duplication){
      const duplicateArrIndex = childAddMenuList.findIndex((obj:any)=> obj.category === data.category)
      const newChildAddMenuList = childAddMenuList.map((obj:any,mapIndex:number)=>{
        const {category,list,index} = obj;
        const arrList = Object.assign([],list);
        if(mapIndex === duplicateArrIndex){
          return {category,list:[...arrList,String(data.list)],index}
        }else{
          return obj;
        }
      })
      setChildAddMenuList(newChildAddMenuList);
    }else{
      setChildAddMenuList([...childAddMenuList,data])
    }
    // console.log("템프 1",temp1)
    // const temp2 = temp1.map((menu:any)=>{
    //   if(menu.category === data.category){
    //     console.log('중복!!!')
    //     const list = Object.assign([],menu.list);
    //     list.push(data.value)
    //     return list
    //   }
    // })
    // console.log("템프 2",temp2)
    
    // temp[data.index].list = data.list;
    // setMenuList(temp)
  }
  function tempClick(){
    postDB.menulist('isgame',childAddMenuList)
  }

  useEffect(()=>{
    console.log("메뉴리스트입니다1.",childAddMenuList)
  },[childAddMenuList])
  function treeRender(){
    const result = [];
    if(menuList){
      for(const category in menuList!){
        result.push(<MenuTree menuData={menuList[category]} setMenuList={childSetMenuList}></MenuTree>)
      }
    }

    return result
  }
  return (
    <div className='admin-wrap'>
      <div className='category-area'>
        <div className='admin-category-heading'>카테고리 목록</div>
        <button onClick={tempClick}>저장</button>
        <button>삭제</button>
        <div className='category-list'>
          <div className='tree'>
            <ul>
              {menuList && menuList?.map((data:any,index:number)=>{
                return <MenuTree key={data.category} menuData={data} setMenuList={childSetMenuList}/>
              })}
              {/* {treeRender()} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMenuSetting;