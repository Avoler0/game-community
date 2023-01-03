import { useRef, useState } from "react";



const MenuTree = ({menuData,index,setMenuList}:any) => {
  const {category,list} = menuData;
  const [addNode,setAddNode] = useState(false);
  const addNodeRef = useRef<HTMLInputElement>(null);
  // console.log("메뉴트리",menuData,index)

  function childClick(event:any){
    event.currentTarget.classList.toggle('active');
  }

  function menuAdd(event:any){
    event.preventDefault()
    if(addNodeRef){
      list.push(addNodeRef.current?.value)
      setAddNode(false)
      setMenuList({category,list,index})
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
      <li className='tree-add-child'>
        <div className='node'>
          {addNode ? (
          <label>
            <span className='input-wrap'><input type='text' ref={addNodeRef}/><span onClick={() => setAddNode(false)}>X</span></span>
            <button className='node-addBtn' onClick={menuAdd}>추가</button>
          </label>)
            : <span onClick={()=> setAddNode(true)}>+ 메뉴 추가하기</span>}
        </div>
      </li>
      <div className='category-part-line' >
        <span></span>
      </div>
    </>
  )
}

export default MenuTree;