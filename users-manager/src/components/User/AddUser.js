import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [errorType, setErrorType] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setErrorType({
                title: "An Error occured!",
                message: "Enter input for name and age",
            });
            return;
        }

        if (+enteredAge < 1) {
            setErrorType({
                title: "Invalid Age!",
                message: "Enter a valid age (Age > 0)",
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setErrorType(null);
    };

    return (
        <div>
            {errorType && (
                <ErrorModal
                    title={errorType.title}
                    message={errorType.message}
                    clear={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor="age">Age (in Years)</label>
                    <input
                        id="age"
                        type="number"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
