import Footer from "./Footer";

export default function QuestionsList({ question, dispatch, noOfQuestions, index, answer}) {
    return (
        <>
            <div className='questions'>
                <h2>Q- <em>{question.question}</em></h2>
                <ul>
                    {
                        question.options.map((option, index) =>
                            <button key={index} onClick={()=>{dispatch({type:'answer',payload:index})}}
                            className={answer !=null ? answer === question.answer && index === answer ?'right':
                            answer !== question.answer && index === answer ?'wrong':'restQuestions' :''}>
                                {option}
                            </button>
                        )}
                </ul>
            </div>
            <Footer dispatch={dispatch} noOfQuestions={noOfQuestions} index={index} />
        </>
    );
}
// className={index === 3 ?'right' :'wrong'}