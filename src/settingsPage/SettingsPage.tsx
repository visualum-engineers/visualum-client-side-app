import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBell,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

import useWindowWidth from "../hooks/use-window-width";
import LoadingIcon from "../utilities/loadingIcon/LoadingIcon";
import IntegrationsIcon from "../utilities/integrationsIcon/IntegrationsIcon";
const namespace = "settings-pg";
const generateSettingsLink = (str: string) => `/settings/${str}`;
const settingItemsData = [
  {
    title: "Account",
    link: generateSettingsLink("account"),
    icon: <FontAwesomeIcon icon={faCircleUser} />,
    description: "Change your profile, personal, or login information",
  },
  {
    title: "Integrations",
    link: generateSettingsLink("integrations"),
    icon: <IntegrationsIcon />,
    description: "Add and/or remove your linked accounts",
  },
  {
    title: "Notifications",
    link: generateSettingsLink("notifications"),
    icon: <FontAwesomeIcon icon={faBell} />,
    description: "Manage and set how and why we contact you",
  },
  {
    title: "Billing",
    link: generateSettingsLink("billing"),
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
    description: "Manage your billing information, and your subscription plan",
  },
];
const SettingItemRow = ({
  icon,
  title,
  description,
  link,
}: {
  icon?: JSX.Element;
  title?: string;
  description?: string;
  link?: string;
}) => {
  const internalEls = (
    <>
      <h4>
        <div className={`${namespace}-setting-item-row-icon`}> {icon}</div>
        {title && (
          <div className={`${namespace}-setting-item-row-title`}>{title}</div>
        )}
      </h4>
      {description && <p>{description}</p>}
    </>
  );
  return (
    <div className={`${namespace}-setting-item-row`}>
      {link ? (
        <Link to={link} className={`${namespace}-setting-item`}>
          {internalEls}
        </Link>
      ) : (
        <div className={`${namespace}-setting-item`}>{internalEls}</div>
      )}
    </div>
  );
};
const SettingsWrapper = ({ children }: { children: JSX.Element }) => {
  const smallWindowWidth = useWindowWidth(576);
  const mediumWindowWidth = useWindowWidth(768);
  return (
    <div className={`${namespace}-container`}>
      <div className={`${namespace}-sidebar`}>
        <>
          {smallWindowWidth && <h2>Settings</h2>}
          {settingItemsData.map((item) => (
            <SettingItemRow
              key={item.link}
              title={smallWindowWidth ? item.title : undefined}
              description={mediumWindowWidth ? item.description : undefined}
              link={item.link}
              icon={item.icon}
            />
          ))}
        </>
      </div>
      <div className={`${namespace}-setting-type-container`}>{children}</div>
    </div>
  );
};
const SettingsPage = () => {
  return (
    <SettingsWrapper>
      <Suspense fallback={<LoadingIcon entireViewPort />}>
        <Routes>
          <Route path="/">
            <Route index element={<></>} />
            <Route path="account" element={<></>} />
            <Route path="notifications" element={<></>} />
            <Route path="integrations" element={<></>} />
            <Route path="billing" element={<></>} />
          </Route>
        </Routes>
      </Suspense>
    </SettingsWrapper>
  );
};
export default SettingsPage;
