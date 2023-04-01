import React from 'react'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';

function signup() {
  return (
    
    <>
        <div className="card mx-auto w-50" style={{marginTop: 5 + 'em'}}>
            <h2 className="card-header text-center">
                Register
            </h2>
            <div className="card-body">
                <Form>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group mb-2">
                    <input type="email" className="form-control" placeholder="Enter Email Id"/>
                </div>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="Enter Country"/>
                </div>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="Enter City"/>
                </div>
                <div className="form-group mb-2">
                    <input type="tel" className="form-control" placeholder="Enter Mobile No."/>
                </div>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="Enter Username"/>
                </div>
                <div className="form-group mb-2">
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group mb-2">
                    <input type="password" className="form-control" placeholder="Re-enter Password"/>
                </div>
                {/* <Button type="button" className="btn btn-primary" style={{width:"100%"}}> */}
                <a className="btn btn-primary" href="/login" role="button" style={{width:"100%"}}>Submit</a>
                <p></p>
                <p className="text-center mb-1">Have an account? <Link to="/login">Log in</Link> </p>
                <p className="text-center"><a href="#">Forgot Password</a></p>
                </Form>
            </div>
    </div>
   </>
  );
}

export default signup;
