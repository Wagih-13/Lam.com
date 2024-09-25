import { Outlet } from "react-router-dom";
import "./layOutStyle.scss";
import NavBar from "./navBar/NavBar";

const LayOut = () => {
  return <>
  <NavBar/>
  <Outlet/>
  </>;
};
export default LayOut;
