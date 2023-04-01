// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Component } from "react";
// import { Consumer } from "../../context"; from 'react';
// import TextInputGroup from "./TextInputGroup";
// import axios from "axios";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBBtn,
//   MDBBreadcrumb,
//   MDBBreadcrumbItem,
//   MDBProgress,
//   MDBProgressBar,
//   MDBIcon,
//   MDBListGroup,
//   MDBListGroupItem,
// } from "mdb-react-ui-kit";

// class EditProfile extends Component {
//   state = {
//     name: "",
//     email: "",
//     country: "",
//     city: "",
//     phNum: "",
//     username: "",
//     password: "",
//     errors: {},
//   };

//   async componentDidMount() {
//     const { id } = this.props.match.params;
//     const res = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     const user = res.data;
//     this.setState({
//       name: user.name,
//       email: user.email,
//       country: user.country,
//       city: user.city,
//       phNum: user.phNum,
//       username: user.username,
//       password: user.password,
//     });
//   }
//   onSubmit = async (dispatch, e) => {
//     e.preventDefault();
//     const { name, email, country, city, phNum, username, password } =
//       this.state;
//     if (name === "") {
//       this.setState({ errors: { name: "Name is required" } });
//       return;
//     }
//     if (email === "") {
//       this.setState({ errors: { email: "email is required" } });
//       return;
//     }
//     if (country === "") {
//       this.setState({ errors: { country: "country is required" } });
//       return;
//     }
//     if (city === "") {
//       this.setState({ errors: { city: "City is required" } });
//       return;
//     }
//     if (phNum === "") {
//       this.setState({ errors: { phNum: "Phone Number is required" } });
//       return;
//     }
//     if (username === "") {
//       this.setState({ errors: { username: "Username is required" } });
//       return;
//     }
//     if (password === "") {
//       this.setState({ errors: { password: "Password is required" } });
//       return;
//     }

//     const updUser = {
//       name,
//       email,
//       country,
//       city,
//       phNum,
//       username,
//       password,
//     };
//     const { id } = this.props.match.params;
//     const res = await axios.put(
//       `https://jsonplaceholder.typicode.com/users/${id}`,
//       updUser
//     );
//     dispatch({ type: "UPDATE_USER", payload: res.data });

//     this.setState({
//       name: "",
//       email: "",
//       country: "",
//       city: "",
//       phNum: "",
//       username: "",
//       password: "",
//       errors: {},
//     });
//     //redirection this will redirect us to mainpage '/' after submission
//     this.props.history.push("/");
//   };

//   onNameChange = (e) => this.setState({ name: e.target.value });
//   onEmailChange = (e) => this.setState({ email: e.target.value });
//   onCountryChange = (e) => this.setState({ country: e.target.value });
//   onCityChange = (e) => this.setState({ city: e.target.value });
//   onPhNumChange = (e) => this.setState({ phNum: e.target.value });
//   onUserNameChange = (e) => this.setState({ username: e.target.value });
//   onPasswordChange = (e) => this.setState({ password: e.target.value });

//   render() {
//     const { name, email, country, city, phNum, username, password, errors } =
//       this.state;
//     return (
//       <Consumer>
//         {(value) => {
//           const { dispatch } = value;
//           return (
//             <div className="card mb-3">
//               <div className="card-Header" style={{ padding: "20px" }}>
//                 Update User
//               </div>
//               <div className="card-body">
//                 <form onSubmit={this.onSubmit.bind(this, dispatch)}>
//                   <TextInputGroup
//                     label="Name"
//                     placeholder="Enter Name "
//                     value={name}
//                     name="Name"
//                     onChange={this.onNameChange}
//                     error={errors.name}
//                   />

//                   <TextInputGroup
//                     label="Email"
//                     placeholder="Enter Email "
//                     value={email}
//                     name="Email"
//                     onChange={this.onEmailChange}
//                     error={errors.email}
//                   />

//                   <TextInputGroup
//                     label="Country"
//                     placeholder="Enter Country "
//                     value={country}
//                     name="Country"
//                     onChange={this.onCountryChange}
//                     error={errors.country}
//                   />

//                   <TextInputGroup
//                     label="City"
//                     placeholder="Enter City "
//                     value={city}
//                     name="City"
//                     onChange={this.onCityChange}
//                     error={errors.city}
//                   />

//                   <TextInputGroup
//                     label="Phone Number"
//                     placeholder="Enter Phone Number "
//                     value={phNum}
//                     name="PhNum"
//                     onChange={this.onPhNumChange}
//                     error={errors.phNum}
//                   />

//                   <TextInputGroup
//                     label="Username"
//                     placeholder="Enter Username "
//                     value={username}
//                     name="Username"
//                     onChange={this.onUserNameChange}
//                     error={errors.name}
//                   />

//                   <TextInputGroup
//                     label="Password"
//                     placeholder="Enter Password "
//                     value={password}
//                     name="Password"
//                     onChange={this.onPasswordChange}
//                     error={errors.password}
//                   />

//                   <input
//                     type="submit"
//                     value="Update User"
//                     className="btn btn-light btn-black"
//                   />
//                 </form>
//               </div>
//             </div>
//           );
//         }}
//       </Consumer>
//     );
//   }
// }

// export default EditProfile;

// export function ProfilePage() {
//   return (
//     <section style={{ backgroundColor: "#f7faff" }}>
//       <MDBContainer className="py-5">
//         <MDBRow>
//           <MDBCol>
//             <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
//               <MDBBreadcrumbItem>
//                 <a href="#">Home</a>
//               </MDBBreadcrumbItem>
//               <MDBBreadcrumbItem>
//                 <a href="#">User</a>
//               </MDBBreadcrumbItem>
//               <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
//             </MDBBreadcrumb>
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol lg="4">
//             <MDBCard className="mb-4">
//               <MDBCardBody className="text-center">
//                 <MDBCardImage
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
//                   alt="avatar"
//                   className="rounded-circle"
//                   style={{ width: "150px" }}
//                   fluid
//                 />
//                 <p className="text-muted mb-1">Name of the Person</p>
//                 <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
//                 <div className="d-flex justify-content-center mb-2">
//                   <MDBBtn>Upload Profile Picture</MDBBtn>
//                   {/*<MDBBtn outline className="ms-1">User Profile</MDBBtn>*/}
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>

//           <MDBCol lg="8">
//             <MDBCard className="mb-4">
//               <MDBCardBody>
//                 <form>
//                   <div class="form-row">
//                     <div class="form-group col-md-6">
//                       <label for="inputName1">First Name</label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="inputName1"
//                         placeholder="First Name"
//                       />
//                     </div>
//                     <p> </p>
//                     <div class="form-group col-md-6">
//                       <label for="inputName2">Last Name</label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="inputName2"
//                         placeholder="Last Name"
//                       />
//                     </div>
//                     <p> </p>
//                     <div class="form-group col-md-6">
//                       <label for="inputNum">Phone Number</label>
//                       <input
//                         type="tel"
//                         class="form-control"
//                         id="inputNum"
//                         placeholder="Phone Number"
//                       />
//                     </div>
//                   </div>
//                   <p> </p>
//                   <div class="form-group col-md-6">
//                     <label for="inputAddress">Address</label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="inputAddress"
//                       placeholder="1234 Main St"
//                     />
//                   </div>
//                   <p> </p>
//                   <div class="form-group col-md-6">
//                     <label for="inputCountry">Country</label>
//                     <input type="text" class="form-control" id="inputCountry" />
//                   </div>
//                   <p> </p>
//                   <div class="form-row">
//                     <div class="form-group col-md-6">
//                       <label for="inputCity">City</label>
//                       <input type="text" class="form-control" id="inputCity" />
//                     </div>
//                     <p> </p>
//                     <div class="form-group col-md-4">
//                       <label for="inputState">State</label>
//                       <select id="inputState" class="form-control">
//                         <option selected>Choose...</option>
//                         <option>...</option>
//                       </select>
//                     </div>
//                     <p> </p>
//                     <div class="form-group col-md-2">
//                       <label for="inputZip">Zip</label>
//                       <input type="text" class="form-control" id="inputZip" />
//                     </div>
//                   </div>
//                   <p> </p>

//                   <button type="submit" class="btn btn-primary">
//                     Create Profile
//                   </button>
//                 </form>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }

/*class EditProfile extends Component {
  state = {
    name: "",
    email: "",
    country: "",
    city: "",
    phNum: "",
    username: "",
    password: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = res.data;
    this.setState({
      name: user.name,
      email: user.email,
      country: user.country,
      city: user.city,
      phNum: user.phNum,
      username: user.username,
      password: user.password,
    });
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, country, city, phNum, username, password } =
      this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }
    if (country === "") {
      this.setState({ errors: { country: "country is required" } });
      return;
    }
    if (city === "") {
      this.setState({ errors: { city: "City is required" } });
      return;
    }
    if (phNum === "") {
      this.setState({ errors: { phNum: "Phone Number is required" } });
      return;
    }
    if (username === "") {
      this.setState({ errors: { username: "Username is required" } });
      return;
    }
    if (password === "") {
      this.setState({ errors: { password: "Password is required" } });
      return;
    }

    const updUser = {
      name,
      email,
      country,
      city,
      phNum,
      username,
      password,
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updUser
    );
    dispatch({ type: "UPDATE_USER", payload: res.data });

    this.setState({
      name: "",
      email: "",
      country: "",
      city: "",
      phNum: "",
      username: "",
      password: "",
      errors: {},
    });
    //redirection this will redirect us to mainpage '/' after submission
    this.props.history.push("/");
  };

  onNameChange = (e) => this.setState({ name: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });
  onCountryChange = (e) => this.setState({ country: e.target.value });
  onCityChange = (e) => this.setState({ city: e.target.value });
  onPhNumChange = (e) => this.setState({ phNum: e.target.value });
  onUserNameChange = (e) => this.setState({ username: e.target.value });
  onPasswordChange = (e) => this.setState({ password: e.target.value });

  render() {
    const { name, email, country, city, phNum, username, password, errors } =
      this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-Header" style={{ padding: "20px" }}>
                Update User
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    placeholder="Enter Name "
                    value={name}
                    name="Name"
                    onChange={this.onNameChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    placeholder="Enter Email "
                    value={email}
                    name="Email"
                    onChange={this.onEmailChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Country"
                    placeholder="Enter Country "
                    value={country}
                    name="Country"
                    onChange={this.onCountryChange}
                    error={errors.country}
                  />

                  <TextInputGroup
                    label="City"
                    placeholder="Enter City "
                    value={city}
                    name="City"
                    onChange={this.onCityChange}
                    error={errors.city}
                  />

                  <TextInputGroup
                    label="Phone Number"
                    placeholder="Enter Phone Number "
                    value={phNum}
                    name="PhNum"
                    onChange={this.onPhNumChange}
                    error={errors.phNum}
                  />

                  <TextInputGroup
                    label="Username"
                    placeholder="Enter Username "
                    value={username}
                    name="Username"
                    onChange={this.onUserNameChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Password"
                    placeholder="Enter Password "
                    value={password}
                    name="Password"
                    onChange={this.onPasswordChange}
                    error={errors.password}
                  />

                  <input
                    type="submit"
                    value="Update User"
                    className="btn btn-light btn-black"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditProfile;*/
import React, { useState } from "react";
//import '../assests/create-profile.css';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Sidebar from "../components/Sidebar";
import ModalDiv from "../components/ModalDiv";
import Navbar from "../components/Navbar";

const UpdateProfile = () => {
  const [isHover, setIsHover] = useState(false);

  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };
  return (
    <div>
      <Navbar handleEnter={handleEnter} handleLeave={handleLeave} />
      {isHover && (
        <ModalDiv handleEnter={handleEnter} handleLeave={handleLeave} />
      )}
      <div
        className="flex-container"
        style={{ marginTop: "50px", display: "flex" }}
      >
        <Sidebar />
        <div
          className="create"
          style={{ backgroundColor: "#f7faff", margin: "auto" }}
          class="modal-fullscreen"
        >
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                  <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>

                  <MDBBreadcrumbItem>User Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-2">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="profilepic.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1 mt-1">Username</p>
                    
                    <div className="d-flex justify-content-center mb-2">
                      <button type="submit" class="btn btn-primary">
                        Upload Profile Picture
                      </button>
                      {/*<MDBBtn outline className="ms-1">User Profile</MDBBtn>*/}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputName1">First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName1"
                            placeholder="First Name"
                          />
                        </div>
                        <p> </p>
                        <div class="form-group col-md-6">
                          <label for="inputName2">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName2"
                            placeholder="Last Name"
                          />
                        </div>
                        <p> </p>
                      </div>
                      <p> </p>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputNum">Phone Number</label>
                          <input
                            type="tel"
                            class="form-control"
                            id="inputNum"
                            placeholder="phone number"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputAddress">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <p> </p>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputCountry">Country</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCountry"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                      <p> </p>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputCity">City</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCity"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <p> </p>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputZip">Zip</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputZip"
                            placeholder="Zipcode"
                          />
                        </div>
                      </div>

                      <p> </p>

                      <button type="submit" class="btn btn-primary">
                        Create Profile
                      </button>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
