import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { answertype } from "../@types";

type initialsType ={
    handleNextQuestion: (questionNumber: number) => void
    handlePrevQuestion: () => void
    resetQuiz: () => void
    correctAnswers: answertype[]
    question: number
    handleCorrectAnswer: (answer: answertype) => void
    seconds: number
}



type QuestionProviderProps ={
children: React.ReactNode
}

export const QuestionContext = createContext({} as initialsType)


export const QuestionProvider = ({children}: QuestionProviderProps)=>{

  const [question,  setQuestion] = useState(0)
  const [correctAnswers,  setCorrectAnswers] = useState<answertype[]>([])
  const [seconds, setSeconds] = useState(60);


   // move to the next question
  const handleNextQuestion = useCallback((questionNumber:number)=>{

    setCorrectAnswers((prev)=>{
      if(!prev.find((answer)=>answer.questionId===questionNumber)){
        return [...prev, { questionId: questionNumber, answer: null, answerID: null, 
                isSelected: false }];
      } 
        return prev
      
    })

    setQuestion((prev)=>prev+1)
  },[setQuestion])


  // move to the previous question
  const handlePrevQuestion = useCallback(()=>{
    if(question===0) return setQuestion(0)
    setQuestion((prev)=>prev-1)
  },[setQuestion, question])


  // get selected answers by the user
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

   
   //reset the quiz
   const resetQuiz = useCallback(()=>{
    setCorrectAnswers([])
    setQuestion(0)
   },[setCorrectAnswers, setQuestion])

    
 useEffect(()=>{

  setSeconds(60);
  
  const timer = setInterval(() => {

    setSeconds(prevSeconds => {
      if (prevSeconds === 0) {
        clearInterval(timer);  
        handleNextQuestion(question);  
        return 60;
      }

      return prevSeconds - 1;
    });
  }, 1000);

   return () => clearInterval(timer);
}, [ question ]);
    
 

    return <QuestionContext.Provider value={{seconds,
      handleNextQuestion, correctAnswers, handleCorrectAnswer
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