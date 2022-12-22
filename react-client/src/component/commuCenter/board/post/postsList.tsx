
type Props = {
  postsData:any
}
type boardListData = {
  title:string,
  id:number,
  category:string
}
const BoardList = ({postsData}:Props) => {
  const {id,title,content,user,date,view,reco} = postsData;
  console.log("게시물 데이터",postsData)
  return (
    <tr className="board-post">
      <td className="number" style={{width:"5%"}}>{id}</td>
      <td className="title" style={{width:"50%"}}>{title}</td>
      <td className="user" style={{width:"10%"}}>{user}</td>
      <td className="date" style={{width:"5%"}}>{date}</td>
      <td className="view" style={{width:"5%"}}>{view}</td>
      <td className="reco" style={{width:"7%"}}>{reco}</td>
    </tr>
  )
}

export default BoardList;