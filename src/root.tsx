import UserNavBar from "./utilities/userNavbar/UserNavbar";
import GeneralNavBar from "./utilities/generalNavbar/GeneralNavbar";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <GeneralNavBar />
      <div style={{display: "flex", width: "100%", marginTop: "3rem"}}>
        <UserNavBar />
        <Outlet />
      </div>
    </>
  );
};
export default Root;
