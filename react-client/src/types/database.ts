
export type BoardList = {
  name:string,
  number:number
}
export type MenuList = {
  name:string,
  list:BoardList[]
}

export type Posts = {
  id:number, // 글 넘버
  title: string, // 제목
  content: string, // 내용
  user:string, // 글쓴이 [유저]
  date:Date, // 글쓴 시간
  view:number, // 조회 수
  reco:number // 추천 수
}