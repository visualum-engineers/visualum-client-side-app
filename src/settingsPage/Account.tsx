import UserProfile from "../utilities/userProfile/UserProfile";
import {v4 as uuid} from "uuid"
const testUser = {
    _id: uuid(),
    first_name: "Emilio",
    last_name: "Sameniego"
}
const Account = () => {
  return (
    <>
      <UserProfile editControls = {false} user = {testUser}/>
    </>
  );
};
export default Account;
