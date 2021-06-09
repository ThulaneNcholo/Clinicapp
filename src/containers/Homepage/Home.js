import React from 'react';
import '../Homepage/homepage.css';
import {Link} from 'react-router-dom';




function Home() {
    return (
        <div>
            <div className="jumbotron text-center bg-success pt-3 pb-1 shadow rounded-corner-jumbo changed-color">
                <h1 className="fw-lighter mb-4" >Welcome Jamal</h1>
                <p className="fw-lighter">Find Clinics</p>
                <p className="fw-lighter" >Book Appointments</p>
                <p className="fw-lighter" >Medical Notes</p>
                <p className="fw-lighter" >E-prescription</p>
                <p className="fw-lighter" >Add Family Members</p>
                <p className="fw-lighter" >Pre-Fill Clinic forms</p>
            </div>
            <div className="container">
                <h1 className="fw-normal m-4">How can we Help you?</h1> 
                {/* find better slogan */}
            </div>
            <div className="container overflow-hidden pb-1">
                <div className="row gx-3 mb-1">
                    <div className="col ">
                        <div className="p-3  bg-light rounded-corner my-1 shadow bg">
                            <Link to={"/clinics"} className="removed-underline">
                            <div className="row">
                               <i className="fas fa-clinic-medical icon-color fa-2x pb-3"></i>
                                    <p className="fw-light fs-6">Clinics</p>
                            </div>
                             </Link>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="p-3  bg-light rounded-corner my-1 shadow">
                            <Link to={"/profile-page"} className="removed-underline">
                            <div className="row">
                               <i className="fas fa-user-edit icon-color fa-2x pb-3"></i>
                                <p className="fw-light fs-6">Profile</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row gx-3 mb-1"> 
                    <div className="col ">
                        <div className="p-3  bg-light rounded-corner my-1 shadow">
                            <Link to={"/medical_notes"} className="removed-underline">
                                <div className="row">
                                    <i className="fas fa-notes-medical icon-color fa-2x pb-3"></i>
                                    <p className="fw-light fs-6">Medical Notes</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="p-3  bg-light rounded-corner my-1 shadow">
                            <Link to={"/my-appointments"} className="removed-underline">
                                <div className="row">
                                    <i className="fas fa-clipboard-list icon-color fa-2x pb-3"></i>
                                    <p className="fw-light fs-6">Appointments</p>
                                </div>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="row gx-3">
                    <div className="col ">
                        <div className="p-3  bg-light rounded-corner my-1 shadow">
                            <Link to={"/family"} className="removed-underline">
                                <div className="row">
                                    <i className="fas fa-users icon-color fa-2x pb-3"></i>
                                    <p className="fw-light fs-6">Family</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="p-3  bg-light rounded-corner my-1 shadow">
                            <Link to={"/medication"} className="removed-underline">
                                <div className="row">
                                    <i className="fas fa-capsules icon-color fa-2x pb-3"></i>
                                    <p className="fw-light fs-6">Medication</p>
                                </div>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="row gx-3 mb-1"> 
                    <div className="col ">
                        <center>
                        <div className="p-3  bg-light rounded-corner my-1 shadow">
                            <Link to={"/pateint-referral"} className="removed-underline">
                                <div className="row">
                                    <i className="fas fa-people-arrows icon-color fa-2x pb-3"></i>
                                    <p className="fw-light fs-6">Patient Referrals</p>
                                </div>
                            </Link>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
            <div className="home-bottom"></div>
        </div>
    )
}

export default Home
