export default function Footer({ dispatch, noOfQuestions, questionIndex }) {
    const check = questionIndex < noOfQuestions - 1;
    return (
        <div className="buttons">
            {<button className="timer">5:00</button>}
            {check && <button className="next" onClick={() => { dispatch({ type: 'next' }) }}>Next</button>}
            {!check && <button style={{ marginLeft: '70%' }} className="startBtn" onClick={() => dispatch({ type: 'finish' })}>Finish</button>}
        </div>
    );
}