import type { QuestionTypeOptions } from "@prisma/client";

import builder from "../builder";
import { IQuestionType, QuestionTypeRef } from "./QuestionType";
import { QuestionTypeOptionsOptionRef } from "./QuestionTypeOptionsOption";

export const QuestionTypeOptionsRef = builder.objectRef<QuestionTypeOptions & IQuestionType>('QuestionTypeOptions');

QuestionTypeOptionsRef.implement({
  interfaces: [QuestionTypeRef],
  fields: (t) => ({
    minOptions: t.exposeInt('minOptions', { nullable: true }),
    maxOptions: t.exposeInt('maxOptions', { nullable: true }),
    options: t.field({
      type: [QuestionTypeOptionsOptionRef],
      resolve: (questionTypeOptions) => {
        console.log(questionTypeOptions)
        return questionTypeOptions.options
      },
    }),
  }),
});
