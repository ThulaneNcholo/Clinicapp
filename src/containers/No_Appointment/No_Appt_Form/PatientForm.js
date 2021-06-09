import React from 'react';
import {Link} from 'react-router-dom';
import '../No_Appt_Form/pateintform.css'

function PatientForm() {
    return (
        <div>
             <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                    <div className="row">
                        <div className="col-2">
                            <Link to={"/pre-form"}>
                                <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                            </Link>
                        </div>
                        <div className="col">
                            <p className="fw-lighter mt-3 fs-5" >Applicaiton Form</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-2 pre-form-header">
            <div className="container card shadow pb-2">
                <p className="mt-4 fs-5 fw-bolder">Application Form</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Female
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Rather not say
                    </label>
                </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contact Details</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mt-4">
                    <p>Allergies</p>
                </div>
                <div className="form-floating mb-4">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height":"90px"}} defaultValue={""} />
                    <label className="fs-6" htmlFor="floatingTextarea2"></label>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Street Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Postal Code</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="mt-4">
                    <p>Reason for visit / Additional Info</p>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height":"100px"}} defaultValue={""} />
                    <label className="fs-6" htmlFor="floatingTextarea2"></label>
                </div>
                <div className="mt-4">
                    <p>First time visit</p>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        No
                    </label>
                </div>
                <Link to={"/my-appointments"}>
                    <button type="submit" className="btn btn-success mt-4">Submit</button>
                </Link>
            </form>
            </div>
        </div>
        <div className="pre-fill-spcae"></div>
    </div>
    )
}

export default PatientForm
