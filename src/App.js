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
  answer: null
};

function reducer(state, action) {

  switch (action.type) {

    case 'dataReceived': return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed': return { ...state, status: 'error' };
    case 'start': return { ...state, status: 'active' };
    case 'next': return { ...state, index: state.index + 1, answer: null };
    case '': return { ...state };
    default: throw new Error("Action unknown !");
  }

}


function App() {

  const [{ questions, status, index, answer }, dispatch] = useReducer(reducer, initialStage);

  const noOfQuestions = questions.length;

  useEffect(function () {
    dispatch({ type: 'dataReceived', payload: questionsData });
  }, []);


  return (
    <div className="App">
      <Header />
      {status === 'ready' && <WelcomePage noOfQuestions={noOfQuestions} dispatch={dispatch} />}
      {status === 'active' && <ProgressBar noOfQuestions={noOfQuestions} index={index} /> }
      {status === 'active' && <QuestionsList question={questions[index]}
        dispatch={dispatch} noOfQuestions={noOfQuestions} index={index} />}
    </div>
  );
}

export default App;
