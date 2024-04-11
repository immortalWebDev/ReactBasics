import React,{useState,Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList,setUsersList] = useState([])

  const addUserHandler = (userName,userAge,userCollege) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name:userName,age:userAge, college:userCollege,id: Math.random().toString()}]
    })
  }

  return (
    <Fragment>

      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>

    </Fragment>
  );
}

export default App;
