
type Props = {
  title:string
}
type boardListData = {
  title:string,
  id:number,
  category:string
}
const BoardList = ({title}:Props) => {
  const category = '자유'
  return (
    <tr className="board-post">
      <td className="number" style={{width:"5%"}}>1234</td>
      {/* <td className="category">[{category}]</td> */}
      <td className="title" style={{width:"50%"}}>{title}</td>
      <td className="user" style={{width:"10%"}}>스쿵씨</td>
      <td className="date" style={{width:"5%"}}>20:00</td>
      <td className="view" style={{width:"5%"}}>1209</td>
      <td className="reco" style={{width:"7%"}}>43</td>
    </tr>
  )
}

export default BoardList;