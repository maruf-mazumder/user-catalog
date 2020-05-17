import React from 'react';

const Cart = (props) => {
    
    const cart = props.cart;
    console.log(props);
    // const cummulativeIncome =cart.reduce((total,xxx) => total+Math.xxx.salary,0);
    var total = 0;
    for(let i=0;i<cart.length;i++){
            const maal = cart[i].salary;
            total = total+maal;
    }
    return (
        <div>
            <h2>Listed : {cart.length}</h2>
            <h3>Total: {total}</h3>
            <p></p>
        </div>
    );
};

export default Cart;