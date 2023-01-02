import {createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import AdminMenuSetting from "../component/admin/setting/menu";
import Admin from "../pages/admin";
import BoardPage from "../pages/board";
import MainPage from "../pages/main";



const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/:commuName/admin" element={<Admin />} >
        <Route path="menu" element={<AdminMenuSetting />} />
      </Route>
      <Route path="/board/:category/:boardNumber" element={<BoardPage />} />
    </>
  )
);

export default Router