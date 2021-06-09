import React from 'react';
import {Link} from 'react-router-dom';
import '../Add Family Members/add.css'

function Add() {
    return (
                <div>
                    <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                        <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                        <div className="row">
                            <div className="col-2">
                                <Link to={"/family"}>
                                    <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                                </Link>
                            </div>
                            <div className="col">
                            <p className="fw-lighter mt-3 fs-5" >Family Member</p>
                        </div>
                        </div>
                    </div>
                </div>
            <div className="mx-2 mt-3">
            <p className="mt-4 fs-5 fw-bolder container mb-4">Family Member</p>
            <div className="container card shadow pb-2">
            <form>
                <div className="mb-3 pt-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contact Details</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                    <p className="guardian-style m-0">Guardian/Patient</p>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <p className="guardian-style m-0">Guardian/Patient</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Street Address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Postal Code</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Medical Aid</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <Link to={'/family-profile'}>
                    <button type="submit" className="btn btn-warning mt-4 px-5 shadow">Save</button>
                </Link>
            </form>
            </div>
            <div className="add-fam-spacing"></div>
        </div>
        </div>
    )
}

export default Add;
