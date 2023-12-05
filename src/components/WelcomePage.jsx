function WelcomePage({ noOfQuestions, dispatch }) {
    return (
        <div style={{ textAlign: 'center',lineHeight:'50px' }}>
            <h1>Welcome to the QUIZ</h1>
            <p style={{fontSize:'25px'}}><b>{noOfQuestions}</b><em> questions to test your react knowledge</em></p>
            <button className="startBtn" onClick={() => { dispatch({ type: 'start' }) }}>Start</button>
        </div>
    );
}
export default WelcomePage;