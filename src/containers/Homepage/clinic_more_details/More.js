import React from 'react'
import '../clinic_more_details/more_details.css';
import {Link} from 'react-router-dom'

function More() {
    return (
        <div>
             <div className="bg-success jumbotron rounded-corner-jumbo-clinics">
                    <div className="clinic-title bg-success container clinic-title-text shadow-lg no-appt-header">
                    <div className="row">
                        <div className="col-2">
                            <Link to={"/clinic-details"}>
                                <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                            </Link>
                        </div>
                        <div className="col">
                            <p className="fw-light mt-3 fs-5" >Chinook Reginal Clinic</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <img src="/images/clinic1.jpg" className="resizing-details shadow image-border" alt="clinicsselect" />
            </div>
            <div className="bg-success rounded mx-5 my-4 shadow-lg">
                <center>
                    <Link className="remove-link-underline" to={"/appointment-form"}>
                    <h5 className="p-2 fw-light text-color-clinics mt-4">Book Appointment</h5>
                    </Link>
                </center>
            </div>
            <center>
            <div>
                <h6 className="pt-3 fw-light">Consultation fee R400 Adult</h6>
                <h6 className="pt-3 fw-light">Consultation fee R250 Child</h6>
            </div>
            </center>
            <div>
                <div className="container mt-5">
                    <h5 className="fw-bolder ">About Us</h5>
                    <p className="fw-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quam commodi numquam facilis, ad eos distinctio earum unde qui minima?</p>
                    <h5 className="fw-bolder mt-5 headings-color">Services</h5>
                    <p className="fw-light mb-2">General practitioner</p>
                    <p className="fw-light mb-2">Physical therapy</p>
                    <p className="fw-light mb-2">Neurology</p>
                    <p className="fw-light mb-2">Gynecology and Obstetrics</p>
                    <p className="fw-light mb-2">Orthopedics</p>
                    <h5 className="fw-bolder mt-5 headings-color">Working Hours</h5>
                    <h6 className="pt-2">Monday - Friday</h6>
                    <p className="fw-light mb-2">08:00am - 18:30pm</p>
                    <h6 className="pt-3">Saturday</h6>
                    <p className="fw-light mb-2">08:00am - 15:00pm</p>
                    <h6 className="pt-3">Sunday</h6>
                    <p className="fw-light mb-2">Closed</p>
                    <h6 className="pt-3">Public Holidays</h6>
                    <p className="fw-light mb-2">Open</p>
                </div>
            </div>
            <div className="bg-success py-5 px-3 clinic-doctors-design">
                <h5 className="fw-bolder text-color-clinics-dr ">Clinic Doctors</h5>
                <div className="container px-3 bg-light rounded mt-3 shadow">
                    <div className="row m-0 ">
                        <div className="col-3 ">
                          <i className="fas fa-user-md icon-color fa-3x pb-3 pt-3"></i>
                        </div>
                        <div className="col-9">
                            <center>
                                <div className="mt-3"></div>
                            <p className="m-0">Dr Thulane Ncholo</p>
                            <p className="m-0">General practitioner</p>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="container px-3 rounded bg-light mt-3 shadow">
                    <div className="row m-0 ">
                        <div className="col-3 ">
                          <i className="fas fa-user-md icon-color fa-3x pb-3 pt-3"></i>
                        </div>
                        <div className="col-9">
                            <center>
                                <div className="mt-3"></div>
                            <p className="m-0">Dr Thulane Ncholo</p>
                            <p className="m-0">General practitioner</p>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="container px-3 rounded bg-light mt-3 shadow">
                    <div className="row m-0 ">
                        <div className="col-3 ">
                          <i className="fas fa-user-md icon-color fa-3x pb-3 pt-3"></i>
                        </div>
                        <div className="col-9">
                            <center>
                                <div className="mt-3"></div>
                            <p className="m-0">Dr Thulane Ncholo</p>
                            <p className="m-0">General practitioner</p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default More
