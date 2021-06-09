import React from 'react';
import '../View Prescription/view_prescription.css'
import {Link} from 'react-router-dom';

function ViewPrescription() {
    return (
        <div>
            <div className="header-pres">
                <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                        <div className="row">
                            <div className="col-2">
                                <Link to={"/e-prescription"}>
                                    <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                                </Link>
                            </div>
                            <div className="col">
                                <p className="fw-lighter mt-3 fs-5" >E-Prescription</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-5 e-prescription-margin-top">
                    <div className="pdf-text-color">
                        Patients can send they prescriptions to any of the available phamercies 
                    </div>
                </div>
            </div>
            <div className="mx-5 mt-5">
                <center>
                    <Link className="view-deco-none" to={"/send-prescription"}>
                        <p className="bg-warning p-1 rounded shadow m-1 send-phamercy">Send</p>
                    </Link>
                    <p className="send-note">Send to a pharmercy</p>
                </center>
            </div>
            <div className="mt-5 container">
                <div className="shadow card container py-3">
                    <h5 className="bg-success shadow p-2 prescription-color">Rivaroxaban</h5>
                    <div className="row my-3 ">
                        <div className="col">
                            <p className="font-size-pres">Date issued:</p>
                        </div>
                        <div className="col">
                            <p>Tuesday 25 May 2021</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <p className="font-size-pres">Refill:</p>
                        </div>
                        <div className="col">
                            <p>2 times</p>
                        </div>
                    </div>
                    <div className="row prescription-color">
                        <div className="col p-1 bg-success rounded m-1 shadow">
                            <center>
                                <p className="m-0">2.5mg</p>
                                <p className="m-0">Daily Dosage</p>
                            </center>
                        </div>
                        <div className="col p-1 bg-success rounded m-1 shadow">
                            <center>
                                <p className="m-0">2 x Pills</p>
                                <p className="m-0">Each Day</p>
                            </center>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <p className="normal-text">Instructions:</p>
                        </div>
                        <div className="col">
                            <p>After Meal</p>
                        </div>
                    </div>
                    <h6 className="mt-4 headings-bg p-1 mb-4">Pateint-information</h6>
                    <div className="row mb-2">
                        <div className="col normal-text">Name:</div>
                        <div className="col">Thulane Ncholo</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col normal-text">Sex:</div>
                        <div className="col">Male</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col normal-text">age:</div>
                        <div className="col">12</div>
                    </div>
                    <div className="row  mb-2">
                        <div className="col normal-text">Contact:</div>
                        <div className="col">084 74747 74747</div>
                    </div>
                    <div className="mb-1 normal-text">Email:</div>
                    <div>thulane2@gmail.com</div>
                     <h6 className="mt-4 headings-bg p-1">Address</h6>
                     <p>3553 suur street</p>
                     <p>Dalpark</p>
                     <p>Brakpan</p>
                     <p>1550</p>

                     <h6 className="mt-4 headings-bg p-1">physician</h6>
                     <p>Dr Jamal Ncholo</p>
                     <p>General Practitioners</p>
                     <p className="mt-3 pb-1 m-0">Tshepang HealthCare Clinic</p>
                     <p className="pb-1 m-0">6558 Ndabezitha Street</p>
                     <p className="pb-1 m-0">Tsakane</p>
                     <p className="pb-1 m-0">Brakpan</p>
                     <p className="pb-1 m-0">1550</p>
                     <p className="mt-3">083 4746 7474</p>
                     <p>011 753 6457</p>
                     <p>tshepang55@gamail.com</p>
                </div>
            </div>
            <div className="pres-buttom"></div>
        </div>
    )
}

export default ViewPrescription
