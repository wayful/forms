import type { QuestionTypeString } from "@prisma/client";

import builder from "../builder";
import { IQuestionType, QuestionTypeRef } from "./QuestionType";

export const QuestionTypeStringRef = builder.objectRef<QuestionTypeString & IQuestionType>('QuestionTypeString');

QuestionTypeStringRef.implement({
  interfaces: [QuestionTypeRef],
  fields: (t) => ({
    minLength: t.exposeInt('minLength', { nullable: true }),
    maxLength: t.exposeInt('maxLength', { nullable: true }),
  }),
});
