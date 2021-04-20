import { IUser } from "interfaces/IUser";
import React, { useState, useEffect, ChangeEvent } from "react";
import API from "services/api";
import FloatContainer from "./Components/FloatContainer";

const authImage = require("@images/libreria4.jpg");
const emailLogo = require("@logos/email.svg");
const googleLogo = require("@logos/google.svg");
const facebookLogo = require("@logos/facebook.svg");

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Login = () => {
  const token = localStorage.getItem("token");

  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const handleInputChange = (e: InputChange) => {
    if (e.target.value !== "") {
      setFocus({ ...focus, [e.target.name]: true });
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: "" });
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  const loginClicked = () => {
    const { email, password } = user;
    API.loginUser({ email, password });
    //window.location.href = "/";
  };

  useEffect(() => {
    if (token) window.location.href = "/";
  }, [token]);

  return (
    <div className="container">
      <div className="auth-container">
        <div className="auth-img-container">
          <img className="auth-img" src={authImage} alt="" />
        </div>
        <div className="auth-form">
          <div className="main-auth-form">
            <p className="auth-form-header">Inicia Sesión</p>
            <div className="field-wrap">
              <FloatContainer
                label={"Email"}
                inputType={"text"}
                inputName={"email"}
                value={user.email}
                focusValue={focus.email}
                handleInputChange={handleInputChange}
              />
              <FloatContainer
                label={"Contraseña"}
                inputType={"password"}
                inputName={"password"}
                value={user.password}
                focusValue={focus.password}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="auth-buttons">
              <button onClick={loginClicked}>
                <div className="button-container">
                  <div className="button-img">
                    <img src={emailLogo} alt="" />
                  </div>
                  <div className="button-text">Inicia sesión</div>
                </div>
              </button>
              <button>
                <div className="button-container">
                  <div className="button-img">
                    <img src={googleLogo} alt="" />
                  </div>
                  <div className="button-text">Inicia sesión con Google</div>
                </div>
              </button>
              <button>
                <div className="button-container">
                  <div className="button-img">
                    <img src={facebookLogo} alt="" />
                  </div>
                  <div className="button-text">Inicia sesión con Facebook</div>
                </div>
              </button>
            </div>
          </div>
          <div className="auth-texts">
            <div className="text">
              <p>Todavía no tienes unha cuenta?</p>
              <a className="text-bold" href="/auth/register">
                Regístrate!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
