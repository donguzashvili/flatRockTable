import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header';
import Table from './Components/Table/Table';
import AddUser from './Components/adduser';
import DeleteUser from './Components/warn';
import UserSetup from './Components/User/user';

const data = require('./Assets/db.json');

function App() {
  const [appData, setAppData] = useState();
  const [addUser, setAddUser] = useState();
  const [deleteUser, setDeleteUser] = useState();
  const [permissions, setPermissions] = useState();
  const [route, setRoute] = useState('table');
  const [editUser, setEditUser] = useState();

  const navigate = useNavigate();

  //header search
  const searchData = (e) => {
    const value = e.currentTarget.value ? e.currentTarget.value.toLowerCase() : e.currentTarget.value;
    if (value === '') return setAppData(data.data);
    let tempData = [...appData];
    const searchRes = tempData.filter(
      (el) =>
        el.name.toLowerCase().includes(value) ||
        el.mail.toLowerCase().includes(value) ||
        el.last_name.toLowerCase().includes(value) ||
        el.role.toLowerCase().includes(value)
    );
    setAppData(searchRes);
  };

  //determine locaton and if correct path add user
  const addData = () => {
    const url = window.location.href;
    if (!url.includes('table')) return;
    setAddUser(true);
  };

  //add new user from + sign
  const createNewUser = (obj) => {
    setAddUser(null);
    let modifyObj = { ...obj, status: 'Inactive' };
    setAppData([...appData, modifyObj]);
  };
  //remove user from table
  const removeUser = (id) => {
    setAppData((prevData) => {
      let tempData = [...prevData];
      const newData = tempData.filter((el) => el.id !== id);
      return newData;
    });
    setDeleteUser(null);
  };
  //update status from edit user
  const updateStatus = (obj) => {
    let tempData = [...appData];
    tempData.find((el) => (el.id === obj.id ? (el.status = obj.status) : null));
    setAppData(tempData);
  };

  //update user from edit user
  const updateUser = (obj) => {
    let tempData = [...appData];
    tempData.forEach((el) => {
      if (el.id === obj.id) {
        el.name = obj.name;
        el.last_name = obj.last_name;
        el.role = obj.role;
      }
    });
    setAppData(tempData);
    navigate('/table/1');
  };

  //on component mount fill data
  useEffect(() => {
    setAppData(data.data);
    setPermissions(data.permission);
  }, []);

  useEffect(() => {}, [route]);

  return (
    <div className="App">
      <div className="header">
        <Header searchData={searchData} addData={addData} />
        {addUser ? <AddUser closeWindow={() => setAddUser(null)} addUser={createNewUser} /> : null}
        {deleteUser ? <DeleteUser userData={deleteUser} closeWindow={() => setDeleteUser(null)} deleteUser={removeUser} /> : null}
      </div>
      <section>
        <Routes>
          <Route path="/" element={<Navigate to="/table/1" />} />
          <Route
            path="/user/:id"
            element={
              <UserSetup
                data={editUser}
                permissions={permissions}
                updateStatus={updateStatus}
                setRoute={setRoute}
                updateUser={updateUser}
              />
            }
          />
          <Route
            path="/table/:page"
            element={
              <Table
                data={appData}
                addUser={addUser}
                setDeleteUser={setDeleteUser}
                setRoute={setRoute}
                editUser={(id) => setEditUser(appData.find((el) => el.id === id))}
              />
            }
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
