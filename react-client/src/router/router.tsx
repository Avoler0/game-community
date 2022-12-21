import {createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import BoardPage from "../pages/board";
import MainPage from "../pages/main";



const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/board" element={<BoardPage />} /> */}
      <Route path="/board/:category/:boardNumber" element={<BoardPage />} />
    </>
  )
);

export default Router