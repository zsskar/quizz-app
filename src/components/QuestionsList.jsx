
export default function QuestionsList({question}){
    return (
            <div className='questions'>
            <h2>Q- <em>{question.question}</em></h2>
                <ul>
                {
                    question.options.map(option =>
                    <button key={question.id}>{option}</button>
                )}
                </ul>
            </div>
    );
}