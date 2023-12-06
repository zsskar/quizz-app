export default function ShowScore({maxPossiblePoints,score, dispatch}) {

    const scorePer = Math.ceil(score * (100/maxPossiblePoints)) ;

    return (
        <>
        <div className="showScore">
            <h1>Your score is {score} out of {maxPossiblePoints} ({scorePer}%)</h1>
        </div>
        <div className="restart">
        <button onClick={() => dispatch({type :'restart'})}>Restart Quiz</button>
        </div>
        </>
        
    );
}