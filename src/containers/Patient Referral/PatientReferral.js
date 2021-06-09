import React from 'react';
import {Link} from 'react-router-dom';
import '../Patient Referral/patientreferral.css';

function PatientReferral() {
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
                            <p className="fw-lighter mt-3 fs-5" >Patient Referral</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4 pt-3 mx-3 family-margin">
                    <div className="col-10 text-color-family pt-3">
                        Refferals
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row shadow-lg mx-3 p-0 ">
                        <div className="col-4 m-0 pt-5 bg-success referral-text-color ">
                            <center className="mt-5">
                                <i className="fas fa-user-alt referral-icon "></i>
                                <p className="mt-3">Jamal Ncholo</p>
                            </center>
                        </div>
                        <div className="col-8 m-0">
                            <p className="m-0 mt-2 bg-success pt-2 referral-text-color rounded p-1">Referral From:</p>
                            <div className='pt-3'>
                                <p>Dr Thulane Ncholo</p>
                                <p>General Practitioners</p>
                                <p>Tshepang Healthcare Clinic</p>
                                <p>12 May 2021</p>
                            </div>
                            <p className="m-0 bg-success pt-2 referral-text-color rounded p-1">Referral To:</p>
                            <div className='pt-3'>
                                <p>Dr John Smith</p>
                                <p>General Practitioners</p>
                                <p>Springs Hospital</p>
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <i className="fas fa-phone-alt icon-color phar-icon"></i>
                                        <p className="icon-text pt-2">Call</p>
                                    </div>
                                    <div className="col">
                                        <i className="fas fa-envelope-open-text icon-color phar-icon"></i>
                                        <p className="icon-text pt-2">Email</p>
                                    </div>
                                    <div className="col">
                                        <i className="fas fa-map-marker-alt icon-color phar-icon"></i>
                                        <p className="icon-text pt-2">Directions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                    <div className="row shadow-lg mx-3 p-0 ">
                        <div className="col-4 m-0 pt-5 bg-success referral-text-color ">
                            <center className="mt-5">
                                <i className="fas fa-user-alt referral-icon "></i>
                                <p className="mt-3">Jamal Ncholo</p>
                            </center>
                        </div>
                        <div className="col-8 m-0">
                            <p className="m-0 mt-2 bg-success pt-2 referral-text-color rounded p-1">Referral From:</p>
                            <div className='pt-3'>
                                <p>Dr Thulane Ncholo</p>
                                <p>General Practitioners</p>
                                <p>Tshepang Healthcare Clinic</p>
                                <p>12 May 2021</p>
                            </div>
                            <p className="m-0 bg-success pt-2 referral-text-color rounded p-1">Referral To:</p>
                            <div className='pt-3'>
                                <p>Dr John Smith</p>
                                <p>General Practitioners</p>
                                <p>Springs Hospital</p>
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <i className="fas fa-phone-alt icon-color phar-icon"></i>
                                        <p className="icon-text pt-2">Call</p>
                                    </div>
                                    <div className="col">
                                        <i className="fas fa-envelope-open-text icon-color phar-icon"></i>
                                        <p className="icon-text pt-2">Email</p>
                                    </div>
                                    <div className="col">
                                        <i className="fas fa-map-marker-alt icon-color phar-icon"></i>
                                        <p className="icon-text pt-2">Directions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
             <div className="referral-bottom"></div>
        </div>
       
        </div>
    )
}

export default PatientReferral
