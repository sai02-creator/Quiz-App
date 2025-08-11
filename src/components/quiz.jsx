import { useState } from "react";

function Quiz () {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "Which language is used for web apps?",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All",
        },
        {
            question: "What does JSX stand for?",
            options: ["JavaScript XML", "Java Syntax eXTENSION", "Just a simple example", "None of the above"],
            answer: "JavaScript XML",  
        },
          
    ];

    const [optionSelected, setOptionSelected] =useState("None");

    function handleSelectOption(option) {
        setOptionSelected(option);
        
    }

    return(
        <div>
            <h2> Question 1</h2> 
            <p className="question">{questionBank[0].question}</p>
            {questionBank[0].options.map((option) => (
                <button className="option" onClick={() => handleSelectOption(option)}> {option} </button>
            ))}

            <p> Option Selected: {optionSelected} </p>

            <div className="nav-buttons">
                <button> Previous </button>
                <button> Next </button>
            </div>
             </div>
    );
}

export default Quiz;