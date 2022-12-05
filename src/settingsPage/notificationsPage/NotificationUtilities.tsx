import { v4 as uuid } from "uuid";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const namespace = "settings-pg-notifications";
export const NotificationCheckbox = ({
  name,
  description,
  defaultChecked,
}: {
  name: string;
  description: string;
  defaultChecked?: boolean;
}) => {
  const id = useRef(uuid());
  return (
    <div className={`${namespace}-checkbox`}>
      <input
        defaultChecked={defaultChecked}
        id={id.current + name}
        type="checkbox"
        value={name}
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
      <label htmlFor={id.current + name}>
        <span className="checkbox">
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </span>
        <span> {description}</span>
      </label>
    </div>
  );
};
export const NotificationCategory = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <div className={`${namespace}-category`}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
export const NotificationForm = ({ children }: { children: JSX.Element }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <form className={`${namespace}-form`} onSubmit={onSubmit}>
      <div className={`${namespace}-form-inner`}>{children}</div>
      <button type="submit">Save</button>
    </form>
  );
};
