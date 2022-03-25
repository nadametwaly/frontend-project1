import React from "react";
import VolunteerCard from "./VolunteerCard";
import "../styles/committe.css";
import { volunteersinfos } from "../utilities/volunteersinfos";

const Committe = (props) => {
  return (
    <div className="CommitteBox">
      <h1>{props.CommitteName}</h1>
      <h2>2022</h2>

      <div className="CommitteVolunteers">
        {volunteersinfos.map((item) => (
          <VolunteerCard
            key={item.volunteerinfo.id}
            image={item.volunteerinfo.image}
            name={item.volunteerinfo.name}
            facebook={item.volunteerinfo.facebook}
            linkedIn={item.volunteerinfo.linkedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default Committe;
