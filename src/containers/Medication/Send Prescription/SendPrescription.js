import React from 'react';
import {Link} from 'react-router-dom';
import '../Send Prescription/sendprescription.css';

function SendPrescription() {
    return (
        <div>
            <div className="header-pres">
                <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                        <div className="row">
                            <div className="col-2">
                                <Link to={"/view-prescription"}>
                                    <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                                </Link>
                            </div>
                            <div className="col">
                                <p className="fw-lighter mt-3 fs-5" >E-Prescription</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container send-margin">
                    <center>
                        <div className="pdf-text-color pt-5">
                            <p className="m-0 pb-1"> Select your location.</p>
                            <p className="m-0 pb-1">select your prefered phamercy in that area.</p>
                            <p className="m-0">Send your prescription.</p>
                        </div>
                    </center>
                </div>
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
            <div className="">
                <div className="row mx-2 shadow rounded py-2 mb-5">
                    <p className="bg-warning p-2">Tsakane</p>
                    <div className="col">
                         <img src="/images/phar2.svg" className="phar-image" alt="avatarimg" />
                    </div>
                    <div className="col">
                        <p className="mb-2">Tsakane Pharmacy</p>
                        <p className="m-0 phar-text">12 Ndabezitha Street</p>
                        <p className="m-0 phar-text">1550</p>
                        <p className="mt-2 mb-1">Working Hours:</p>
                        <div className="row">
                            <div className="col phar-text">08:00am</div>
                            <div className="col phar-text">18:00pm</div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <i className="fas fa-phone-alt icon-color phar-icon"></i>
                            </div>
                            <div className="col">
                                <i className="fas fa-envelope-open-text icon-color phar-icon"></i>
                            </div>
                            <div className="col">
                                <i className="fas fa-map-marker-alt icon-color phar-icon"></i>
                            </div>
                        </div>
                        <Link to={"/e-prescription"} className="decoration-pres">
                            <p className="p-2 bg-success pres-text-color rounded shadow-lg mt-3">Send Prescription</p>
                        </Link>
                    </div>
                </div>
                <div className="row mx-2 shadow-lg rounded py-2">
                    <p className="bg-warning p-2">Tsakane</p>
                    <div className="col">
                         <img src="/images/phar2.svg" className="phar-image" alt="avatarimg" />
                    </div>
                    <div className="col">
                        <p className="mb-2">Tsakane Pharmacy</p>
                        <p className="m-0 phar-text">12 Ndabezitha Street</p>
                        <p className="m-0 phar-text">1550</p>
                        <p className="mt-2 mb-1">Working Hours:</p>
                        <div className="row">
                            <div className="col phar-text">08:00am</div>
                            <div className="col phar-text">18:00pm</div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <i className="fas fa-phone-alt icon-color phar-icon"></i>
                            </div>
                            <div className="col">
                                <i className="fas fa-envelope-open-text icon-color phar-icon"></i>
                            </div>
                            <div className="col">
                                <i className="fas fa-map-marker-alt icon-color phar-icon"></i>
                            </div>
                        </div>
                        <Link to={"/e-prescription"} className="decoration-pres">
                            <p className="p-2 bg-success pres-text-color rounded shadow-lg mt-3">Send Prescription</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div className="phar-bottom"></div>
        </div>
    )
}

export default SendPrescription
