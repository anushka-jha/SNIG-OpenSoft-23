import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import "../assests/login.css";
import { Link } from "react-router-dom";


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
        <section className="Section">
          <h1 className="H1">You are logged in!</h1>
          <br />
          <p className="para">
            <a href="#" className="go-to-home">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <section className="Section">
          <p
            ref={errRef}
            className={errMsg ? "errmsg para" : "offscreen para"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="H1" style={{fontSize: "22px"}}>Log in</h1>
          <form on onSubmit={handleSubmit} className="Form">
            {/* <label htmlFor="username">
                    Username:</label> */}
            <input
              className="Input"
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
              className="Input"
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />


            <button className="Button" style={{fontSize: "13px",borderRadius: "5px"}}><Link to="/dashboard">Log In</Link></button>
          </form>

          <p className="para">
            Need an Account?&nbsp;
            {/* <span className="line"> */}
            {/* {put router link} */}
            <Link className="sign-up" to="/signup">
              Sign Up
            </Link>
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
