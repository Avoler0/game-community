import { useEffect, useRef, useState } from 'react';
import { postDB } from '../../../../hooks/ServerDbHook';
import MenuTree from '../tree';
import './menu.css'

type List = {
  category:string,
  name:string
}
const AdminMenuSetting = () => {
  const [menuList,setMenuList] = useState<any>();
  const [childProcessList,setChildProcessList] = useState<any>([]);
  const addCategoryRef = useRef<HTMLInputElement>(null);
  const [addCategoryNode,setAddCategoryNode] = useState(false);
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

  function treeSetMenuList(data:any){
    const {category,list,index} = data;
    const copyMenuList = Object.assign([],menuList)
    copyMenuList[index] = { category, list:list };
    setMenuList(copyMenuList);
  }

  function treeSetCategory(){
    const query = {
      category:addCategoryRef.current?.value,
      list:[]
    }
    const dbMenuListDupli = menuList.some((menu:any)=> menu.category === query.category)
    // const treeDuplit = childAddMenuList.some((menu:any) => menu.category === query.category)
    if(dbMenuListDupli){
      return;
    }else{
      // if(treeDuplit){
        
      // }else{
      //   // setChildAddMenuList([...childAddMenuList,query]) // 카테고리 두개 추가돼고 index 추가가 됨 수정하기
      //   setMenuList([...menuList,query])
      // }
    }
    setAddCategoryNode(false)
  }
  function tempClick(){
    // console.log('보내는 쿼리',childAddMenuList)
    // postDB.menulist('isgame',childAddMenuList)
  }

  useEffect(()=>{
    // console.log("자손 메뉴리스트.",childAddMenuList)
    console.log("DB 메뉴 리스트",menuList)
  },[menuList])

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
                return <MenuTree key={data.category} menuData={data} index={index} setTreeAddList={treeSetMenuList}/>
              })}
              <li className='tree-child'>
                <div className='node'>
                  <div className='tree-add-node category'>
                    {addCategoryNode ? (
                    <label>
                      <span className='input-wrap'><input type='text' ref={addCategoryRef}/><span onClick={() => setAddCategoryNode(false)}>X</span></span>
                      <button className='node-addBtn' onClick={treeSetCategory}>추가</button>
                    </label>)
                    : <span className='category-add' onClick={() => setAddCategoryNode(true)}>+ 카테고리 추가하기</span>}
                  </div>
                  
                </div>
              </li>
              {/* {treeRender()} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMenuSetting;