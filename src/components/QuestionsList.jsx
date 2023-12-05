import Footer from "./Footer";

export default function QuestionsList({ question, dispatch, noOfQuestions, questionIndex, answer }) {
    return (
        <>
            <div className='questions'>
                <h2 style={{marginLeft:'6%'}}>Q- <em>{question.question}</em></h2>
                <ul>
                    {
                        question.options.map((option, index) =>
                            <button key={index} onClick={() => { dispatch({ type: 'answer', payload: index }) }}
                                className={`${answer != null ? 'disable':''} ${answer != null ?answer === question.answer && index === answer ? 'right selected' :
                                    answer !== question.answer && index === answer ? 'wrong selected' : 'restQuestions' : ''}`}
                                >
                                {option}
                            </button>
                        )}
                </ul>
            </div>
            <Footer dispatch={dispatch} noOfQuestions={noOfQuestions} questionIndex={questionIndex} />
        </>
    );
}
// className={index === 3 ?'right' :'wrong'}