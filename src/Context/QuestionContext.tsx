import { createContext, useCallback, useContext, useState } from "react";
import { answertype } from "../@types";

type initialsType ={
    handleNextQuestion: () => void
    handlePrevQuestion: () => void
    resetQuiz: () => void
    correctAnswers: answertype[]
    question: number
    handleCorrectAnswer: (answer: answertype) => void
}

type QuestionProviderProps ={
children: React.ReactNode
}

export const QuestionContext = createContext({} as initialsType)


export const QuestionProvider = ({children}: QuestionProviderProps)=>{

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
  
      
 
    

    return <QuestionContext.Provider value={{handleNextQuestion, correctAnswers, handleCorrectAnswer
    ,handlePrevQuestion, question , resetQuiz }}>
            {children}
    </QuestionContext.Provider>
}


export const useQuestionContext = ()=>{
    const context = useContext(QuestionContext)

    if(context===undefined){
        throw new Error('QuestionContext nust be provided.')
    }

    return context
}