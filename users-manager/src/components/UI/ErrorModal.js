import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onChoose} />;
};

const Modal = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onChoose}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = ({ title, message, clear }) => {
    const onHandleError = () => {
        clear();
    };

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onChoose={onHandleError} />,
                document.getElementById("backdrop_portal")
            )}
            {ReactDOM.createPortal(
                <Modal
                    onChoose={onHandleError}
                    message={message}
                    title={title}
                />,
                document.getElementById("modal_portal")
            )}
        </Fragment>
    );
};

export default ErrorModal;
