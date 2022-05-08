import React from "react";
import VolunteerCard from "./VolunteerCard";
import "../styles/committe.css";

const Committe = (props) => {
  return (
    <div className="CommitteBox">
      <h1>{props.CommitteName}</h1>
      <h2>2022</h2>
      
      <div className="CommitteVolunteers">
        <VolunteerCard
            key     = {props.id}
            image   = {props.image}
            name    = {props.name}
            contact = {props.contact}
          />
        {/* {props.Committe.map((item) => (
          <VolunteerCard
            key     = {item.id}
            image   = {item.image}
            name    = {item.name}
            contact = {item.contact}
            facebook={item.facebook}
            linkedIn={item.linkedIn}
          />
        ))}*/}
      </div> 
    </div>
    
  );
};

export default Committe;