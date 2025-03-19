import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ReactHtmlParser from 'react-html-parser';
import { jsPDF } from 'jspdf'; // For generating PDF
import './Css/CourseMaterial.css';

const CourseMaterial = ({ user }) => { // Added user prop to get user information
    const { courseName } = useParams();
    const [step, setStep] = useState(1);
    const [isNotesCompleted, setIsNotesCompleted] = useState(false);
    const [isVideoCompleted, setIsVideoCompleted] = useState(false);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [userName, setUserName] = useState('');
    const [isCourseCompleted, setIsCourseCompleted] = useState(false);
    const [isCertificateGenerated, setIsCertificateGenerated] = useState(false);

    const userEmail = user?.email; // Assuming user has an email property

    // Static course materials
    const courseMaterials = {
        'Indian Classical Music': {
            videoUrl: 'https://www.example.com/classical-music-video.mp4',
            notes: `
                <h2>Indian Classical Music</h2>
                <h3>Introduction</h3>
                <p>Indian Classical Music is a tradition that spans over thousands of years. It has two main traditions: Hindustani (North Indian) and Carnatic (South Indian).</p>
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Raga</strong>: A melodic framework for improvisation.</li>
                    <li><strong>Tal</strong>: Rhythmic cycles.</li>
                    <li><strong>Alap</strong>: The introduction phase of a raga.</li>
                </ul>
                <h3>Important Instruments</h3>
                <p>The Tabla is a common percussion instrument used in Hindustani music.</p>
                <h3>Popular Composers</h3>
                <p>Famous composers include Ravi Shankar and Zakir Hussain.</p>
            `,
            quiz: [
                
                { question: "What is the main percussion instrument used in Hindustani music?", answer: "Tabla" },
                { question: "What is the introductory phase of a raga called?", answer: "Alap" },
                
            ],
        },
        'Indian Classical Dance': {
            videoUrl: 'https://www.example.com/classical-dance-video.mp4',
            notes: `
                <h2>Indian Classical Dance</h2>
                <h3>Overview</h3>
                <p>Indian Classical Dance forms are known for their elaborate gestures, intricate footwork, and storytelling through movement.</p>
                <h3>Major Dance Forms</h3>
                <ul>
                    <li><strong>Bharatanatyam</strong>: Originating from Tamil Nadu, characterized by its graceful movements.</li>
                    <li><strong>Odissi</strong>: Known for its fluid movements and sculpturesque poses.</li>
                </ul>
                <h3>Notable Dancers</h3>
                <p>Rukmini Devi Arundale is a renowned figure in Bharatanatyam.</p>
                <h3>Performance Elements</h3>
                <p>Performances include expressions (abhinaya), rhythm (tala), and music (ragas).</p>
            `,
            quiz: [
                { question: "Which dance form is associated with Tamil Nadu?", answer: "Bharatanatyam" },
                { question: "What is a significant characteristic of Odissi dance?", answer: "Fluid movements and sculpturesque poses" },
                { question: "Who is a famous Bharatanatyam dancer?", answer: "Rukmini Devi Arundale" },
                { question: "What are the main elements of Indian Classical Dance performances?", answer: "Expressions, rhythm, and music" },
            ],
        },
    };

    const selectedCourse = courseMaterials[courseName];

    useEffect(() => {
        if (userEmail && courseName) {
            const courseCompletionStatus = localStorage.getItem(`${userEmail}-${courseName}-completed`);
            const certificateGeneratedStatus = localStorage.getItem(`${userEmail}-${courseName}-certificateGenerated`);

            if (courseCompletionStatus === 'true') {
                setIsCourseCompleted(true);
            }
            if (certificateGeneratedStatus === 'true') {
                setIsCertificateGenerated(true);
            }
        }
    }, [userEmail, courseName]);

    const completeStep1 = () => {
        setIsNotesCompleted(true);
        setStep(2);
    };

    const completeStep2 = () => {
        setIsVideoCompleted(true);
        setStep(3);
    };

    const handleQuizAnswer = (index, answer) => {
        setQuizAnswers({ ...quizAnswers, [index]: answer });
    };

    const completeStep3 = () => {
        const isCorrect = selectedCourse.quiz.every((q, index) => quizAnswers[index] === q.answer);
        if (isCorrect) {
            setIsQuizCompleted(true);
            localStorage.setItem(`${userEmail}-${courseName}-completed`, 'true');
            setIsCourseCompleted(true);
        } else {
            alert("Please answer all questions correctly to complete the course.");
        }
    };

    const generateCertificate = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text('Course Completion Certificate', 50, 40);
        doc.setFontSize(14);
        doc.text(`This is to certify that`, 20, 60);
        doc.text(`${userName}`, 20, 70);
        doc.text(`has successfully completed the ${courseName} course.`, 20, 80);
        doc.text('Congratulations on your achievement!', 20, 90);
        doc.save(`${userName}-${courseName}-certificate.pdf`);
        setIsCertificateGenerated(true);
        localStorage.setItem(`${userEmail}-${courseName}-certificateGenerated`, 'true');
    };

    return (
        <div className="course-material-container">
            <h1>{courseName}</h1>
            {selectedCourse ? (
                <>
                    {isCourseCompleted ? (
                        <div className="completion-section">
                            <h2>Congratulations!</h2>
                            <p>You have already completed the course.</p>
                            {!isCertificateGenerated && (
                                <>
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter your name for the certificate"
                                    />
                                    <button onClick={generateCertificate}>Generate Certificate</button>
                                </>
                            )}
                            {isCertificateGenerated && <p>Certificate has been generated. Enjoy your achievement!</p>}
                        </div>
                    ) : (
                        <>
                            {step === 1 && (
                                <div className="notes-section">
                                    <h2>Course Notes</h2>
                                    <div className="notes-content">{ReactHtmlParser(selectedCourse.notes)}</div>
                                    <button onClick={completeStep1} disabled={isNotesCompleted}>Mark as Read</button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="video-section">
                                    <h2>Watch the Video</h2>
                                    <ReactPlayer
                                        url={selectedCourse.videoUrl}
                                        controls
                                        width="100%"
                                        height="400px"
                                    />
                                    <button onClick={completeStep2} disabled={isVideoCompleted}>Mark as Completed</button>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="quiz-section">
                                    <h2>Answer Quiz Questions</h2>
                                    {selectedCourse.quiz.map((q, index) => (
                                        <div key={index} className="quiz-question">
                                            <p>{q.question}</p>
                                            <input
                                                type="text"
                                                onChange={(e) => handleQuizAnswer(index, e.target.value)}
                                                placeholder="Your Answer"
                                            />
                                        </div>
                                    ))}
                                    <button onClick={completeStep3} disabled={isQuizCompleted}>Submit Answers</button>
                                </div>
                            )}
                        </>
                    )}
                </>
            ) : (
                <p>Course material not available</p>
            )}
        </div>
    );
};

export default CourseMaterial;