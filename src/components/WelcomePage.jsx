function WelcomePage({ noOfQuestions, dispatch }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome to the QUIZ</h1>
            <p>{noOfQuestions} questions to test your react knowledge</p>
            <button onClick={() => { dispatch({ type: 'start' }) }}>Start</button>
        </div>
    );
}
export default WelcomePage;