import React from 'react';
import '../Family_Members/family_members_new.css';
import {Link} from 'react-router-dom';

function FamilyMembers() {
    return (
        <div>
                <div className="top-container bg-success shadow">
                    <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                        <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                        <div className="row">
                            <div className="col-2">
                                <Link to={"/"}>
                                    <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                                </Link>
                            </div>
                            <div className="col">
                            <p className="fw-lighter mt-3 fs-5" >Add Family Members</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4 pt-3 mx-3 family-margin">
                    <div className="col-10 text-color-family pt-3">
                        Your Familly's Health
                    </div>
                    <Link className="col p-0" to={"/add-family-members"}>
                        <div >
                            <i className="fas fa-plus icon-color fa-1x p-3 plus-sign rounded-pill shadow bg-light"></i>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container mt-4">
                <center>
                    <div className="card shadow" style={{"width":"18rem"}}>
                        <img src="/images/baby.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Jamal Ncholo</h5>
                            {/* <p className="card-text"></p> */}
                            <div className="row">
                                <div className="col family-text-color">Age :</div>
                                <div className="col">1 years</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col family-text-color">Date of Birth :</div>
                                <div className="col">6 August 2020</div>
                            </div>
                            <Link className="removed-underline" to="/family-profile">
                                <p className="mt-3 bg-success p-2 rounded shadow text-color-family">View Profile</p>
                            </Link>
                        </div>
                    </div>
                    <div className="card shadow mt-4" style={{"width":"18rem"}}>
                        <img src="/images/mandela.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Nelson Mandela</h5>
                            {/* <p className="card-text"></p> */}
                            <div className="row">
                                <div className="col family-text-color">Age :</div>
                                <div className="col">95 years</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col family-text-color">Date of Birth :</div>
                                <div className="col">18 July 1918</div>
                            </div>
                            <Link className="removed-underline" to="/family-profile">
                                <p className="mt-3 bg-success p-2 rounded shadow text-color-family">View Profile</p>
                            </Link>
                        </div>
                    </div>
                </center>
            </div>
            <div className="member"></div>
        </div>
    )
}

export default FamilyMembers
