import React, { useState } from 'react';
import fakedata from '../../fakeData';
import './Catalog.css';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Cart from '../Cart/Cart';

const Catalog = () => {
    const first5 = fakedata.slice(0,10);
    const [persons,setPerson] = useState(first5);

    const[cart,setCart]=useState([]);

    const handleAddIncome = (slice) =>{
        // console.log('Salary Added',slice);
        const newCart = [...cart,slice];
        setCart(newCart);
    } 



    return (
        <div className="Mega-container">
            <div className="profile-container">
                    
                        {
                            persons.map(x => <ProfileInfo UserINFO={x}
                            handleAddIncome={handleAddIncome}></ProfileInfo> )
                        } 
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Catalog;