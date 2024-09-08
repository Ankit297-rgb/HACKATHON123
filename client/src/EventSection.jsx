import React, { useState, useEffect } from 'react';
import './Css/EventSection.css';

function EventSection({ user }) {
    const [appliedCompetitions, setAppliedCompetitions] = useState(() => {
        const storedData = localStorage.getItem(`appliedCompetitions_${user.email}`);
        return storedData ? JSON.parse(storedData) : [];
    });

    const [invitationVisible, setInvitationVisible] = useState(false);
    const [selectedCompetition, setSelectedCompetition] = useState('');
    const [uniqueCode, setUniqueCode] = useState('');

    const initialSeats = {
        'Cultural Dance Competition': 150,
        'Art and Craft Exhibition': 150
    };

    const [availableSeats, setAvailableSeats] = useState(() => {
        const storedSeats = localStorage.getItem('availableSeats');
        return storedSeats ? JSON.parse(storedSeats) : initialSeats;
    });

    const competitions = [
        { name: 'Cultural Dance Competition', details: 'A showcase of traditional dance forms from different regions.' },
        { name: 'Art and Craft Exhibition', details: 'Display your artistic skills through various crafts and designs.' }
    ];

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw3eePlyCTnGahjIOmqMw1vAb-QUP8WLSIr6giRhRmGgSzIlKS36_w6PXRpRtxezwCH9g/exec';

    const generateUniqueCode = () => {
        return Math.random().toString(36).substr(2, 8).toUpperCase();
    };

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

        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', email);
        formData.append('competition', competition.name);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    const newAppliedCompetitions = [...appliedCompetitions, competition.name];
                    setAppliedCompetitions(newAppliedCompetitions);
                    localStorage.setItem(`appliedCompetitions_${user.email}`, JSON.stringify(newAppliedCompetitions));

                    const updatedSeats = {
                        ...availableSeats,
                        [competition.name]: availableSeats[competition.name] - 1
                    };
                    setAvailableSeats(updatedSeats);
                    localStorage.setItem('availableSeats', JSON.stringify(updatedSeats));

                    const code = generateUniqueCode();
                    setUniqueCode(code);
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

    const handleCloseInvitation = () => {
        setInvitationVisible(false);
    };

    useEffect(() => {
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
                    <p>We are thrilled to inform you that your application for {selectedCompetition} has been successfully approved.</p>
                    <p>Your passion and dedication have earned you a spot among the best, and we can’t wait to see you shine. This competition is an incredible opportunity to showcase your talents, connect with like-minded individuals, and push the boundaries of what you can achieve.
                    <br></br><h5>--------Team Param-Sanskrit</h5>
                    </p>
                    <p><strong>Your Unique Code:</strong> {uniqueCode}</p>
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
