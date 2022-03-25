import React from 'react'
import "../styles/Allcommittes.css";
import Committe from "./Committe";

const AllCommittes = () => {

    return (
        <div  className="Container">

            <div className="CommittesContainer">
                <Committe CommitteName = "software" />
                <Committe CommitteName = "Digital" />
                <Committe CommitteName = "Embeded" />
                <Committe CommitteName = "Machine" />
            </div>
        </div>
    );
};

export default AllCommittes