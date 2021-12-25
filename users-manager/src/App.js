import React, { useState } from "react";

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
        <div>
            <AddUser onAddUser={addUserListHandler} />
            <UserList users={userList} />
        </div>
    );
}

export default App;
