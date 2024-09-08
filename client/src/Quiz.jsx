import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/Quiz.css';
import { data } from './data';
import { heritagePlaces } from './heritageData';
import { culturalClues } from './culturalCluesData'; // Import cultural clues data

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const optionArray = [Option1, Option2, Option3, Option4];

    // New state for heritage place quiz
    const [heritageIndex, setHeritageIndex] = useState(0);
    const [heritageScore, setHeritageScore] = useState(0);
    const [heritageResult, setHeritageResult] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [timer, setTimer] = useState(30); // 30-second timer
    const [selectedHeritagePlaces, setSelectedHeritagePlaces] = useState([]);
    const [heritageGameStarted, setHeritageGameStarted] = useState(false);
    const [heritageGameClosed, setHeritageGameClosed] = useState(false);

    // New state for cultural clues game
    const [clueIndex, setClueIndex] = useState(0);
    const [clueScore, setClueScore] = useState(0);
    const [clueResult, setClueResult] = useState(false);
    const [clueUserInput, setClueUserInput] = useState("");
    const [clueData, setClueData] = useState([]);

    // Shuffle and select random 10 questions from the data
    const shuffleQuestions = () => {
        let shuffled = [...data].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    };

    // Shuffle and select random 10 heritage places
    const shuffleHeritagePlaces = () => {
        let shuffled = [...heritagePlaces].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    };

    // Shuffle and select random 10 cultural clues
    const shuffleCulturalClues = () => {
        let shuffled = [...culturalClues].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    };

    // Initialize the quiz with random questions
    useEffect(() => {
        const randomQuestions = shuffleQuestions();
        setQuestions(randomQuestions);
        setIndex(0);
        setScore(0);
        setResult(false);
        setLock(false);

        const randomHeritage = shuffleHeritagePlaces();
        setSelectedHeritagePlaces(randomHeritage);
        setHeritageIndex(0);
        setHeritageScore(0);
        setHeritageResult(false);
        setHeritageGameClosed(false);

        const randomClues = shuffleCulturalClues();
        setClueData(randomClues);
        setClueIndex(0);
        setClueScore(0);
        setClueResult(false);
    }, []);

    // Timer effect for the heritage quiz
    useEffect(() => {
        if (heritageGameStarted && !heritageGameClosed && timer > 0 && heritageIndex < selectedHeritagePlaces.length) {
            const timeout = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timeout);
        } else if (timer === 0) {
            moveToNextHeritage();
        }
    }, [timer, heritageGameStarted, heritageIndex, selectedHeritagePlaces, heritageGameClosed]);

    // Check answer for quiz
    const checkAns = (e, ans) => {
        if (lock === false) {
            if (questions[index].ans === ans) {
                e.target.classList.add("correct");
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                optionArray[questions[index].ans - 1].current.classList.add("correct");
            }
            setLock(true);
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === questions.length - 1) {
                setResult(true);
                return;
            }
            setIndex(prev => prev + 1);
            setLock(false);
            optionArray.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            });
        }
    };

    const reset = () => {
        const randomQuestions = shuffleQuestions();
        setQuestions(randomQuestions);
        setIndex(0);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    // Reset the heritage quiz
    const resetHeritageQuiz = () => {
        const randomHeritage = shuffleHeritagePlaces();
        setSelectedHeritagePlaces(randomHeritage);
        setHeritageIndex(0);
        setHeritageScore(0);
        setTimer(30);
        setUserInput("");
        setHeritageResult(false);
        setHeritageGameStarted(false);
        setHeritageGameClosed(false);
    };

    // Check heritage place answer
    const checkHeritageAnswer = () => {
        if (userInput.trim().toLowerCase() === selectedHeritagePlaces[heritageIndex].answer.toLowerCase()) {
            setHeritageScore(prev => prev + 1);
        }
        moveToNextHeritage();
    };

    // Move to the next heritage question
    const moveToNextHeritage = () => {
        if (heritageIndex === selectedHeritagePlaces.length - 1) {
            setHeritageResult(true);
        } else {
            setHeritageIndex(prev => prev + 1);
            setTimer(30);
            setUserInput("");
        }
    };

    // Handle game closure
    const closeHeritageGame = () => {
        setHeritageGameClosed(true);
    };

    // Check clue answer
    const checkClueAnswer = () => {
        if (clueUserInput.trim().toLowerCase() === clueData[clueIndex].answer.toLowerCase()) {
            setClueScore(prev => prev + 1);
        }
        moveToNextClue();
    };

    // Move to the next clue
    const moveToNextClue = () => {
        if (clueIndex === clueData.length - 1) {
            setClueResult(true);
        } else {
            setClueIndex(prev => prev + 1);
            setClueUserInput("");
        }
    };

    // Reset the clues game
    const resetClueGame = () => {
        const randomClues = shuffleCulturalClues();
        setClueData(randomClues);
        setClueIndex(0);
        setClueScore(0);
        setClueResult(false);
        setClueUserInput("");
    };

    return (
        <div className='container3'>
            <div className="back-button">
                <Link to="/explore" className="btn btn-outline-primary">
                    &larr; Back to Explore
                </Link>
            </div>

            <h1>Quiz App</h1>
            <hr />
            {questions.length > 0 ? (
                result ? (
                    <>
                        <h2>You Scored {score} out of {questions.length}</h2>
                        <button onClick={reset}>Reset</button>
                    </>
                ) : (
                    <>
                        <h2>{index + 1}. {questions[index].question}</h2>
                        <ul>
                            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{questions[index].options1}</li>
                            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{questions[index].options2}</li>
                            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{questions[index].options3}</li>
                            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{questions[index].options4}</li>
                        </ul>
                        <button onClick={next}>Next</button>
                        <div className='index'>{index + 1} of {questions.length} Questions</div>
                    </>
                )
            ) : (
                <p>Loading questions...</p>
            )}

            <hr />
            <h1>Guessing Game</h1>
            {heritageGameClosed ? (
                <>
                    <h2>Game Closed</h2>
                    <h3>You Scored {heritageScore} out of {selectedHeritagePlaces.length}</h3>
                    <button onClick={resetHeritageQuiz}>Reset Heritage Quiz</button>
                </>
            ) : heritageGameStarted ? (
                heritageResult ? (
                    <>
                        <h2>You Scored {heritageScore} out of {selectedHeritagePlaces.length}</h2>
                        <button onClick={resetHeritageQuiz}>Reset Heritage Quiz</button>
                    </>
                ) : (
                    selectedHeritagePlaces.length > 0 && selectedHeritagePlaces[heritageIndex] ? (
                        <div className="heritage-section">
                            <h2>Guess the Heritage Place</h2>
                            <div className="heritage-img-container">
                                <img 
                                    src={selectedHeritagePlaces[heritageIndex].image} 
                                    alt="Heritage place" 
                                    className="heritage-img" 
                                />
                            </div>
                            <div className="heritage-input">
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="Enter your guess"
                                />
                                <button onClick={checkHeritageAnswer}>Submit</button>
                            </div>
                            <div className="timer">Time left: {timer} seconds</div>
                            <div className='index'>{heritageIndex + 1} of {selectedHeritagePlaces.length} Places</div>
                            <button onClick={closeHeritageGame} className="close-game-button">Close Game</button>
                        </div>
                    ) : (
                        <p className="loading-text">Loading heritage places...</p>
                    )
                )
            ) : (
                <button onClick={() => setHeritageGameStarted(true)} className="start-heritage-game">
                    Start Heritage Game
                </button>
            )}

            <hr />
            <h1>Cultural Clues Game</h1>
            {clueResult ? (
                <>
                    <h2>You Scored {clueScore} out of {clueData.length}</h2>
                    <button onClick={resetClueGame}>Reset Clues Game</button>
                </>
            ) : (
                clueData.length > 0 && clueData[clueIndex] ? (
                    <div className="clues-section">
                        <h2>Clue: {clueData[clueIndex].clue}</h2>
                        <div className="clues-input">
                            <input
                                type="text"
                                value={clueUserInput}
                                onChange={(e) => setClueUserInput(e.target.value)}
                                placeholder="Enter your answer"
                            />
                            <button onClick={checkClueAnswer}>Submit</button>
                        </div>
                        <div className='index'>{clueIndex + 1} of {clueData.length} Clues</div>
                    </div>
                ) : (
                    <p className="loading-text">Loading clues...</p>
                )
            )}
            <hr />
        </div>
    );
};

export default Quiz;
