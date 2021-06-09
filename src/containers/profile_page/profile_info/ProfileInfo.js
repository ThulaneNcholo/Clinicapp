import React from 'react';
import '../profile/profile.css'


// save css and widget of more details page

function ProfileInfo() {
    return (
             <div className="mx-2">
                <div className="container mt-4 card shadow pt-4">
                    <center>
                         <h5 className="mb-4 bg-success py-4 shadow rounded fw-normal profile-text-color">User Information</h5>
                    </center>
                    <div className="row">
                        <h6 className="pt-2 col-4">Name:</h6>
                        <p className="fw-light col mt-1 p-0">Thulane Ncholo</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">DOB:</h6>
                        <p className="fw-light col mt-1 p-0">4 Jan 2021</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">Contact:</h6>
                        <p className="fw-light col mt-1 p-0">023 455 7644</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-3">Email:</h6>
                        <p className="fw-light col mt-1 p-0">thulanejamal@gmail.com</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">Address:</h6>
                        <p className="fw-light col mt-1 p-0">3 Lorem, ipsum dolor.</p>
                    </div>
                    <div className="row">
                        <div className="pt-2 col-4"></div>
                        <p className="fw-light col mt-1 p-0">Brakpan</p>
                    </div>
                    <div className="row">
                        <div className="pt-2 col-4"></div>
                        <p className="fw-light col mt-1 p-0">1332</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                    <div className="row">
                        <h6 className="pt-2 col-4">Medical Aid:</h6>
                        <p className="fw-light col mt-1 p-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error iste ut dolorem, assumenda ex. Aliquid, dicta!</p>
                    </div>
                    <div className="underline-text mb-4"></div>
                </div>
            </div>
    )
}

export default ProfileInfo
