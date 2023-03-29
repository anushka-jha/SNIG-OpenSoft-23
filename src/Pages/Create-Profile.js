import React from 'react';
import {NavLink} from 'react-router-dom';

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
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#f7faff' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                 <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid /> 
                <p className="text-muted mb-1">Name of the Person</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Upload Profile Picture</MDBBtn>
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
      <input type="text" class="form-control" id="inputName1" placeholder="First Name" />
    </div>
    <p>        </p>
    <div class="form-group col-md-6">
      <label for="inputName2">Last Name</label>
      <input type="text" class="form-control" id="inputName2" placeholder="Last Name" />
    </div>
    <p>        </p>
    <div class="form-group col-md-6">
      <label for="inputNum">Phone Number</label>
      <input type="tel" class="form-control" id="inputNum" placeholder="Phone Number" />
    </div>
  </div>
  <p>          </p>
  <div class="form-group col-md-6">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <p>          </p>
  <div class="form-group col-md-6">
      <label for="inputCountry">Country</label>
      <input type="text" class="form-control" id="inputCountry" />
    </div>
    <p>        </p>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <p>         </p>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <p>         </p>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>
  <p>           </p>
  
  <button type="submit" class="btn btn-primary">Create Profile</button>
</form>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}