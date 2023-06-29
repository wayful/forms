import type { QuestionTypeNumber } from "@prisma/client";

import builder from "../builder";
import { IQuestionType, QuestionTypeRef } from "./QuestionType";

export const QuestionTypeNumberRef = builder.objectRef<QuestionTypeNumber & IQuestionType>('QuestionTypeNumber');

QuestionTypeNumberRef.implement({
  interfaces: [QuestionTypeRef],
  fields: (t) => ({
    min: t.exposeFloat('min', { nullable: true }),
    max: t.exposeFloat('max', { nullable: true }),
    step: t.exposeFloat('step', { nullable: true }),
  }),
});
