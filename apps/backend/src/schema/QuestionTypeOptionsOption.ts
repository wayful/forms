import type { QuestionTypeOptionsOption } from "@prisma/client";

import builder from "../builder";

export const QuestionTypeOptionsOptionRef = builder.objectRef<QuestionTypeOptionsOption>('QuestionTypeOptionsOption');

QuestionTypeOptionsOptionRef.implement({
  fields: (t) => ({
    label: t.exposeString('label'),
    value: t.exposeString('value'),
  }),
});
