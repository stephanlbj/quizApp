import { useCallback, useState } from 'react'

import './App.css'
import QuestionList from './components/QuestionList'
import {techQuizQuestions} from "./dummyQuestions"
import Results from './components/Results'
import { answertype } from './@types'



function App() {
 
  const [question,  setQuestion] = useState(0)
  const [correctAnswers,  setCorrectAnswers] = useState<answertype[]>([])
  


  const handleNextQuestion = useCallback(()=>{
    setQuestion((prev)=>prev+1)
  },[setQuestion])

  const handlePrevQuestion = useCallback(()=>{
    if(question===0) return setQuestion(0)
    setQuestion((prev)=>prev-1)
  },[setQuestion, question])

   const handleCorrectAnswer = useCallback((answer:answertype)=>{

    
    

     setCorrectAnswers((prev)=>{
      const isAnswer = prev.find((prevAnswer)=>prevAnswer.questionId===answer.questionId)
      if(isAnswer!==undefined){
        return prev.map((prevQ)=>{
          if(prevQ.questionId===answer.questionId){
            return {
              ...prevQ, answer: answer.answer, answerID: answer.answerID,
              isSelected:answer.isSelected
            }
          }
          else{
            return prevQ
          }
        })
      }
      else{
        return [...prev, answer]
      }
     })
   },[setCorrectAnswers])

   
   const resetQuiz = useCallback(()=>{
    setCorrectAnswers([])
    setQuestion(0)
   },[setCorrectAnswers, setQuestion])

 


  return (
  <main className='flex items-center 
  justify-center min-h-screen'>

   

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
