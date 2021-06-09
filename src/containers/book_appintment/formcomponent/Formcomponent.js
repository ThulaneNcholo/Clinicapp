import React from 'react';
import {Link} from 'react-router-dom';

function Formcomponent() {
    return (
        <div className="mx-2 mt-5">
            <div className="container card shadow pb-2">
                <p className="mt-4 fs-5 fw-bolder">Application Form</p>
            <form>
                <div className="">
                    <p className="mb-2">Appointment For?</p>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Myself
                    </label>
                </div>
                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Someone else
                    </label>
                </div>
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
    )
}

export default Formcomponent
