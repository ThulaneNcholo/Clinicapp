import React from 'react';
import '../MedicationPage/medication_page.css';
import {Link} from 'react-router-dom'

function Medication() {
    return (
        <div>
            <div className="medication-header shadow">
                <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                        <div className="row">
                            <div className="col-2">
                                <Link to={"/"}>
                                    <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                                </Link>
                            </div>
                            <div className="col">
                                <p className="fw-lighter mt-3 fs-5" ></p>
                            </div>
                        </div>
                    </div>
                </div>
                <center className="pt-4 medication-margin">
                    <h5 className="medication-text">Medication</h5>
                    <div className="row pt-4 mx-3 ">
                    <Link to={"/medication"} className="removed-underline col p-0">
                        <div className=" shadow p-2 meds-text-green rounded bg-light">My Medication</div>
                    </Link>
                    <Link to={"/e-prescription"} className="removed-underline col p-0">
                        <div className=" shadow p-2 medication-text rounded">E-Prescriptions</div>
                    </Link>
                    </div>
                </center>
            </div>
            <div className="container mt-5">
                <h5>Current Medications</h5>
                <div className="current-meds-container mt-4">
                    <div className="shadow">
                        <div className="row">
                            <div className="col-3">
                                <i className="fas fa-pills icon-color fa-2x p-3"></i>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <h6 className="my-4">AceButolol 400mg</h6>
                                        <p className="meds-for m-0 pb-1">medication for:</p>
                                        <p className=" card-text-meds ">Jamal Ncholo</p>
                                        <p className="fw-light pt-3">2 Pills Daily</p>
                                        <p className="fw-light">Eat before dosage</p>
                                        <p className="fw-light">Dr.Thulane Ncholo</p>
                                        <p className="fw-light">Tshepang Healthcare Clinic</p>
                                        <p className="fw-light">19 May 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center>
                        <h5 className=" p-2 bg-success medication-text rounded shadow ">Delete</h5>
                    </center>
                    </div>
                </div>
            </div>
            <div className="space-bottom"></div>
        </div>
    )
}

export default Medication
