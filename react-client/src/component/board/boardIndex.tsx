import BoardList from "./list/boardList";
import './board.css'
type BoardData = {
  url: string,
  number:number,
  title:string,
  user:string,
  date:Date,
  view:number,
  reco:number
}
const Board = () => {
  const BoardHead = ["번호","제목","글쓴이","등록일","조회","추천"]
  const sslist = new Array(30).fill('제목 없음');
  console.log(sslist)
  const List = ["제목1","제목2","안녕하세요","가나다라마바사","제목입니다.","게시판을 이용하자"]
  return (
    <div className="board-wrap">
      <table>
        <thead>
          <tr>
            {BoardHead.map((name)=>{
              return <th className="board-head" key={name}>{name}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {sslist.map((name)=>(
              <BoardList key={name} title={name} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Board;