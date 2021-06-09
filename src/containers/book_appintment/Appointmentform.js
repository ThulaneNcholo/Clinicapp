import React from 'react'
import Datepicked from './datepicker/Datepicked'
import Formcomponent from './formcomponent/Formcomponent';
import SelectDoctor from './select_doctor/SelectDoctor';
import {Link} from 'react-router-dom';
import '../book_appintment/appointment.css'

function Appointmentform() {
    return (
        <div>
            <div className="bg-success jumbotron rounded-corner-jumbo-clinics header-title-margin">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header ">
                    <div className="row">
                        <div className="col-2">
                            <Link to={"/clinic-appointments"}>
                                <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                            </Link>
                        </div>
                        <div className="col">
                            <p className="fw-lighter mt-3 fs-5" >Appointment Form</p>
                        </div>
                    </div>
                </div>
            </div>
             <SelectDoctor/>
           <Datepicked/>
           <div className="container">
               <p className="fw-normal mt-3 form-text ">Please note Available times will show after Selected Service and Save Date.</p>
           </div>
           <div className="mx-2 mt-5">
            <div className="container mt-4 pb-3 card shadow">
                <center>
                        <p className="mt-3 fs-5 fw-bolder mb-1">Available times</p>
                        <p className="fw-lighter fs-6">Select Time</p>
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked />
                        <label className="btn btn-warning m-1" htmlFor="option1">08:00am</label>
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked />
                        <label className="btn btn-warning m-1" htmlFor="option1">10:00am</label>
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked />
                        <label className="btn btn-warning m-1" htmlFor="option1">12:00pm</label>
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked />
                        <label className="btn btn-warning m-1" htmlFor="option1">15:00pm</label>
                    </center>
                </div>
            </div>
            <Formcomponent/>
            <div className="appt-form-margin"></div>
        </div>
    )
}

export default Appointmentform;
