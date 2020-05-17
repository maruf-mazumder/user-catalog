import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './ProfileInfo.css'
const ProfileInfo = (props) => {
    // console.log(props.UserINFO.name);  
    const {photo,name,salary,id,phone,} = props.UserINFO;
    // console.log(props) ;
    return (
        <div className="packet-skeleton">
            <div className="pic">
                    <img src={photo} alt=""/>            
            </div>
            <div>
                   <h2>Name: {name} </h2>
                   <br/>
                   <h3>ID NO:{id}</h3>
                   <p><small>Phone: {phone}</small></p>
                   <p>Income: ${salary}</p>
                   <button className="main-button" onClick={ ()=> props.handleAddIncome(props.UserINFO)}  > <FontAwesomeIcon icon={faPlus} /> Add to Cart</button>
            </div>
                
        </div>
    );
};

export default ProfileInfo;