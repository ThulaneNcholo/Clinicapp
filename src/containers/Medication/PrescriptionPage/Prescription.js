import React from 'react';
import {Link} from 'react-router-dom';
import '../PrescriptionPage/prescrption.css'


function Prescription() {
    return (
        <div>
            <div className="medication-header shadow">
                <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                        <div className="row">
                            <div className="col-2">
                                <Link to={"/medication"}>
                                    <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                                </Link>
                            </div>
                            <div className="col">
                                <p className="fw-lighter mt-3 fs-5" ></p>
                            </div>
                        </div>
                    </div>
                </div>
                <center className="pt-4 prescription-margin">
                    <h5 className="medication-text">E-Prescriptions</h5>
                    <div className="row pt-4 mx-3 ">
                    <Link to={"/medication"} className="removed-underline col p-0">
                        <div className="shadow p-2 medication-text rounded ">My Medication</div>
                    </Link>
                    <Link to={"/e-prescription"} className="removed-underline col p-0">
                        <div className="shadow p-2 meds-text-green rounded bg-light ">E-Prescriptions</div>
                    </Link>
                    </div>
                </center>
            </div>
            <div className="container mt-5">
                <h5 className="mb-4 ">Current E-Prescriptions</h5>
                <div>
                    <div className="p-2 rounded shadow-lg mt-4">
                        <div className="row">
                            <div className="col-7">
                                <div className="row">
                                    <div className="heading-text">Diazepam</div>
                                    <div className="date-style">4 Jan 2020</div>
                                     <div className="date-style">Thulane Ncholo</div>
                                </div>
                            </div>
                            <Link to={"/view-prescription"} className="col-4 m-1 p-0 removed-underline">
                                <center className=" p-2 bg-success rounded shadow m-0">
                                    <div className="heading-text pres-text-color ">View</div>
                                </center>
                            </Link>
                        </div>
                    </div>
                    <div className="p-2 rounded shadow-lg mt-4">
                        <div className="row">
                            <div className="col-7">
                                <div className="row">
                                    <div className="heading-text">Diazepam</div>
                                    <div className="date-style">4 Jan 2020</div>
                                    <div className="date-style">Jamal Ncholo</div>
                                </div>
                            </div>
                            <Link to={"/view-prescription"} className="col-4 m-1 p-0 removed-underline">
                                <center className=" p-2 bg-success rounded shadow m-0">
                                    <div className="heading-text pres-text-color ">View</div>
                                </center>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="precription-sapce-bottom"></div>
        </div>
    )
}

export default Prescription
