import { useContext } from "react";
import AppTitle from "./components/AppTitle";
import Auth from "./components/Auth";
import AddUser from "./components/Forms/AddUser";
import EditUser from "./components/Forms/EditUser";
import UserTable from "./components/UsersTable";

import { usersTableContext } from "./store/AppContext";
import { Route, Routes } from "react-router";

function App() {
  const { isAuthenticated } = useContext(usersTableContext);

  return (
    <>
      {isAuthenticated ? (
        <>
          {/* APP HEADER */}
          <AppTitle />

          {/* MAIN */}
          {/* ROUTES */}
          <Routes>
            <Route path="/" exact element={<UserTable />} /> 
            <Route path="/user/edit" exact element={<EditUser />} />
            <Route path="/user/add" exact element={<AddUser />} />
          </Routes>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;