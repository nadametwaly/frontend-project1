import React from 'react'
import "../styles/volunteers.css";
import {AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const VolunteerCard = (props) => {
    return (
        
        <div className="volunteer-card">
            <img src={props.image} alt=""></img>
            <div className="text">
                <h1>{props.name}</h1>
                <a href={props.Facebook}><AiFillFacebook className='facebookIcon' /></a>
                <a href={props.linkedIn}><AiFillLinkedin className='linkedinIcon' /></a>
                
            </div>
        </div>
    );
};

export default VolunteerCard;