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
            <h1>No of Icons:{props.first5.length}</h1>
            <h2>Listed Icons: {cart.length}</h2>
            <h3>Cumulative Salary : ${total}</h3>
        </div>
    );
};

export default Cart;