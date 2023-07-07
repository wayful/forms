// Form

export interface IForm {
  id: string;
  name: string;
  status: FormStatus;
  description: string;
  sections: ISection[];
  createdDate: Date;
  updatedDate: Date;
}

export enum FormStatus {
  DRAFT,
  PUBLISHED,
  ARCHIVED,
}

// Section

export interface ISection {
  id: string;
  name: string;
  questions: IQuestion[];
}

// Question

export interface IQuestion {
  id: string;
  text: string;
  required: boolean;
  type: TQuestionType;
}

// QuestionType

export type TQuestionType = QuestionTypeNumber | QuestionTypeString | QuestionTypeBoolean | QuestionTypeOptions;

export interface IQuestionType {
  // id: string;
  // name: string;
  kind: QuestionTypeKind;
}

export enum QuestionTypeKind {
  Number = 'Number',
  String = 'String',
  Boolean = 'Boolean',
  Options = 'Options',
}

export interface QuestionTypeNumber extends IQuestionType {
  kind: QuestionTypeKind.Number;
  min: number;
  max: number;
  step: number;
}

export interface QuestionTypeString extends IQuestionType {
  kind: QuestionTypeKind.String;
  minLength?: number;
  maxLength?: number;
  // regex?: RegExp;
}

export interface QuestionTypeBoolean extends IQuestionType {
  kind: QuestionTypeKind.Boolean;
  trueLabel: string;
  falseLabel: string;
}

export interface QuestionTypeOptions extends IQuestionType {
  kind: QuestionTypeKind.Options;
  minOptions: number;
  maxOptions: number;
  options: QuestionTypeOptionsOption[]
}

export interface QuestionTypeOptionsOption {
  label: string;
  value: string;
}
