import React from 'react';
import '../Bottonav/bottomnav.css';
import {Link} from 'react-router-dom'



function BottomNavBar() {
    
    return (
        <div className="bottomnav">
            <center className="">
                <div className="row  container shadow-lg bg-success my-0 mx-0 p-0 px-2">
                    <div className="col pt-1">
                        <Link to="/" className="decoration-removed">
                            <i className="fas fa-home icon-color icon-size pb-1"></i>
                            <p  className="bottmnav-text m-0">Home</p>
                        </Link>
                    </div>
                    <div className="col pt-1">
                        <Link to="/my-appointments" className="decoration-removed">
                            <i className="fas fa-clipboard-list icon-color icon-size  pb-1"></i>
                            <p  className="bottmnav-text m-0">Appt</p>
                        </Link>
                    </div>
                    <div className="col pt-1">
                        <Link to="/clinics" className="decoration-removed">
                            <i className="fas fa-clinic-medical icon-color icon-size pb-1"></i>
                            <p  className="bottmnav-text m-0">Clinics</p>
                        </Link>
                    </div>
                    <div className="col pt-1 new-margin ">
                        <Link to="/profile-page" className="decoration-removed">
                            <i className="fas fa-user-edit icon-color icon-size  pb-1"></i>
                            <p  className="bottmnav-text m-0 ">Profile</p>
                        </Link>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default BottomNavBar
