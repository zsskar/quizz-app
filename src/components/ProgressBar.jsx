export default function ProgressBar({ index, noOfQuestions }) {
    return (
        <div className="progress">
            <span>Question <b>{index + 1}</b>/{noOfQuestions}</span>
        </div>
    );
}