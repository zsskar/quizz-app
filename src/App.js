import './App.css';
import Header from './components/Header';
import QuestionsList from './components/QuestionsList';
import WelcomePage from './components/WelcomePage';
import { questionsData } from "./components/QuestionsData";
import { useEffect, useReducer } from 'react';
import ProgressBar from './components/ProgressBar';


const initialStage = {
  questions: [],
  status: 'dataReceived',
  index: 0,
  answer: null,
  score: 0
};

function reducer(state, action) {

  switch (action.type) {

    case 'dataReceived': return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed': return { ...state, status: 'error' };
    case 'start': return { ...state, status: 'active' };
    case 'next': return { ...state, index: state.index + 1, answer: null };
    case 'answer': const question = state.questions.at(state.index);
      return { ...state, answer: action.payload, score: action.payload === question.answer ? state.score + question.point : state.score };
    default: throw new Error("Action unknown !");
  }

}


function App() {

  const [{ questions, status, index, answer, score }, dispatch] = useReducer(reducer, initialStage);

  const noOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, curr) =>
    prev + curr.point, 0);


  useEffect(function () {
    dispatch({ type: 'dataReceived', payload: questionsData });
  }, []);


  return (
    <div className="App">
      <Header />
      {status === 'ready' && <WelcomePage noOfQuestions={noOfQuestions} dispatch={dispatch} />}
      {status === 'active' && <ProgressBar noOfQuestions={noOfQuestions} index={index}
        maxPossiblePoints={maxPossiblePoints} score={score} />}
      {status === 'active' && <QuestionsList question={questions[index]}
        dispatch={dispatch} noOfQuestions={noOfQuestions} questionIndex={index} answer={answer} />}
    </div>
  );
}

export default App;
