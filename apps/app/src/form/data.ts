import { FormStatus, IForm } from "../types";

export const forms: IForm[] = [{
  id: '1',
  status: FormStatus.DRAFT,
  name: 'US State and Capitol Test',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  sections: [{
    id: 'section:1:1',
    questions: []
  }],
}, {
  id: '2',
  status: FormStatus.PUBLISHED,
  name: 'Product Design Intake Form',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  sections: [{
    id: 'section:1:1',
    questions: []
  }],
}, {
  id: '3',
  status: FormStatus.DRAFT,
  name: 'Design Questionnaire',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  sections: [{
    id: 'section:1:1',
    questions: []
  }],
}, {
  id: '4',
  status: FormStatus.ARCHIVED,
  name: 'Country Capitol Test',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  sections: [{
    id: 'section:1:1',
    questions: []
  }],
}, {
  id: '5',
  status: FormStatus.DRAFT,
  name: 'Product Management Survey',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  sections: [{
    id: 'section:1:1',
    questions: []
  }],
}];
