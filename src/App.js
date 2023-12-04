import './App.css';
import Header from './components/Header';
import QuestionsList from './components/QuestionsList';
import WelcomePage from './components/WelcomePage';
import Footer from './components/Footer';
import  {questions}  from "./components/QuestionsData";
import { useReducer } from 'react';


function App() {

  const initialStage = [];

  useReducer()

  const show = false;

  return (
    <div className="App">
      <Header />
      {show && <WelcomePage />}
      {!show && <QuestionsList question={questions[0]}/>}
      <Footer />
    </div>
  );
}

export default App;
