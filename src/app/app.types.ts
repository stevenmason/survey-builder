interface Option {
  id: string;
  text: string;
  isCorrectAnswer: boolean;
}

interface Options {
  [id: string]: Option;
}

interface Question {
  id: string;
  text: string;
  options: Options;
}

interface Questions {
  [id: string]: Question;
}

interface Survey {
  id: string;
  name: string;
  questions: Questions;
  isClosed: boolean;
}

interface Surveys {
  [id: string]: Survey;
}

export { Option, Question, Survey, Surveys };
