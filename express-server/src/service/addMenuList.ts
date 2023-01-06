import db from "../mariadb/mariadb";
import { insertQuery } from "../mariadb/query";

export async function takeAddMenuList(arrData:any,communityID:number) {
  const conn = await db();
  try{
    arrData.map(async (data:any) => {
      const { category,list } = data
      const query = `SELECT MenuCategoryID, MenuCategoryName FROM menucategory WHERE CommunityID = ${communityID} and MenuCategoryName = '${data.category}';`;
      let menucategoryQuery = await conn?.query(query);

      if(!menucategoryQuery[0]){
        insertQuery.menuCategory(communityID,category);
        menucategoryQuery = await conn?.query(query);
      }

      const categoryID = menucategoryQuery[0]['MenuCategoryID'];
      const values = taskMenulistQueryValues(list,communityID,categoryID);

      insertQuery.menulist(values)
    });

    return true
  }catch(err){
    return false;
  }

}
export function taskMenulistQueryValues(menulist:any,communityID:number,categoryID:number){
  const result = menulist.map((name:string,index:number)=> `(${communityID},${categoryID},'${name}')`);

  return result.join();
}