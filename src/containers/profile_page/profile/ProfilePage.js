import React from 'react';
import ImageHeader from '../image_header/ImageHeader';
import ProfileInfo from '../profile_info/ProfileInfo';
import '../profile/profile.css'

import {Link} from 'react-router-dom'


function ProfilePage() {
    return (
        <div>
            <ImageHeader/>
            <div className="container">
                <Link to={"/edit-profile"}>
                <button type="button" className="btn btn-outline-success edit-btn shadow px-5">Edit Profile</button>
                </Link>
            </div>
            <ProfileInfo/>
             <div className="profile-space"></div>
        </div>
    )
}

export default ProfilePage;
