import { questionType } from "./@types";

export const techQuizQuestions : questionType[] = [

    {
      question: "What is React?",
      options: ["A JavaScript framework", "A JavaScript library", "A programming language", "A database management system"],
      correctAnswer: "A JavaScript library"
    },
    {
      question: "What does JSX stand for in React?",
      options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "Java XML"],
      correctAnswer: "JavaScript XML"
    },
    {
      question: "In React, what is the purpose of the useState hook?",
      options: ["To fetch data from an API", "To manage and update component state", "To define a component's initial state", "To create reusable components"],
      correctAnswer: "To manage and update component state"
    },
    {
      question: "What is the virtual DOM in React used for?",
      options: ["To create animations", "To improve performance by minimizing DOM manipulations", "To handle asynchronous operations", "To manage global state"],
      correctAnswer: "To improve performance by minimizing DOM manipulations"
    },
    {
      question: "What is prop drilling in React?",
      options: ["A technique for passing data down multiple levels of nested components", "A method for styling React components", "A way to handle form submissions in React", "A form of error handling in React"],
      correctAnswer: "A technique for passing data down multiple levels of nested components"
    },
  
    // Node.js Questions
    {
      question: "What is Node.js?",
      options: ["A front-end JavaScript framework", "A back-end JavaScript runtime", "A database management system", "A cloud computing service"],
      correctAnswer: "A back-end JavaScript runtime"
    },
    {
      question: "Which package manager is commonly used with Node.js?",
      options: ["NPM", "Yarn", "Bower", "Gradle"],
      correctAnswer: "NPM"
    },
    {
      question: "What is the purpose of the Express.js framework in Node.js?",
      options: ["To handle front-end logic", "To manage databases", "To build user interfaces", "To create server-side applications and APIs"],
      correctAnswer: "To create server-side applications and APIs"
    },
    {
      question: "Which module in Node.js is used for building scalable network applications?",
      options: ["http", "fs", "crypto", "net"],
      correctAnswer: "net"
    },
    {
      question: "What is middleware in the context of Node.js and Express.js?",
      options: ["A database management system", "Software that acts as a bridge between different systems", "Functions that have access to the request and response objects", "A type of routing in Express.js"],
      correctAnswer: "Functions that have access to the request and response objects"
    },
  
    // TypeScript Questions
    {
      question: "What is TypeScript?",
      options: ["A superset of JavaScript", "A server-side programming language", "A front-end framework", "A version control system"],
      correctAnswer: "A superset of JavaScript"
    },
    {
      question: "What does the 'tsc' command do in TypeScript?",
      options: ["Transpile TypeScript code to JavaScript", "Test TypeScript code", "Type-check TypeScript code", "Terminate a TypeScript process"],
      correctAnswer: "Transpile TypeScript code to JavaScript"
    },
    {
      question: "What is the purpose of TypeScript interfaces?",
      options: ["To define classes in TypeScript", "To create instances of objects", "To specify the structure of an object", "To declare variables in TypeScript"],
      correctAnswer: "To specify the structure of an object"
    },
    {
      question: "Which keyword is used to declare a variable with a specific data type in TypeScript?",
      options: ["var", "let", "const", "type"],
      correctAnswer: "type"
    },
    {
      question: "What is the benefit of using TypeScript over plain JavaScript?",
      options: ["Faster execution speed", "Automatic memory management", "Static typing and improved code quality", "Built-in support for asynchronous programming"],
      correctAnswer: "Static typing and improved code quality"
    }
  ];