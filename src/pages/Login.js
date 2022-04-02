import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import style from "./loginPage.module.css";

function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={style.error}>{errorMessages.message}</div>
    );

  const renderForm = (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className={style.inputContainer}>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className={style.buttonContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={style.loginPage}>
      <div className={style.loginForm}>
        <div className={style.title}>Sign In</div>
        {isSubmitted ? <Navigate replace to="../boards"/> : renderForm}
      </div>
      <span>login: user1 <br></br>pass: pass1</span>
    </div>
  );
}

export default Login