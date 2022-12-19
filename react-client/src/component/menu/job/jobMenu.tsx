import '../menu.css'

const JobMenu = () =>{
  const JobList = ["전사","법사","궁수","도적"]

  return (
    <ul className='job-menu-list'>
      <li className='menuTitle'>직업 게시판</li>
        {JobList.map((job)=>{
          return <li key={job} className='job-menu-item'>{job}</li>
        })}
    </ul>
  )
}

export default JobMenu;