/* eslint-disable no-unused-vars */
import React from 'react';
import '../payment/conform.css';
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';
function Confirm() {
  return (
    <>
    <He/>
    <div className='confirm-container1'>
      <h1>Your order is confirmed</h1>
      <p>Thank you for your purchase!</p>
    </div>
    <Footer/>
    </>
  );
}

export default Confirm;