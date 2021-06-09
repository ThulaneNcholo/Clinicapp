import React from 'react';
import '../medical_notes/medicalnotes.css'
import PostedDoctor from './posted_doctor/PostedDoctor';
import {Link} from 'react-router-dom';

function MedicalNotes() {
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
                            <p className="fw-lighter mt-3 fs-5" >Medical Notes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-0 notes-header-margin">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                        {/* Timeline */}
                        <ul className="timeline">
                            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <i className="fas fa-clinic-medical icon-color fa-2x pb-4"></i>
                            <h2 className="h5 mb-0">Thulane Ncholo</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1" />21 March, 2019</span>
                            <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                            <PostedDoctor/>
                            </li>
                            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <i className="fas fa-clinic-medical icon-color fa-2x pb-4"></i>
                            <h2 className="h5 mb-0">Jamal Ncholo</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1" />21 March, 2019</span>
                            <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                            <PostedDoctor/>
                            </li>
                        </ul>{/* End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalNotes
