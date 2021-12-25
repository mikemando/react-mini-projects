import React from "react";

import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
    const onHandleError = () => {
        props.clear();
    };

    return (
        <div>
            <div className={classes.backdrop} onClick={onHandleError} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={onHandleError}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
