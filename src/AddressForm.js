import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = () => {
    const [phone_number, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = 'https://cj4uea9ja5.execute-api.us-east-1.amazonaws.com/contactcenter311/submit';
        const postData = {
            phone_number: phone_number,
            address: address,
            email: email,
        };
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log('Submitting data:', postData);

        try {
            const response = await axios.post(apiUrl, postData, config);

            // const requestOptions = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(postData)
            // };
            // const response = await fetch(apiUrl, requestOptions);

            console.log('POST request successful! - Response:', response);
            alert('Information submitted successfully!');
        } catch (error) {
            console.error('Error making POST request:', error);
            alert('Error submitting information: ' + error);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>

                <input type="text" placeholder='Phone Number' value={phone_number} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <br />
            <label>
                <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <br />
            <label>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />

            <button type="submit">Submit</button>

        </form>
    );
};

export default AddressForm;
