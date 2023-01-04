import db from "./mariadb";


export const getMariaDBCommunity = {
  all:async function getCommunityID(){
    const conn = await db();
    return await conn?.query(`SELECT * FROM communities`)
  },
  id:async function getCommunityID(commuName:string){
    const conn = await db();
    const readTable = await conn?.query(`SELECT CommunityID FROM communities WHERE CommunityName = '${commuName}';`)

    return readTable[0]['CommunityID'];
  },
  name:async function getCommunityName(commuID:string){
    const conn = await db();
    const readTable = await conn?.query(`SELECT CommunityName FROM communities WHERE CommunityID = '${commuID}';`)

    return readTable[0]['CommunityName'];
  },
}
 