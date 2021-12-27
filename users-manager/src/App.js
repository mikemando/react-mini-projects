import React, { Fragment, useState } from "react";

import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
    const [userList, setUserList] = useState([]);

    const addUserListHandler = (userName, userAge) => {
        setUserList((previousList) => {
            return [
                ...previousList,
                { name: userName, age: userAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <Fragment>
            <AddUser onAddUser={addUserListHandler} />
            <UserList users={userList} />
        </Fragment>
    );
}

export default App;
