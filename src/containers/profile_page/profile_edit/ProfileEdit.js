import React from 'react';
import {Link} from 'react-router-dom';
import '../profile_edit/editprofile.css';

function ProfileEdit() {
    return (
        <>
        <div className="row bg-success px-2 pb-4 shadow">
                 <Link to={"/profile-page"} className="col-3">
                     <img src="/images/greenbackbtn.svg" className="back-button mt-3 bg-light shadow rounded" alt="avatarimg" />
                </Link>
                <h5 className="col m-0 pt-3 edit-profile-text">Edit Profile</h5>
             </div>
         <div className="mx-2 mt-3">
            <div className="container card shadow pb-2">
            <form>
                <div className="mb-3 pt-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contact Details</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Street Address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Postal Code</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Medical Aid</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <center>
                    <Link to={"/profile-page"} className="col-3">
                         <button type="submit" className="btn btn-success button-size mt-2 shadow">Save </button>
                    </Link>
                </center>
            </form>
            </div>
            <div className="edit-profile-space"></div>
        </div>
    </>
    )
}

export default ProfileEdit
