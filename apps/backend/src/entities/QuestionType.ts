export class QuestionType {
  id: string;
  name: string;
}

export class QuestionTypeNumber extends QuestionType {
  min: number;
  max: number;
  step: number;
}

export class QuestionTypeBoolean extends QuestionType {
  trueLabel: string;
  falseLabel: string;
}
