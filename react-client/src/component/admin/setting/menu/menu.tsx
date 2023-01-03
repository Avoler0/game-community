import { useEffect, useState } from 'react';
import MenuTree from '../tree';
import './menu.css'

type List = {
  category:string,
  name:string
}
const AdminMenuSetting = () => {
  const [addNode,setAddNode] = useState(false);
  const [menuList,setMenuList] = useState<any>();
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
    const result = list?.reduce((accumulator:any, currentValue:any)=>{
      if(accumulator[currentValue.category]){
        accumulator[currentValue.category] = [...accumulator[currentValue.category], currentValue.name]
      }else{
        accumulator[currentValue.category] = [currentValue.name]
      }
      return accumulator
    },[])
    setMenuList(result);
  },[])
  console.log(menuList)

  function tempClick(){
    const category1 = '커뮤니티 게시판'
    const menu1 = ['자유 게시판','아무 게시판','삭제된 게시판입니다.']
    const category2 = '정보 게시판'
    const menu2 = ['게임 뉴스', '게임 업데이트', '게임 핫 이슈 !!!'];
    const temp = menuList;

    temp[category1] = [...menu1] // 배열 자체를 받아와서 내부 수정 후 배열 넣기 !!
    temp[category2] = [...menu2]
    console.log("템프",temp)
    setMenuList(temp)
  }

  useEffect(()=>{
    console.log("메뉴리스트입니다.",menuList)
  },[menuList])
  function treeRender(list:any){
    const result = [];
    if(list){
      for(const ee in list!){
        console.log("dfdf",ee)
        result.push(<MenuTree category={ee} list={list[ee]} menuList={list}></MenuTree>)
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
              {treeRender(menuList)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMenuSetting;