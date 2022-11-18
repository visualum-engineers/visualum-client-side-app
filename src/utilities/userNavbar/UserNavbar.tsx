import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faHouseUser,
  faChartLine,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import useWindowWidth from "../../hooks/use-window-width";
const namespace = "user-navbar";
const userNavBarData = (id?: string) => {
  const idPrefix = id ? `/${id}` : "";
  const data = [
    {
      title: "User Dashboard",
      link: `${idPrefix}/dashboard`,
      icon: <FontAwesomeIcon icon={faHouseUser} />,
    },
    {
      title: "Data Analytics",
      link: `${idPrefix}/data-analytics`,
      icon: <FontAwesomeIcon icon={faChartLine} />,
    },
    {
      title: "Scheduling",
      link: `${idPrefix}/scheduling`,
      icon: <FontAwesomeIcon icon={faClock} />,
    },
    {
      title: "Settings",
      link: `${idPrefix}/settings`,
      icon: <FontAwesomeIcon icon={faCog} />,
    },
  ];
  return data;
};
const UserProfile = () => {
  return <div className="user-profile"></div>;
};
const UserNavBar = () => {
  const smallWindowWidth = useWindowWidth(576);
  const location = useLocation();
  const dataRegex = userNavBarData().map((e) => {
    const regex = new RegExp(e.link);
    return regex.test(location.pathname);
  });
  //this is correct for index route, in none match
  if (!dataRegex.includes(true)) dataRegex[0] = true;
  return (
    // <div className={`${namespace}-container`}>
      <nav
        className={`${namespace}${
          !smallWindowWidth ? " horizontal-layout" : ""
        }`}
      >
        {userNavBarData().map((e, idx) => {
          return (
            <Link
              key={e.link}
              to={e.link}
              className={`${namespace}-btn${dataRegex[idx] ? " active" : ""}`}
            >
              {e.icon}
            </Link>
          );
        })}
        {smallWindowWidth && <UserProfile />}
      </nav>
    // </div>
  );
};
export default UserNavBar;
