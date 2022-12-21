import BoardList from "./list/boardList";
import './board.css'
import { useMatches } from "react-router-dom";
type BoardData = {
  boardNumber:[
    id:number, // 글 넘버
    title: string, // 제목
    content: string, // 내용
    user:string, // 글쓴이 [유저]
    date:Date, // 글쓴 시간
    view:number, // 조회 수
    reco:number // 추천 수
  ]
}
const Board = () => {
  const BoardHead = ["번호","제목","글쓴이","등록일","조회","추천"]
  const sslist = new Array(30).fill('제목 없음');
  console.log(sslist)
  const List = ["제목1","제목2","안녕하세요","가나다라마바사","제목입니다.","게시판을 이용하자"]
  const commuName = 'isgame' // 후에 게임의 이름으로 대체하여 전역상태로 관리함.
  const matches = useMatches();
  const boardNumber = matches[0].params.boardNumber

  const boardList = [
    {
      boardNumber:matches[0].params.boardNumber,
      number:0,
      title: '제목 부분입니다.',
      content: '내용 부분입니다.',
      user:'유저',
      date:'2022-12-20',
      view: 723, // 조회 수
      reco:100 // 추천 수
    }
  ]
  return (
    <article className="board-wrap">
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
    </article>
  )
}

export default Board;