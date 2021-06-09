import React from 'react';
import {Link} from 'react-router-dom';
import '../With Appointments/WithAppointments.css'

function WithAppointments() {
    return (
        <div>
             <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                    <div className="row">
                        <div className="col-2">
                            <Link to={"/clinics"}>
                                <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                            </Link>
                        </div>
                        <div className="col">
                            <p className="fw-lighter mt-3 fs-5" >Appointments</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0 with-appointments-header">
                 <img src="/images/booking.svg" className="resizing " alt="clinicsselect" />
            </div>
            <center>
                <div className="container mt-5">
                    <p className="fw-lighter mb-3 fs-5" >Select your location</p>
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
                        <Link to={"/clinic-details"}className="btn btn-success border-2 shadow">Select Clinic</Link>
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
                        <Link to="#" className="btn btn-success border-2 shadow">View Practice</Link>
                    </div>
                </div>
             </center>
        <div className="with-appt-margin"></div>
    </div>
    )
}

export default WithAppointments
