import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import "../assests/login.css";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState(""); //username
  const [pwd, setPwd] = useState(""); //password
  const [errMsg, setErrMsg] = useState(""); //error_message
  const [success, setSuccess] = useState(""); //success_message

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#" className="go-to-home">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Log in</h1>
          <form on onSubmit={handleSubmit}>
            {/* <label htmlFor="username">
                    Username:</label> */}
            <input
              type="text"
              id="username"
              placeholder="Enter your email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            {/* <label htmlFor="password">
                    Password:</label> */}
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <button>Log In</button>
          </form>

          <p>
            Need an Account?&nbsp;
            {/* <span className="line"> */}
            {/* {put router link} */}
            <a className="sign-up" href="#">
              Sign Up
            </a>
            {/* </span> */}
            <br />
            <a className="forget-password" href="#">
              Forget Password?
            </a>
          </p>
        </section>
      )}
    </>
  );
};
//export
export default Login;
