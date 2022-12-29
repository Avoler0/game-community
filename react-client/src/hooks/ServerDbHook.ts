import { ServerAxios } from "./instanceAxios"


export const getDB = {
  menulist:async function(commuName:string){
    const result = await ServerAxios({
      method:'get',
      // url:`/${commuName}/menulist`
      url:`/menulist/${commuName}`
    })
    console.log(result)
    return result.data;
  },
  postsList:async function(commuName:string,boardNumber:string) {
    const result = await ServerAxios({
      method:'get',
      url:`/posts/${commuName}/${boardNumber}`
    })
    return result.data;
  }
}

export const postDB = {
  menulist:async function(commuName:string,query:any){
    console.log("포스트 쿼리",query)
    const result = await ServerAxios({
      method:'post',
      url:`/menulist/${commuName}`,
      data:query
    })
    return result;
  },
}