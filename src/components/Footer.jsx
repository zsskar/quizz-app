import { useEffect, useState } from "react";

export default function Footer({ dispatch, noOfQuestions, questionIndex }) {

    const check = questionIndex < noOfQuestions - 1;
    const [timeLeft, setTimeLeft] = useState(10);
    useEffect(() => {
        if (!timeLeft) {
            console.log("time becomes zero !", timeLeft);
            check ? dispatch({ type: 'next' }) : dispatch({ type: 'finish' });
            setTimeLeft(10);
            return;
        }
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft, dispatch, check]);

    return (
        <div className="buttons">
            {<button className="timer"><span className={`blink ${timeLeft <= 5 ? 'timeOver' : 'timeLeft'}`}>{timeLeft} </span>sec</button>}
            {check && <button className="next" onClick={() => { dispatch({ type: 'next' }); setTimeLeft(10) }}>Next</button>}
            {!check && <button style={{ marginLeft: '70%' }} className="startBtn" onClick={() => dispatch({ type: 'finish' })}>Finish</button>}
        </div>
    );
}