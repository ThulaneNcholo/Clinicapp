import React from 'react';
import {Link} from 'react-router-dom'
import './imageheader.css';

function ImageHeader() {
    return (
        <div>
            <div className="container background-img bg-success shadow">
                <Link to={"/"}>
                     <img src="/images/whiteback.svg" className="back-button mt-3 shadow rounded" alt="avatarimg" />
                </Link>
              
                <div className="row pt-2">
                    <div className="col mt-4">
                        <img src="/images/avatar.jpg" className="avatar-profile-img img-thumbnail shadow" alt="avatarimg" />
                    </div>
                    <div className="col-6 mt-4 p-0">
                        <h4 className="fw-normal profile-text-color">Thulane Ncholo</h4>
                        <p className="profile-text-color">Patient</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageHeader;
