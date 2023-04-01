import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
//import "../assests/login.css";
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
        <section className="Section ">
          <h1 className="H1">You are logged in!</h1>
          <br />
          <p className="para">
            <a href="#" className="go-to-home">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <div className="Section" style={{marginTop:"10%"}}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg para" : "offscreen para"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="card mx-auto w-50 align-middle">
            <h3 className="card-header text-center">
                Log in
            </h3>
            <div className="card-body">
            <form on onSubmit={handleSubmit} className="Form">
            {/* <label htmlFor="username">
                    Username:</label> */}
            <div className="form-group">
            <input
              className="form-control mb-2"
              type="email"
              id="username"
              placeholder="Enter Email Id"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            </div>

            {/* <label htmlFor="password">
                    Password:</label> */}
            <div className="form-group">
            <input
              className="form-control mb-2"
              type="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            </div>

            <a className="btn btn-primary" href="/dashboard" role="button" style={{width:"100%"}}>Log in</a>
          
            <p></p>
            <p className="text-center mb-1">Need an account? <Link to="/signup">Sign up</Link> </p>
            <p className="text-center"><a href="#">Forgot Password</a></p>
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
//export
export default Login;
