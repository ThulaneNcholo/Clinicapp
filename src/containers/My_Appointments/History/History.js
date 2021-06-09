import React from 'react';
import {Link} from 'react-router-dom'

function History() {
    return (
         <div>
            <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                    <div className="row">
                        <div className="col-2">
                            <Link to={"/"}>
                                <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                            </Link>
                        </div>
                        <div className="col">
                            <p className="fw-lighter mt-3 fs-5" >Appointments History</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <center className="container">
                    <div className="row my-appointments-margin">
                        <Link className="col my-appt-underline" to={"/my-appointments"}>
                            <div className=" border p-2 history-color  border-success">Current</div>
                        </Link>
                        <Link className="col my-appt-underline " to={"/appointments/history"}>
                            <div className="col border p-2  bg-success  appt-text">History</div>
                        </Link>
                    </div>
                </center>
            </div>
            <div className="card mt-5 mx-3 shadow rounded">
                <div className="row ">
                    <div className="col-2 bg-success appt-text pt-5 rounded-start">Dec 16 2021</div>
                    <div className="col p-2">
                        <div className="row pt-3">
                            <i className="col-2  pt-1 fas fa-clinic-medical icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>Tshepang HealthCare Clinic</div>
                                <div className="doctor-font"> Tsakane</div>
                                <div className="doctor-font">6558 Ndabezitha Street</div>
                                <div className="doctor-font directions pt-2">{"> "}Directions</div>
                            </div>
                        </div>
                        <div className=" mt-2 "></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-stethoscope icon-color appt-icon"></i>
                            <div className="col pt-1">General Practitioners </div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-user-md icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>Dr Thulane Ncholo</div>
                                <div className="doctor-font"> Doctor</div>
                            </div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 far fa-clock icon-color appt-icon"></i>
                            <div className="col pt-1">08:00am</div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-cash-register icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>R350</div>
                                <div className="doctor-font">Consultation Fee</div>
                            </div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-user-alt icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>Jamal Ncholo</div>
                                <div className="doctor-font">Appointment for</div>
                            </div>
                        </div>
                        <div className=" mt-4"></div>
                        <center className="container">
                                <div className="col p-1 bg-danger m-1 appt-text rounded">Delete</div>
                        </center>
                    </div>
                </div>
            </div>
            <div className="card mt-5 mx-3 shadow rounded">
                <div className="row ">
                    <div className="col-2 bg-success appt-text pt-5 rounded-start">Dec 16 2021</div>
                    <div className="col p-2">
                        <div className="row pt-3">
                            <i className="col-2  pt-1 fas fa-clinic-medical icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>Tshepang HealthCare Clinic</div>
                                <div className="doctor-font"> Tsakane</div>
                                <div className="doctor-font">6558 Ndabezitha Street</div>
                                <div className="doctor-font directions pt-2">{"> "}Directions</div>
                            </div>
                        </div>
                        <div className=" mt-2 "></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-stethoscope icon-color appt-icon"></i>
                            <div className="col pt-1">General Practitioners </div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-user-md icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>Dr Thulane Ncholo</div>
                                <div className="doctor-font"> Doctor</div>
                            </div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 far fa-clock icon-color appt-icon"></i>
                            <div className="col pt-1">08:00am</div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-cash-register icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>R350</div>
                                <div className="doctor-font">Consultation Fee</div>
                            </div>
                        </div>
                        <div className=" mt-2"></div>
                        <div className="row pt-3">
                            <i className="col-2 pt-1 fas fa-user-alt icon-color appt-icon"></i>
                            <div className="col pt-1">
                                <div>Jamal Ncholo</div>
                                <div className="doctor-font">Appointment for</div>
                            </div>
                        </div>
                        <div className=" mt-4"></div>
                        <center className="container">
                                <div className="col p-1 bg-danger m-1 appt-text rounded">Delete</div>
                        </center>
                    </div>
                </div>
            </div>
            <div className="my-appt-spacing"></div>
            {/* <div className="container my-appointments-margin">
                <div className=" mt-5 mx-2  rounded shadow">
                    <p className="bg-success float-end price p-2 appt-text">R350</p>
                    <div className="mx-1">
                        <p className="pt-4 pb-2 header-bold">Thulane Ncholo</p>
                        <div className="row my-3">
                            <div className="col">
                                <div className="greenline bg-success"></div>
                            </div>
                            <div className="col-11 py-3 location-bg">
                                <div className="row pb-2">
                                    <div className="col fw-light">Time:</div>
                                    <div className="col-8 fw-light">0800:am</div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col fw-light">Date:</div>
                                    <div className="col-8 fw-light">2 August 2021</div>
                                </div>
                                <div className="row">
                                    <div className="col fw-light">Location:</div>
                                    <div className="col-8 fw-light">Tsakane</div>
                                </div>
                            </div>
                        </div>
                        <ApptWith/>
                        <div className="row p-3">
                            <div className="col bg-success m-1 p-2 rounded shadow appt-text">Reschedule</div>
                            <div className="col bg-danger m-1 p-2 rounded shadow appt-text">Cancel</div>
                        </div>
                    </div>
                </div>
                <div className="my-appt-spacing"></div>
            </div> */}
        </div>
    )
}

export default History
