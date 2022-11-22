import UserProfile from "../../utilities/userProfile/UserProfile";
import { v4 as uuid } from "uuid";
import PassiveFormInput from "../../utilities/formInputs/FormInputs";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const namespace = "settings-pg-account";
const testUser = {
  _id: uuid(),
  first_name: "Emilio",
  last_name: "Sameniego",
  language: "english",
};
const AccountFormWrapper = ({
  children,
  title,
  onSubmit,
  editMode,
}: {
  editMode?: boolean;
  children: JSX.Element;
  title?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <form className={`${namespace}-form`} onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
      {editMode && <button type="submit">Save</button>}
    </form>
  );
};
const Profile = () => {
  return (
    <AccountFormWrapper title={"Profile"}>
      <>
        <PassiveFormInput title={"First Name:"} />
        <PassiveFormInput title={"Last Name:"} />
        <PassiveFormInput title={"Hobbies/Interests:"} />
        <PassiveFormInput title={"Personal Website:"} />
      </>
    </AccountFormWrapper>
  );
};
const LoginInfo = () => {
  return (
    <AccountFormWrapper title={"Login Info"}>
      <>
        <PassiveFormInput title={"Email Address:"} />
        <div className={`form-inputs-container ${namespace}-change-btns`}>
          <button type="button">Change Password</button>
          <button type="button">
            <FontAwesomeIcon icon={faPlus} /> Add Login Method
          </button>
        </div>
      </>
    </AccountFormWrapper>
  );
};
const PersonalInfo = () => {
  return (
    <AccountFormWrapper title={"Personal Info"}>
      <>
        <PassiveFormInput title={"Company Name:"} />
        <PassiveFormInput title={"Occupation:"} />
        <PassiveFormInput title={"City:"} />
        <PassiveFormInput title={"Country:"} />
        <PassiveFormInput title={"Language:"} />
        <PassiveFormInput title={"Phone Number:"} />
      </>
    </AccountFormWrapper>
  );
};

const Account = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <div className={`${namespace}-container`}>
      <UserProfile editControls={true} user={testUser} imageSize={"200px"} />
      <Profile />
      <LoginInfo />
      <PersonalInfo />
    </div>
  );
};
export default Account;
