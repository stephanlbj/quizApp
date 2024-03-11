import { useEffect, useState } from "react"
import { answertype, questionType, resultType } from "../@types"
import ButtonComponent from "./ButtonComponent"


type resultTypeProps = {
    correctAnswers: answertype[]
    techQuizQuestions: questionType[]
    reset: () => void
}

const Results = ({correctAnswers,
     techQuizQuestions, reset}:resultTypeProps) => {

        const [total, setTotal] = useState(0)
        
        const checkAnswers = () => {
            let score = 0;

            techQuizQuestions.forEach((question, index) => {
              if (question.correctAnswer === correctAnswers[index]?.answer) {
                score++;
                setTotal(score)
              }
            });
           
          };

          const result = () : resultType[] => {
         
            return  techQuizQuestions.map((question, index)=>{
                if(index===correctAnswers[index].questionId){
                    return {
                        
                            question:question.question,
                            correctAnswer: question.correctAnswer,
                            answer : correctAnswers[index].answer 
                            
                    }
                    
                } 
                else {
                    return {
                        question:question.question,
                        correctAnswer: question.correctAnswer,
                        answer : null 
                        
                }
                }
            })
          }

useEffect(()=>{
    checkAnswers()
},[]) 


 

  return (
    <div className="flex flex-col items-center justify-center
    space-y-3">
        
        <p className="text-center text-xl">Your Results</p>
    
        <p>{`Your score: ${total} out of ${techQuizQuestions.length}`}</p>


        {
            result().map((res, index)=>{
             return <div key={index}
             className="flex flex-col space-y-3 items-center justify-center">
            <p  className="text-xl">{res?.question}</p>
         
             <p className={`${res?.correctAnswer.toLocaleLowerCase()=== res?.answer?.toLocaleLowerCase()
                 ? "text-green-500" : "text-red-500"}`}>{res?.answer}</p>
            </div>
            })
        }
    <ButtonComponent
    label="Reset"
    onclick={reset}
    />
    </div>
  )
}

export default Results