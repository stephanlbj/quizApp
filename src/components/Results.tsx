import { useEffect, useState } from "react"
import { resultTypeProps } from "../@types"
import ButtonComponent from "./ButtonComponent"
import FaceComponent from "./FaceComponent"




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

          

useEffect(()=>{
    checkAnswers()
},[]) 

 

 

  return (
    <div className="flex flex-col items-center justify-center
    space-y-3 my-20">
        
        <p className="text-center text-2xl">Your Results</p>
    
        <p className="text-2xl text-center">{`Your score: ${total} out of ${techQuizQuestions.length}`}</p>
      
        <FaceComponent total={total}/>
       
    <ButtonComponent
    label="Try again"
    onclick={reset}
    />
    </div>
  )
}

export default Results