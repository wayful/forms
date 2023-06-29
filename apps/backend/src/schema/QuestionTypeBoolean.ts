import type { QuestionTypeBoolean } from "@prisma/client";

import builder from "../builder";
import { IQuestionType, QuestionTypeRef } from "./QuestionType";

export const QuestionTypeBooleanRef = builder.objectRef<QuestionTypeBoolean & IQuestionType>('QuestionTypeBoolean');

QuestionTypeBooleanRef.implement({
  interfaces: [QuestionTypeRef],
  fields: (t) => ({
    trueLabel: t.exposeString('trueLabel'),
    falseLabel: t.exposeString('falseLabel'),
  }),
});
