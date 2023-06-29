import { QuestionTypeKind } from "@prisma/client";

import builder from "../builder";

export const QuestionTypeKindRef = builder.enumType(QuestionTypeKind, {
  name: 'QuestionTypeKind',
});

export interface IQuestionType {
  id: string;
  name: string;
  kind: QuestionTypeKind;
}

export const QuestionTypeRef = builder.interfaceRef<IQuestionType>('QuestionType');

QuestionTypeRef.implement({
  resolveType(questionType, _context, _info) {
    switch (questionType.kind) {
      case QuestionTypeKind.Number:
        return 'QuestionTypeNumber';
      case QuestionTypeKind.String:
        return 'QuestionTypeString';
      case QuestionTypeKind.Boolean:
        return 'QuestionTypeBoolean';
      case QuestionTypeKind.Options:
        return 'QuestionTypeOptions';
    }
  },
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    kind: t.expose('kind', { type: QuestionTypeKindRef }),
  }),
});
