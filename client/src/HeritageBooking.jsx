import React, { useState } from 'react';
import './Css/HeritageBooking.css';

function HeritageBooking({ user, onBookingUpdate }) {
    // Ensure user is not null or undefined before accessing properties
    const userName = user?.name || '';
    const userEmail = user?.email || '';

    const [bookingDetails, setBookingDetails] = useState({
        name: userName,
        email: userEmail,
        placeName: '',
        totalPersons: '',
        visitDate: '',
        additionalInfo: ''
    });
    const [showForm, setShowForm] = useState(false);  // To toggle the form visibility
    const [bookingSubmitted, setBookingSubmitted] = useState(false);
    const [uniqueCode, setUniqueCode] = useState('');

    const agencyName = "Heritage Tours India";  // Example agency name

    const scriptURL = 'https://script.google.com/macros/s/AKfycbza3eiDECHiem4vR_yP62wv-7b5-6C_xCfulazDZyZPaTW8RexCpS-LRrPwjufItcbeSw/exec'; // Replace with your Google Apps Script URL for booking

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const generateUniqueCode = () => {
        return 'BOOK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate the unique code before form submission
        const code = generateUniqueCode();
        setUniqueCode(code);

        // Prepare the form data with the unique code
        const formData = new FormData();
        formData.append('name', bookingDetails.name);
        formData.append('email', bookingDetails.email);
        formData.append('placeName', bookingDetails.placeName);
        formData.append('totalPersons', bookingDetails.totalPersons);
        formData.append('visitDate', bookingDetails.visitDate);
        formData.append('additionalInfo', bookingDetails.additionalInfo);
        formData.append('uniqueCode', code);  // Append the unique code

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    setBookingSubmitted(true);
                    // Save booking details to local storage
                    const userBookings = JSON.parse(localStorage.getItem('userBookings')) || [];
                    userBookings.push({ ...bookingDetails, uniqueCode });
                    localStorage.setItem('userBookings', JSON.stringify(userBookings));
                    // Update profile page if onBookingUpdate callback is provided
                    if (typeof onBookingUpdate === 'function') {
                        onBookingUpdate(userBookings);
                    }
                } else {
                    throw new Error('Failed to submit booking');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
            });
    };

    const handleBookClick = () => {
        setShowForm(true);  // Show the form when Book button is clicked
    };

    const handleCancelClick = () => {
        setShowForm(false);  // Hide the form
        setBookingDetails({
            name: userName,
            email: userEmail,
            placeName: '',
            totalPersons: '',
            visitDate: '',
            additionalInfo: ''
        });  // Reset the form fields
    };

    const handleCloseCard = () => {
        setBookingSubmitted(false);  // Hide the invitation card
        setShowForm(false);  // Reset form visibility
        setBookingDetails({
            name: userName,
            email: userEmail,
            placeName: '',
            totalPersons: '',
            visitDate: '',
            additionalInfo: ''
        });
    };

    return (
        <div className="heritage-booking">
            {!showForm && !bookingSubmitted && (
                <div className="book-tour-section">
                    <h2>Book Your Heritage Tour</h2>
                    <p>Tour Agency: {agencyName}</p>
                    <p>Explore India's Rich Heritage!

Dive into India's vibrant culture and history with our exclusive tours. Experience ancient landmarks like the Taj Mahal, savor regional delicacies, and participate in traditional cooking classes and dance performances. Our tours are designed to offer you a personalized journey with knowledgeable guides and comfortable travel.

Ready for an unforgettable adventure? Click "Book Now" to secure your spot and immerse yourself in India's rich cultural tapestry!</p>
                    <button onClick={handleBookClick}>Book Tour</button>
                </div>
            )}

            {showForm && !bookingSubmitted && (
                <form onSubmit={handleSubmit}>
                    <h2>Book Your Heritage Tour</h2>
                    <p>Tour Agency: {agencyName}</p>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={bookingDetails.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={bookingDetails.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        Tourist Place:
                        <input 
                            type="text" 
                            name="placeName" 
                            value={bookingDetails.placeName} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        Total Persons:
                        <input 
                            type="number" 
                            name="totalPersons" 
                            value={bookingDetails.totalPersons} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        Visit Date:
                        <input 
                            type="date" 
                            name="visitDate" 
                            value={bookingDetails.visitDate} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        Additional Information:
                        <textarea 
                            name="additionalInfo" 
                            value={bookingDetails.additionalInfo} 
                            onChange={handleChange}
                        />
                    </label>

                    <div className="form-buttons">
                        <button type="submit">Submit Booking</button>
                        <button type="button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            )}

            {bookingSubmitted && (
                <div className="invitation-card1">
                    <button className="close-card1" onClick={handleCloseCard}>X</button>
                    <h3>Congratulations, {bookingDetails.name}!</h3>
                    <p>Your booking for the heritage tour to {bookingDetails.placeName} has been confirmed.</p>
                    <p><strong>Your Unique Booking Code:</strong> {uniqueCode}</p>
                    <p><strong>Your email:</strong> {bookingDetails.email}</p>
                    <p>Total Persons: {bookingDetails.totalPersons}</p>
                    <p>Visit Date: {bookingDetails.visitDate}</p>
                    <p>We are excited to see you at the event!</p>
                </div>
            )}
        </div>
    );
}

export default HeritageBooking;