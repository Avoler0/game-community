import { useEffect, useRef, useState } from "react";



const MenuTree = ({menuData,setTreeAddList,index}:any) => {
  const {category,list} = menuData;
  const [addNode,setAddNode] = useState(false);
  const addMenuRef = useRef<HTMLInputElement>(null);

  function childClick(event:any){
    event.currentTarget.classList.toggle('active');
  }

  function addMenuList(){
    const value = addMenuRef.current?.value;
    const menuListDupliCheck = list.includes(addMenuRef.current?.value);

    if(menuListDupliCheck){
      setAddNode(false);
    }else{
      setTreeAddList({category,list:[...list,value],index})
      setAddNode(false);
    }
  }
  return(
    <>
      <li className='tree-category'>
        <div className='node'>
          <span>{category}</span>
        </div>
      </li>
      {list.map((name:string)=>(
        <li key={category+' '+name} className='tree-child' onClick={childClick}>
          <div className='node'>
            <span>ㄴ </span>
            <span>{name}</span>
            <span className='image-wrap'>
              <img src='/images/pencil.svg' alt='edit'/>
            </span>
          </div>
        </li>
      ))}
      <li className='tree-child'>
        <div className='node'>
          <div className='tree-add-node'>
            {addNode ? (
              <label>
                <span className='input-wrap'><input type='text' ref={addMenuRef}/><span onClick={() => setAddNode(false)}>X</span></span>
                <button className='node-addBtn' onClick={addMenuList}>추가</button>
              </label>)
                : <span onClick={()=> setAddNode(true)}>+ 메뉴 추가하기</span>}
          </div>
        </div>
      </li>
      <div className='category-part-line' >
        <span></span>
      </div>
    </>
  )
}

export default MenuTree;