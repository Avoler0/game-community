import { ServerAxios } from "./instanceAxios"


export const getDB = {
  menulist:async function(commuName:string){
    const result = await ServerAxios({
      method:'get',
      // url:`/${commuName}/menulist`
      url:`/menulist/${commuName}`
    })
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