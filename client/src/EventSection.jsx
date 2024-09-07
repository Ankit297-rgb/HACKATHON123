import React, { useState, useEffect } from 'react';
import './Css/EventSection.css';

function EventSection({ user }) {
    const [appliedCompetitions, setAppliedCompetitions] = useState(() => {
        // Load applied competitions from localStorage on initial render
        const storedData = localStorage.getItem(`appliedCompetitions_${user.email}`);
        return storedData ? JSON.parse(storedData) : [];
    });

    const [invitationVisible, setInvitationVisible] = useState(false);
    const [selectedCompetition, setSelectedCompetition] = useState('');

    const initialSeats = {
        'Cultural Dance Competition': 150,
        'Art and Craft Exhibition': 150
    };

    const [availableSeats, setAvailableSeats] = useState(() => {
        // Load available seats from localStorage on initial render
        const storedSeats = localStorage.getItem('availableSeats');
        return storedSeats ? JSON.parse(storedSeats) : initialSeats;
    });

    const competitions = [
        { name: 'Cultural Dance Competition', details: 'A showcase of traditional dance forms from different regions.' },
        { name: 'Art and Craft Exhibition', details: 'Display your artistic skills through various crafts and designs.' }
    ];

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw3eePlyCTnGahjIOmqMw1vAb-QUP8WLSIr6giRhRmGgSzIlKS36_w6PXRpRtxezwCH9g/exec'; // Your Google Apps Script URL

    const handleApply = (competition) => {
        if (availableSeats[competition.name] <= 0) {
            alert('Seat full, try Next time');
            return;
        }

        if (appliedCompetitions.includes(competition.name)) {
            alert('You have already applied for this competition.');
            return;
        }

        const { email } = user;
        const name = email.split('@')[0];

        // Create a FormData object
        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', email);
        formData.append('competition', competition.name);

        // Submit the data using fetch
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    // Update applied competitions and save to localStorage
                    const newAppliedCompetitions = [...appliedCompetitions, competition.name];
                    setAppliedCompetitions(newAppliedCompetitions);
                    localStorage.setItem(`appliedCompetitions_${user.email}`, JSON.stringify(newAppliedCompetitions));

                    // Decrease the seat count globally and save it to localStorage
                    const updatedSeats = {
                        ...availableSeats,
                        [competition.name]: availableSeats[competition.name] - 1
                    };
                    setAvailableSeats(updatedSeats);
                    localStorage.setItem('availableSeats', JSON.stringify(updatedSeats));

                    // Show the invitation card
                    setSelectedCompetition(competition.name);
                    setInvitationVisible(true);
                } else {
                    throw new Error('Failed to submit');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
            });
    };

    // Handle closing the invitation card
    const handleCloseInvitation = () => {
        setInvitationVisible(false);
    };

    useEffect(() => {
        // Update available seats on page load from localStorage
        const storedSeats = localStorage.getItem('availableSeats');
        if (storedSeats) {
            setAvailableSeats(JSON.parse(storedSeats));
        }
    }, []);

    return (
        <div className="event-section">
            <h2>Events</h2>

            {invitationVisible && (
                <div className="invitation-card">
                    <h3>Congratulations, {user.name}!</h3>
                    <p>You have been invited to the {selectedCompetition}.</p>
                    <p>Your email: {user.email}</p>
                    <button className="btn btn-close" onClick={handleCloseInvitation}>Close</button>
                </div>
            )}

            {competitions.map((competition, index) => (
                <div key={index} className="competition-card">
                    <h3>{competition.name}</h3>
                    <p>{competition.details}</p>
                    <p>Collaboration with: ABC School</p>
                    <p>Available Seats: {availableSeats[competition.name]}</p>

                    {appliedCompetitions.includes(competition.name) ? (
                        <button className="btn btn-secondary" onClick={() => {
                            setSelectedCompetition(competition.name);
                            setInvitationVisible(true);
                        }}>Invited</button>
                    ) : (
                        <button className="btn btn-success" onClick={() => handleApply(competition)}>Apply</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default EventSection;
