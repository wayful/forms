interface Form {
  id: string;
  name: string;
  questions: Question[]
}

interface Question {
  id: string;
  text: string;
  required: boolean;
  type: QuestionTypeBoolean | QuestionTypeNumber | QuestionTypeOneOfMany | QuestionTypeManyOfMany;
}

interface QuestionTypeBoolean {
  data: 'boolean';
  presentation: 'radio' | 'switch';
  labels: {
    true: string;
    false: string;
  }
}

interface QuestionTypeNumber {
  data: 'number';
  presentation: 'input' | 'scale' | 'slider';
  min: number;
  max: number;
  step: number;
  labels?: string[]; // @TODO function (?)
}

interface QuestionTypeString {
  data: 'string';
  presentation: 'input';
  min?: number;
  max?: number;
  regex?: RegExp;
}

interface QuestionTypeOneOfMany {
  data: 'oneOfMany';
  presentation: 'radio';
  options: Option[];
}

interface QuestionTypeManyOfMany {
  data: 'manyOfMany';
  presentation: 'checkbox';
  min: number;
  max: number;
  options: Option[];
}

interface Option {
  label: string;
  value: string | number; // @TODO
}

// --

const form: Form = {
  id: 'form:1',
  name: 'Sample form',
  questions: [
    {
      id: 'question:1',
      text: 'Sample boolean question',
      required: true,
      type: {
        data: 'boolean',
        presentation: 'radio',
        labels: {
          true: 'yes',
          false: 'no',
        },
      },
    },
    {
      id: 'question:2',
      text: 'Sample number question',
      required: true,
      type: {
        data: 'number',
        presentation: 'input',
        min: 0,
        max: 5,
        step: 1,
        labels: [
          'Totally disklike',
          'Partially disklike',
          'Netrual',
          'Partially like',
          'Totally like',
        ],
      }
    },
    {
      id: 'question:3',
      text: 'Sample oneOfMany question',
      required: true,
      type: {
        data: 'oneOfMany',
        presentation: 'radio',
        options: [{
          label: 'Option 1',
          value: 1
        }, {
          label: 'Option 2',
          value: 2
        }, {
          label: 'Option 3',
          value: 3
        }],
      },
    },
    {
      id: 'question:4',
      text: 'Sample manyOfMany question',
      required: true,
      type: {
        data: 'manyOfMany',
        presentation: 'checkbox',
        min: 1,
        max: 5,
        options: [{
          label: 'Option 1',
          value: 1
        }, {
          label: 'Option 2',
          value: 2
        }, {
          label: 'Option 3',
          value: 3
        }],
      },
    },
  ],
}