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
  questions: Question[];
}

// Question

export interface IQuestionCommon {
  id: string;
  text: string;
  required: boolean;
  type: QuestionTypeKind;
  rules: {}
}

export type Question = QuestionTypeNumber | QuestionTypeString | QuestionTypeBoolean | QuestionTypeOptions;

// QuestionType

export enum QuestionTypeKind {
  Number = 'Number',
  String = 'String',
  Boolean = 'Boolean',
  Options = 'Options',
}

export interface QuestionTypeNumber extends IQuestionCommon {
  type: QuestionTypeKind.Number;
  rules: {
    min: number;
    max: number;
    step: number;
  }
}

export interface QuestionTypeString extends IQuestionCommon {
  type: QuestionTypeKind.String;
  rules: {
    minLength?: number;
    maxLength?: number;
    // regex?: RegExp;
  }
}

export interface QuestionTypeBoolean extends IQuestionCommon {
  type: QuestionTypeKind.Boolean;
  rules: {
    trueLabel: string;
    falseLabel: string;
  }
}

export interface QuestionTypeOptions extends IQuestionCommon {
  type: QuestionTypeKind.Options;
  rules: {
    minOptions: number;
    maxOptions?: number;
    options: QuestionTypeOptionsOption[]
  }
}

export interface QuestionTypeOptionsOption {
  label: string;
  value: string;
}
