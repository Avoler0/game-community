import e from "express";
import { useEffect, useRef, useState } from "react";



const MenuTree = ({menuData,treeSetMenuList,index}:any) => {
  const {category,list} = menuData;
  const [renderList,setLenderList] = useState(list);
  const [addNode,setAddNode] = useState(false);
  const addMenuRef = useRef<HTMLInputElement>(null);

  function childClick(event:any){
    event.currentTarget.classList.toggle('active');
  }
  function deleteMenuList(event:any){
    const value:string = event.target.parentElement.children[1].textContent;
    const copyRenderList = Object.assign([],renderList)
    const deleteIndex = copyRenderList.findIndex((name:string)=> name === value)
    const oldCheck = list.includes(value);

    copyRenderList.splice(deleteIndex,1)
    setLenderList(copyRenderList)
    treeSetMenuList({method:'DELETE',category,value,type: oldCheck ? 'old' : 'new'})
  }

  function addMenuList(){
    const value = addMenuRef.current?.value;
    const oldCheck = list.includes(value)
    const renderListDupliCheck = renderList.includes(value);
    if(renderListDupliCheck){
      setAddNode(false);
    }else{
      setLenderList([...renderList,value])
      treeSetMenuList({method:'ADD',category,value,type: oldCheck ? 'old' : 'new'})
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
      {renderList.map((name:string)=>(
        <li key={category+' '+name} className='tree-child' onClick={childClick}>
          <div className='node'>
            <span>ㄴ </span>
            <span className="menu-value">{name}</span>
            <span className='image-wrap'>
              <img src='/images/pencil.svg' alt='edit'/>
            </span>
            <span onClick={deleteMenuList}>X</span>
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