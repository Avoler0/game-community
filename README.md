# game-community

react-client
terminal -> npm run dev
express-server
terminal -> npm run server



# DataBase Table

## users
<li>UserID</li>
<li>Email</li>
<li>UserName</li>
<li>Password</li>
<li>Phone</li>
<li>Active</li>
<li>Create_At</li>

## communities
<li style="color:#f03c15; font-weight:strong;">CommunityID</li>
<li style="color:orange">MenuID</li>
<li style="color:orange;">PostID</li>
<li style="color:orange;">Title</li> 
<li style="color:orange;">BackGroundImg</li> 

## menucategory
<li color="red">CommunityID</li>
<li style="color:orange">MenuCategoryID</li>
<li style="color:orange">MenuCategoryName</li>

## menulist
<li color="red">CommunityID</li>
<li style="color:orange">MenuCategoryID</li>
<li style="color:orange">MenuID</li>
<li style="color:orange">MenuName</li>

## posts
<li style="color:#f03c15">CommunityID</li>
<li style="color:orange">MenuID</li>
<li>PostID</li>
<li>Title</li>
<li>Content</li>
