import { useState, useRef } from "react";
import upperCaseWords from "../../utilities/helpers/upperCaseWords";
import { v4 as uuid } from "uuid";
const namespace = "settings-pg-notifications";
const NotificationNavItem = ({
  value,
  checked,
  onChange,
}: {
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const id = useRef(uuid());
  return (
    <div className={`${namespace}-nav-item`}>
      <input
        id={id.current + value}
        name="notification-type"
        type={"radio"}
        checked={checked}
        value={value}
        onChange={onChange}
        style={{
          position: "absolute",
          visibility: "hidden",
          width: "0",
          height: "0",
          margin: "0",
          padding: "0",
          zIndex: "-1",
        }}
      />
      <label htmlFor={id.current + value}>{upperCaseWords(value)}</label>
    </div>
  );
};
const NotificationNav = () => {
  const [notificationType, setNotificationType] = useState<"email" | "push">(
    "email"
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;
    if (target === "email" || target === "push") setNotificationType(target);
  };
  return (
    <div className={`${namespace}-nav`}>
      <NotificationNavItem
        value={"email"}
        checked={notificationType === "email"}
        onChange={onChange}
      />
      <NotificationNavItem
        value={"push"}
        checked={notificationType === "push"}
        onChange={onChange}
      />
    </div>
  );
};
export default NotificationNav;
