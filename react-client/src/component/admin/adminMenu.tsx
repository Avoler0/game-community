import '../commuLeft/menu/menu.css'


const AdminMenu = () =>{
  const commuName = 'isgame' // 후에 게임의 이름으로 대체하여 전역상태로 관리함.
  const menulist = [
    {
      category:'메뉴 설정',
      list:[
        {name:'메뉴 카테고리 설정', href:'setting/menucategory'},
        {name:'메뉴 리스트 설정', href:'setting/menulist'}
      ]
    },
    {
      category:'권한 설정',
      list:[
        {name:'관리자 설정', href:'setting/manager'},
        {name:'메뉴 권한 설정', href:'setting/menupower'}
      ]
    }
  ]
  return (
    <section className='commu-left'>
      <div className='left-menu'>
        <ul>
          {menulist.map((data:any)=> {
            return (
              <>
                <li className='menuTitle'>{data.category}</li>
                {data.list.map((list:any)=>{
                  return (
                    <li className='menu-item' key={list.name}>
                      <a href={`/${commuName}/admin/${list.href}`}>{list.name}</a>
                    </li>
                  )
                })}
              </>
            )
          })}
        </ul>
      </div>
    </section>
  );
}

export default AdminMenu;