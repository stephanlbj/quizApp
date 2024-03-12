 
import './App.css'
import QuestionList from './components/QuestionList'
import {techQuizQuestions} from "./dummyQuestions"
import Results from './components/Results'
import { useQuestionContext } from './Context/QuestionContext'
 



function App() {
 
  const {correctAnswers,handleCorrectAnswer,handleNextQuestion,handlePrevQuestion,question
  ,resetQuiz} = useQuestionContext()
 

  return (
  <main className='flex items-center 
  justify-center  '>

   

    {
      question < techQuizQuestions.length ? (
        <QuestionList
        questions={techQuizQuestions[question]}
        handleNext={handleNextQuestion}
        handlePrev={handlePrevQuestion}
        questionNumber={question}
        handleAnswer={handleCorrectAnswer}
        correctAnswers={correctAnswers}
        
        />
      ) : (
        <Results
        techQuizQuestions={techQuizQuestions}
         correctAnswers={correctAnswers}
         reset={resetQuiz}
         />
      )
    } 

   
   
  </main>
  )
}

export default App
