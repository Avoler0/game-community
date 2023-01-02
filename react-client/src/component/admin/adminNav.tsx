import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../nav/nav.css'


const AdminNav = () => {
  const commuName = 'isgame'
  const [adminState,setAdminState] = useState();

  function onClick(ddd:any){
    console.log(ddd.target)
  }

  return (
    <nav>
      <ul>
        <li className='nav-category'>
          <Link to={'menu'}>
            <span>설정</span>
          </Link>
        </li>
        <li className='nav-category' onClick={() => onClick('menu_list')}>메뉴 추가</li>
        <li className='nav-category'>3</li>
        <li className='nav-category'>4</li>
        <li className='nav-category'>5</li>
      </ul>
    </nav>
  )
}

export default AdminNav;