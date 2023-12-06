import './App.css';
import Header from './components/Header';
import QuestionsList from './components/QuestionsList';
import WelcomePage from './components/WelcomePage';
import { questionsData } from "./components/QuestionsData";
import { useEffect, useReducer } from 'react';
import ProgressBar from './components/ProgressBar';
import ShowScore from './components/ShowScore';


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
    case 'finish': return { ...state, status: 'finish', index: 0, answer: null };
    case 'restart': return { ...state, status: 'restart',score:0 };
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

      {(status === 'active' || status === 'restart')&&
        <>
          <ProgressBar noOfQuestions={noOfQuestions} index={index}
            maxPossiblePoints={maxPossiblePoints} score={score} />
          <QuestionsList question={questions[index]}
            dispatch={dispatch} noOfQuestions={noOfQuestions} questionIndex={index}
            answer={answer} />
        </>
      }

      {status === 'finish' && <ShowScore maxPossiblePoints={maxPossiblePoints}
        dispatch={dispatch}
        score={score} />}
    </div>
  );
}

export default App;
