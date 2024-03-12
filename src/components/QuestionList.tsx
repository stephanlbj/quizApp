
import React from "react"
import {  questionTypeProps } from "../@types"
import ButtonComponent from "./ButtonComponent"
import HeaderComponent from "./HeaderComponent"
import Question from "./Question"

 
const QuestionList = React.memo(({questionNumber, questions,
    handleAnswer, handleNext, correctAnswers
    }: questionTypeProps) => {

  
  return (
    <div className="w-full">


       {/*timer component*/}
       <HeaderComponent/>
        
        <p className="text-center">{questionNumber+1}) {questions.question}</p>

        
        
        {
            questions.options.map((question, index)=>{
            
                return <div key={index} className={`
                 ${correctAnswers[questionNumber]?.answerID === index && "border border-blue-500 px-2 py-1 w-6/12 mx-auto"} cursor-pointer my-10 `}
                 onClick={()=> 
                    handleAnswer({
                               questionId:questionNumber,
                               answer: question,
                               answerID:index,
                               isSelected: true
                            })}>
                <Question question={question} />
                </div>
            })
        }

        <div className="flex items-center space-x-4 justify-center">
        <ButtonComponent label="Next"  onclick={()=>handleNext(questionNumber)}/>
        </div>
    </div>
  )
})

export default QuestionList