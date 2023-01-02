import { useState } from 'react';
import './menu.css'

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
    <div className='admin-wrap'>
      <div className='category-area'>
        <div className='admin-category-heading'>카테고리 목록</div>
        <div className='category-list'>
          <div className='tree'>
            <ul>
              <li className='tree-category'>
                <div className='node'>
                  <span>정보 게시판</span>
                </div>
              </li>
              <li className='tree-child'>
                <div className='node'>
                  <span>ㄴ </span>
                  <span>게임 뉴스</span>
                </div>
              </li>
              <li className='tree-child'>
                <div className='node'>
                  <span>ㄴ </span>
                  <span>게임 뉴스</span>
                </div>
              </li>
              <li className='tree-child last-child'>
                <div className='node add'>
                  <span>+ 메뉴 추가하기</span>
                </div>
              </li>
              <div className='category-part-line' >
                <span></span>
              </div>
              <li className='tree-category'>
                <div className='node'>
                  <span>정보 게시판</span>
                </div>
              </li>
              <li className='tree-child'>
                <div className='node'>
                  <span>ㄴ </span>
                  <span>게임 뉴스</span>
                </div>
              </li>
              <li className='tree-child'>
                <div className='node'>
                  <span>ㄴ </span>
                  <span>게임 정보</span>
                </div>
              </li>
              <li className='tree-child'>
                <div className='node add'>
                  <span>+ 메뉴 추가하기</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMenuSetting;