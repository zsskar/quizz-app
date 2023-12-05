export default function ProgressBar({ index, noOfQuestions, maxPossiblePoints, score }) {
    return (
        <>
            <div className="progress">
                <progress style={{width:'100%'}} max={noOfQuestions} value={index + 1} />
            </div>
            <div className="progress">
                <span>Question <b>{index + 1}</b>/{noOfQuestions}</span>
                <span style={{ marginLeft: '68%' }}><b>{score}</b>/{maxPossiblePoints} points</span>
            </div>
        </>
    );
}