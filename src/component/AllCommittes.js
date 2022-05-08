import React from 'react'
import "../styles/Allcommittes.css";
import Committe from "./Committe";
import {useAxiosGet} from "../Hooks/httpReq";
import Loader from './Loader';

const AllCommittes = () => {
    const url = 'https://ieeeswalexsc.herokuapp.com/api/volunteers'
    let content = null
    let Result  = useAxiosGet(url)

    if (Result.error){
        content = <p>There was an error</p>
    }

    if (Result.Loading){
        content = <Loader />
    }

    if (Result.data){
        content = 
        
        <div className="AllCommities">
            <h1 className='heading'>our volunteers</h1>
            <div className="CommitteContainer">
                {Result.data.data.map((EachCommitte, key) =>
                    <Committe 
                        CommitteName = {EachCommitte.attributes.volunteerExperience}
                        image   = {EachCommitte.attributes.image}
                        name    = {EachCommitte.attributes.name}
                        contact = {EachCommitte.attributes.contact}
                        key     = {EachCommitte.id}
                    />
                )}
            </div>
        </div>
    }

    return (
        <div  className="Container">
            {content}
        </div>
    );
};

export default AllCommittes