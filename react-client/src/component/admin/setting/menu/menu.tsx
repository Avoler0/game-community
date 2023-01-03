import { useEffect, useState } from 'react';
import MenuTree from '../tree';
import './menu.css'

type List = {
  category:string,
  name:string
}
const AdminMenuSetting = () => {
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
    const realResult = [];
    const result = list?.reduce((accumulator:any, currentValue:any)=>{
      if(accumulator[currentValue.category]){
        accumulator[currentValue.category] = [...accumulator[currentValue.category], currentValue.name]
      }else{
        accumulator[currentValue.category] = [currentValue.name]
      }
      return accumulator
    },[])
    for(const ee in result){
      realResult.push({category:ee,list:result[ee]});
    }
    console.log("리얼!!",realResult)
    setMenuList(realResult);
  },[])
  console.log(menuList)
  function childSetMenuList(data:any){
    console.log("자식에서 온 데이터",data)
    const temp = menuList;
    temp[data.index].list = data.list;
    setMenuList(temp)
  }
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
  function tempClick2(){

    console.log("클릭투!",menuList)
  }
  useEffect(()=>{
    console.log("메뉴리스트입니다1.",menuList)
  },[menuList])
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
        <button onClick={tempClick2}>삭제</button>
        <div className='category-list'>
          <div className='tree'>
            <ul>
              {menuList && menuList?.map((data:any,index:number)=>{
                return <MenuTree key={data.category} menuData={data} index={index} setMenuList={childSetMenuList}/>
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