import BoardList from "./post/postsList";
import './board.css'
import { useMatches } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDB } from "../../../hooks/ServerDbHook";
import axios from "axios";

const Board = () => {
  const [postsList,setPostsList] = useState<any>();
  const BoardHead = ["번호","제목","글쓴이","등록일","조회","추천"]
  const commuName = 'isgame' // 후에 게임의 이름으로 대체하여 전역상태로 관리함.
  const matches = useMatches();
  const boardNumber = matches[0].params.boardNumber

  const emptyPosts = [
      {
        "id":0,
        "title":"제목없음",
        "content": "내용없음",
        "user": "닉네임 없음",
        "date": "2022-12-21",
        "view": "730",
        "reco": "20"
      }
    ]
  useEffect(()=>{
    getDB.postsList(commuName,boardNumber!)
    .then((result)=>{
      setPostsList(result)
    })
    .catch((error)=>{
      console.log("에러남")
    })
  },[])
  if(!postsList) return <div></div>
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
          {emptyPosts && emptyPosts?.map((data:any)=>(
              <BoardList key={data.id} postsData={data} />
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default Board;