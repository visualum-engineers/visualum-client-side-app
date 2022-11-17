import { Route, Routes } from "react-router-dom";

const SettingsPage = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="account" />
        <Route path="notifications" />
        <Route path="integrations" />
        <Route path="billing" />
      </Route>
    </Routes>
  );
};
export default SettingsPage;
