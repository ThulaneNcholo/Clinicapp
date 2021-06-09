import React from 'react';
import {Link} from 'react-router-dom';
import '../View family Member/viewfamily.css'

function ViewFamilyProfile() {
    return (
        <div>
            <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                        <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                        <div className="row">
                            <div className="col-2">
                                <Link to={"/family"}>
                                    <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                                </Link>
                            </div>
                            <div className="col">
                            <p className="fw-light mt-3 fs-5" >Family Profile</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container background-img bg-success shadow">
                <Link to={"/"}>
                     <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                </Link>
              
                    <div className="row pt-2">
                        <div className="col mt-4">
                            <img src="/images/baby.jpg" className="avatar-profile-img img-thumbnail shadow" alt="avatarimg" />
                        </div>
                        <div className="col-6 mt-4 p-0">
                            <h4 className="fw-normal profile-text-color">Jamal Ncholo</h4>
                            <p className="profile-text-color">Patient</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link to={"/add-family-members"}>
                    <button type="button" className="btn btn-outline-success edit-btn shadow px-5">Edit Profile</button>
                    </Link>
                </div>
                 <div className="container">
                <div className="container mt-4 card shadow pt-4">
                    <center>
                         <h5 className="mb-4 bg-success py-4 shadow rounded fw-normal profile-text-color">Family Information</h5>
                    </center>
                    <div className="row">
                        <h6 className="pt-2 col-4">Name:</h6>
                        <p className="fw-light col mt-1 p-0">Jamal Ncholo</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">DOB:</h6>
                        <p className="fw-light col mt-1 p-0">4 Jan 2021</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">Contact:</h6>
                        <p className="fw-light col mt-1 p-0">023 455 7644</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-3">Email:</h6>
                        <p className="fw-light col mt-1 p-0">thulanejamal@gmail.com</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">Address:</h6>
                        <p className="fw-light col mt-1 p-0">3 Lorem, ipsum dolor.</p>
                    </div>
                    <div className="row">
                        <div className="pt-2 col-4"></div>
                        <p className="fw-light col mt-1 p-0">Brakpan</p>
                    </div>
                    <div className="row">
                        <div className="pt-2 col-4"></div>
                        <p className="fw-light col mt-1 p-0">1332</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">Medical Aid:</h6>
                        <p className="fw-light col mt-1 p-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error iste ut dolorem, assumenda ex. Aliquid, dicta!</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                </div>
            </div>
            <div className="view-fam-spacing"></div>
        </div>
    )
}

export default ViewFamilyProfile
