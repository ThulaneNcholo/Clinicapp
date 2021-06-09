import React from 'react'
import { Link } from 'react-router-dom'
import '../Homepage/homepage.css';
import '../Homepage/clinics.css'

function Clinics() {
    return (
        <div className="container-fluid p-0">
                <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg">
                    <div className="row">
                        <div className="col-3">
                            <Link to={"/"}>
                                <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                            </Link>
                        </div>
                        <div className="col">
                            <h2 className="fw-lighter mt-3 fs-5" >Consultation</h2>
                        </div>
                    </div>
                </div>
                <div className="pt-3 pb-5">
                    <img src="/images/selecthouse4.svg" className="resizing " alt="clinicsselect" />
                </div>
            </div>
            <div>
                <center>
                    <div className="row mt-4 container">
                        <div className="please-note mt-2 mb-3">Select one</div>
                        <Link className="col removed-link-clinics rounded-start bg-success shadow-lg" to={"/clinic-appointments"}>
                            <div className="clinics-text-color-appt p-2">Appointments</div>
                        </Link>
                        <Link className="col bg-warning removed-link-clinics rounded-end shadow-lg" to={"/walk-in's"}>
                            <div className="no-appt p-2">No Appointments</div>
                        </Link>
                    </div>
                    <div className="please-note mt-3">Please note some Clinics only accept walk in only.</div>
                    <div className="please-note mt-2">Walk In's can pre-fill they Application form.</div>
                </center>
            </div>
             <div className=""></div>
        </div>
    )
}

export default Clinics
