import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./signup.css"

function signup() {
  return (
    <>
    <div class="size" >
        <div class="card w-50">
            <h2 class="card-header">
                Register
            </h2>
            <div class="card-body">
                <Form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter UserID"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter Mobile No."/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Re-enter Password"/>
                </div>
                <Button type="button" class="btn btn-primary" style={{width:"100%"}}>Submit</Button>
                <p class="text-center">Have an account? <a href ="#">Log in</a> </p>
                <p class="text-center"><a href="#">Forgot Password</a></p>
                </Form>
            </div>
        </div>
    </div>
  
   </>
  );
}

export default signup;
