import UserProfile, {
  UserProps,
} from "../../utilities/userProfile/UserProfile";
import { v4 as uuid } from "uuid";
import PassiveFormInput from "../../utilities/formInputs/FormInputs";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import useFormEdit from "./use-form-edit";
const namespace = "settings-pg-account";
const testUser = {
  _id: uuid(),
  first_name: "Emilio",
  last_name: "Sameniego",
  language: "english",
};
const DisplayInput = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className={`form-inputs-container ${namespace}-display-input`}>
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  );
};
const AccountFormWrapper = ({
  children,
  title,
  onSubmit,
  editMode,
  editModeCallback,
}: {
  editMode?: boolean;
  editModeCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  children: JSX.Element;
  title?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form className={`${namespace}-form`} onSubmit={onSubmit}>
      <div className={`${namespace}-form-title`}>
        <h3>{title}</h3>
        {!editMode && (
          <button
            type="button"
            onClick={editModeCallback}
            data-action-type="edit"
            aria-label={`edit-${title}`}
          >
            <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span>
          </button>
        )}
      </div>
      {children}
      {editMode && (
        <div className={`${namespace}-form-submit-btns`}>
          <button
            type="button"
            onClick={editModeCallback}
            data-action-type="cancel-edit"
            aria-label={`cancel-edit-${title}`}
          >
            Cancel
          </button>
          <button type="submit" aria-label={`save-${title}`}>
            Save
          </button>
        </div>
      )}
    </form>
  );
};

const Profile = ({ user }: { user: UserProps }) => {
  const { editState, editCallback } = useFormEdit();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  const inputValues: { [key: string]: string | string[] } = {
    "First Name:": user.first_name,
    "Last Name:": user.last_name,
    "Hobbies/Interests:": user.interests ? user.interests : "N/A",
    "Personal Website:": user.personal_website ? user.personal_website : "N/A",
  };
  const editInputs = (
    <>
      {Object.entries(inputValues).map(([key, value]) => (
        <PassiveFormInput
          key={key}
          title={key}
          defaultValue={
            Array.isArray(value) ? value[0] : value !== "N/A" ? value : ""
          }
        />
      ))}
    </>
  );
  const displayInputs = (
    <>
      {Object.entries(inputValues).map(([key, value]) => (
        <DisplayInput
          key={key}
          title={key}
          value={Array.isArray(value) ? value[0] : value}
        />
      ))}
    </>
  );
  return (
    <AccountFormWrapper
      title={"Profile"}
      onSubmit={onSubmit}
      editMode={editState}
      editModeCallback={editCallback}
    >
      <>{editState ? editInputs : displayInputs}</>
    </AccountFormWrapper>
  );
};
const LoginInfo = ({ user }: { user: UserProps }) => {
  const { editState, editCallback } = useFormEdit();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  const editInputs = (
    <>
      <PassiveFormInput title={"Email Address:"} />
    </>
  );
  const displayInputs = (
    <DisplayInput
      title={"Email Address:"}
      value={user.email ? user.email : "N/A"}
    />
  );
  return (
    <AccountFormWrapper
      title={"Login Info"}
      onSubmit={onSubmit}
      editMode={editState}
      editModeCallback={editCallback}
    >
      <>
        {editState ? editInputs : displayInputs}
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
const PersonalInfo = ({ user }: { user: UserProps }) => {
  const { editState, editCallback } = useFormEdit();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  const inputValues: { [key: string]: string | string[] } = {
    "Company Name:": user.company
      ? user.company.name
        ? user.company.name
        : "N/A"
      : "N/A",
    "Occupation:": user.company
      ? user.company.occupation
        ? user.company.occupation
        : "N/A"
      : "N/A",
    "City:": user.address
      ? user.address.city
        ? user.address.city
        : "N/A"
      : "N/A",
    "Country:": user.address
      ? user.address.country
        ? user.address.country
        : "N/A"
      : "N/A",
    "Language:": user.language,
    "Phone Number:": user.phone_num ? user.phone_num : "N/A",
  };
  const editInputs = (
    <>
      {Object.entries(inputValues).map(([key, value]) => (
        <PassiveFormInput
          key={key}
          title={key}
          defaultValue={
            Array.isArray(value) ? value[0] : value !== "N/A" ? value : ""
          }
        />
      ))}
    </>
  );
  const displayInputs = (
    <>
      {Object.entries(inputValues).map(([key, value]) => (
        <DisplayInput
          key={key}
          title={key}
          value={Array.isArray(value) ? value[0] : value}
        />
      ))}
    </>
  );
  return (
    <AccountFormWrapper
      title={"Personal Info"}
      onSubmit={onSubmit}
      editMode={editState}
      editModeCallback={editCallback}
    >
      <>{editState ? editInputs : displayInputs}</>
    </AccountFormWrapper>
  );
};

const Account = () => {
  return (
    <div className={`${namespace}-container`}>
      <UserProfile editControls={true} user={testUser} imageSize={"200px"} />
      <br />
      <br />
      <Profile user={testUser} />
      <LoginInfo user={testUser} />
      <PersonalInfo user={testUser} />
    </div>
  );
};
export default Account;
