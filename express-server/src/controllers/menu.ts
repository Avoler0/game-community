import db from '../mariadb/mariadb';


export const menuController = async (req:any,res:any) => {
  console.log("포스트 컨트롤러" ,req.params)
  const conn = await db();
  const users = await conn?.query(`SELECT * FROM users`)
  console.log("쿼리 유저!!",users)
  try{
    
    const emptyMenuList = [
    {
      "name":"직업 게시판",
      "list":[
        { "name":"전사", "number":11 },
        { "name":"마법사", "number":12},
        { "name":"궁수", "number":13 },
        { "name":"도적", "number":14 }
      ]
    },
    {
      "name":"정보 게시판",
      "list":[
        { "name":"게임 뉴스", "number":0 },
        { "name":"게임 업데이트", "number":1 },
        { "name":"팁 게시판", "number":2 },
        { "name":"가이드 게시판", "number":3 }
      ]
    },
    {
      "name":"커뮤니티 게시판",
      "list":[
        { "name":"자유 게시판", "number":4 },
        { "name":"질문 게시판", "number":5 },
        { "name":"구인 게시판", "number":6 },
        { "name":"길드 게시판", "number":7 }
      ]
    },
    {
      "name":"이슈 게시판",
      "list":[
        { "name":"사건사고 게시판", "number":8 },
        { "name":"토론 게시판", "number":9 },
        { "name":"버그 게시판", "number":10 }
      ]
    }
  ]

    res.status(200).json(emptyMenuList);
  }catch(err){
    
    res.status(400).json({message:'api 조회에 실패하였습니다.'})
  }finally{
    return ;
  }
}