import React, { useState } from 'react';
import fakedata from '../../fakeData';
import './Catalog.css';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const Catalog = () => {
    const first5 = fakedata.slice(0,10);
    const [persons,setPerson] = useState(first5);
    return (
        <div className="Mega-container">
            <div className="profile-container">
                    
                        {
                            persons.map(x => <ProfileInfo UserINFO={persons}></ProfileInfo> )
                        } 
            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            </div>
            
        </div>
    );
};

export default Catalog;