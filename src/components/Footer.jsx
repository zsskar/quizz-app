export default function Footer({dispatch,noOfQuestions,index}) {
    return (
        <div className="buttons">
            {/* <button className="timer">5:00</button> */}
            {index < noOfQuestions - 1 && <button className="next" onClick={()=>{dispatch({type :'next'})}}>Next</button>}
        </div>
    );
}