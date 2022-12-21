import { ServerAxios } from "./instanceAxios"


export const getDB = {
  menulist:async function(){
    const result = await ServerAxios({
      method:'get',
      url:'/menulist'
    })
    return result.data;
  }
}