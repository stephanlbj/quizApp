
import { answertype, questionType } from "../@types"
import ButtonComponent from "./ButtonComponent"
import Question from "./Question"


type questionTypeProps ={
    questions: questionType
    handlePrev: () => void
    handleNext: () => void
    questionNumber: number
    handleAnswer: (answer: answertype) => void
    correctAnswers: answertype[]
 

}
const QuestionList = ({questionNumber, questions,
    handleAnswer, handlePrev, handleNext, correctAnswers
    }: questionTypeProps) => {
        

       

        const handleclick = (questionID: number ,answers: string , index:number)=>{

            handleAnswer({
                questionId:questionID,
                answer: answers,
                answerID:index,
                isSelected: true
             })
        }
 

      
      


        
  return (
    <div>
        
        <p className="text-center">{questionNumber+1}) {questions.question}</p>
        
        {
            questions.options.map((question, index)=>{
                return <div key={index} className={`
                 ${correctAnswers[questionNumber]?.answerID === index && "border border-blue-500 px-2 py-1"} cursor-pointer my-10 `}

                 onClick={()=> handleclick(questionNumber , question , index)}>
                       
                       <Question 
                       question={question}
                      />
                       </div>
            })
        }

        <div className="flex items-center space-x-4 justify-center">
        <ButtonComponent label="Prev" isDisabled={questionNumber === 0} onclick={handlePrev}/>
        <ButtonComponent label="Next"  onclick={handleNext}/>
        </div>
    </div>
  )
}

export default QuestionList