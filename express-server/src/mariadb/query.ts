import db from "./mariadb";

export const selectQuery = {
  community:{
    all:async function getCommunityAll(){
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
  },
  menulist:{
    all:async function getMenulistAll(commuName:string) {
      const conn = await db();
      const communityID = selectQuery.community.id(commuName)
      const result = await conn?.query(`SELECT * FROM menulist WHERE CommunityID = ${communityID}`)

      return result;
    }
  }
}

export const insertQuery = {
  menuCategory:async function (communityID:number,categoryName:string){
    const conn = await db();
    const result = await conn?.query(`INSERT INTO menucategory(CommunityID,MenuCategoryName) VALUES(${communityID},'${categoryName}');`)
    
    return result;
  },
  menulist:async function (values:any){
    const conn = await db();
    
    const result = await conn?.query(`INSERT INTO menulist(CommunityID,MenuCategoryID,MenuName) VALUES${values};`)
    console.log("쿼리 리설트",values,result)
    return result;
  },
}