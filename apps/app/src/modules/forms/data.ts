import * as uuid from 'uuid';
import { FormStatus, IForm, QuestionTypeKind } from "../../types";

export const forms: IForm[] = [{
  id: '1',
  status: FormStatus.PUBLISHED,
  name: 'DevOps Maturity Assessment',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  sections: [{
    id: uuid.v4(),
    name: 'Team Agility',
    questions: [{
      id: uuid.v4(),
      text: 'Does the team have a new, potentially shippable, version of the product available every 1-2 weeks?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Which of the following are measured by the team (tick all that apply)?',
      required: true,
      type: QuestionTypeKind.Options,
      rules: {
        minOptions: 0,
        options: [{
          value: '1',
          label: 'Elapsed lead time to deliver valuable changes (from initial request to production)'
        }, {
          value: '1',
          label: 'Frequency of deployments into production'
        }, {
          value: '1',
          label: 'Change failure rate'
        }, {
          value: '1',
          label: 'Time to restore service after a failure'
        }]
      }
    }, {
      id: uuid.v4(),
      text: 'Does the team regularly meet to discuss what is working well, what isn\'t working well and what they can improve, and the top improvement items are implemented?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Does the team take actions to ensure that the team does not create or experience bottlenecks with/for other teams?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Are any work items that are blocked swiftly identified and then people collaborate to rectify the situation?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Is there a clearly defined mechanism for prioritising the backlog?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Does the team work on the highest priority items in the backlog?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Are the most experienced team members allocated last so they can help others develop cross functional skills and be free to focus on the most business critical or complex problems?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Does the team have fast feedback loops in place (tick all that apply)?',
      required: true,
      type: QuestionTypeKind.Options,
      rules: {
        minOptions: 0,
        options: [{
          value: '1',
          label: 'From testers: usually less than 1 day'
        }, {
          value: '1',
          label: 'From the product owner: usually less than 3 days'
        }, {
          value: '1',
          label: 'From customers: usually less than 2 weeks'
        }, {
          value: '1',
          label: 'From end users: usually less than 2 weeks'
        }]
      }
    }, {
      id: uuid.v4(),
      text: 'Are there proactive steps taken to ensure there is no major dependency on "super heroes" (e.g. pair programming, mob learning, real options)?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }]
  }, {
    id: uuid.v4(),
    name: 'Collaboration',
    questions: [{
      id: uuid.v4(),
      text: 'Are knowledge and interests shared within the team and with other teams within the organisation (for example via communities of interest)?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Does the team have methods in place for asynchronous communication (for example Kanban Board, JIRA, Slack, Circuit)?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }, {
      id: uuid.v4(),
      text: 'Do people on the team have mechanisms to collaborate with people outside of the team?',
      required: true,
      type: QuestionTypeKind.Boolean,
      rules: {
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    }]
  }],
}, {
  id: '2',
  status: FormStatus.DRAFT,
  name: 'Test form',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  sections: []
}];
