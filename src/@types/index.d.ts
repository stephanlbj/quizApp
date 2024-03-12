export type questionType = {
    question: string;
    options: string[];
    correctAnswer: string;
}

export type answertype ={
    questionId:number 
    answer: string | null
    isSelected:boolean
    answerID:number | null
  }

  export type responseSelected = {
    questionID: questionNumber,
    responseIndex: number | null
}


export type resultType = {
    question:string
    correctAnswer: string;
    answer: string | null
} 

export type resultTypeProps = {
    correctAnswers: answertype[]
    techQuizQuestions: questionType[]
    reset: () => void
}

export type questionTypeProps ={
    questions: questionType
    handlePrev: () => void
    handleNext: (questionNumber: number) => void
    questionNumber: number
    handleAnswer: (answer: answertype) => void
    correctAnswers: answertype[]
}

export type btnProps ={
    label:string 
    onclick: ()=> void
    isDisabled?:boolean
}