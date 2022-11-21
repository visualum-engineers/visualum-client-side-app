import UserNavBar from "./utilities/userNavbar/UserNavbar";
import GeneralNavBar from "./utilities/generalNavbar/GeneralNavbar";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <GeneralNavBar />
      <div id={"general-app-container"}>
        <UserNavBar />
        <Outlet />
      </div>
    </>
  );
};
export default Root;
