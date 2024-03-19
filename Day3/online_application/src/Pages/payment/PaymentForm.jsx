import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';

function PaymentForm() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCVV] = useState('');
    const [name, setName] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission, e.g., send the data to your server for processing
        console.log('Form submitted!');
        console.log('Card Number:', cardNumber);
        console.log('Expiration:', expiry);
        console.log('CVV:', cvv);
        console.log('Name:', name);
        console.log('Billing Address:', billingAddress);
        
        // Set submitted to true
        setSubmitted(true);
    };

    // If form is submitted, redirect to the confirm page
    if (submitted) {
        return <Navigate to="/confirm" />;
    }

    return (
        <>
        <He/>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
             <h2 style={{ textAlign: 'center' }}>Payment Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="card-number">Card Number:</label>
                <input type="text" id="card-number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px', boxSizing: 'border-box' }} />
                <br />
                <label htmlFor="expiry">Expiration Date (MM/YYYY):</label>
                <input type="text" id="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} pattern="\d{2}/\d{4}" placeholder="MM/YYYY" required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px', boxSizing: 'border-box' }} />
                <br />
                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" value={cvv} onChange={(e) => setCVV(e.target.value)} pattern="\d{3,4}" maxLength="4" required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px', boxSizing: 'border-box' }} />
                <br />
                <label htmlFor="name">Cardholder's Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px', boxSizing: 'border-box' }} />
                <br />
                <label htmlFor="billing-address">Billing Address:</label>
                <textarea id="billing-address" value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px', boxSizing: 'border-box' }}></textarea>
                <br />
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Pay Now</button>
            </form>
        </div>
        <Footer/>
        </>
    );
}

export default PaymentForm;
