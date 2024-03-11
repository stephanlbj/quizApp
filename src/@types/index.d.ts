export type questionType = {
    question: string;
    options: string[];
    correctAnswer: string;
}

export type answertype ={
    questionId:number 
    answer: string
    isSelected:boolean
    answerID:number
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