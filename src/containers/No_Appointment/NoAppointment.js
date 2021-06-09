import React from 'react';
import {Link} from 'react-router-dom';
import '../No_Appointment/no_appointment.css';

function NoAppointment() {
    return (
        <div>
            <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                    <div className="row">
                        <div className="col-3">
                            <Link to={"/clinics"}>
                                <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                            </Link>
                        </div>
                        <div className="col">
                            <h2 className="fw-lighter mt-3 fs-5" >No Appointments</h2>
                        </div>
                    </div>
                </div>
                <div className="pt-3 pb-5 header-margin-no-apt">
                    <img src="/images/walkin2.svg" className="resizing " alt="clinicsselect" />
                </div>
            </div>
            <center className="container m-o p-0">
                <div className="mt-4 p-0">
                    Pre-fill your Application form
                </div>
                <div className="">
                    Before going to the clinic.
                </div>
                <div className="please-note mt-3">Select your Location,Pick a Clinic and start Pre-filling your Application Form.</div>
            </center>
            <center>
                <div className="container mt-5">
                    <p className="fw-lighter mb-3 fs-4" >Select location</p>
                    <div className="dropdown mb-5">
                        <button className="btn btn-success dropdown-toggle px-5" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Locations
                        </button>
                        <ul className="dropdown-menu dropdown-menu-success" aria-labelledby="dropdownMenuButton2">
                            <li><Link className="dropdown-item active" to="#">Tsakane</Link></li>
                            <li><Link className="dropdown-item" to="#">Kwa-thema</Link></li>
                            <li><Link className="dropdown-item" to="#">Springs</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </div>
                </div>
            </center>
            <center>
                <div className="card mt-3 shadow" style={{"width":"18rem"}}>
                    <img src="/images/clinic1.jpg" className="card-img-top" alt="clinics" />
                    <div className="card-body">
                        <p className="card-title fw-normal fs-5">Chinook Reginal Clinic</p>
                        <p className="card-text fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>Working hours</p>
                        <p>08:00 am -18:00 pm</p>
                        <Link to={"/pre-form"}className="btn btn-success border-2 shadow">Select Clinic</Link>
                    </div>
                </div>
             </center>

             <div className="No-appt-spacing"></div>
        </div>
    )
}

export default NoAppointment
