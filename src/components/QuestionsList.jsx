import Footer from "./Footer";

export default function QuestionsList({ question,dispatch, noOfQuestions,index}) {
    return (
        <>
            <div className='questions'>
                <h2>Q- <em>{question.question}</em></h2>
                <ul>
                    {
                        question.options.map((option, index) =>
                            <button key={index}>{option}</button>
                        )}
                </ul>
            </div>
            <Footer dispatch={dispatch} noOfQuestions={noOfQuestions} index={index} />
        </>
    );
}