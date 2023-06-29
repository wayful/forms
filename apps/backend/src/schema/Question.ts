import { QuestionTypeKind } from "@prisma/client";

import builder from "../builder";
import { QuestionTypeRef } from "./QuestionType";

export const QuestionRef = builder.prismaObject('Question', {
  fields: (t) => ({
    id: t.exposeID('id'),
    text: t.exposeString('text'),
    required: t.exposeBoolean('required'),
    type: t.field({
      select: {
        type: {
          include: {
            number: true,
            string: true,
            boolean: true,
            options: {
              include: {
                options: true
              }
            },
          },
        },
      },
      type: QuestionTypeRef,
      resolve: ({ type }) => {
        switch(type.kind) {
          case QuestionTypeKind.Number:
            return {
              ...type,
              ...type.number,
            }
          case QuestionTypeKind.String:
            return {
              ...type,
              ...type.string,
            }
          case QuestionTypeKind.Boolean:
            return {
              ...type,
              ...type.boolean,
            }
          case QuestionTypeKind.Options:
            return {
              ...type,
              ...type.options,
            }
        }
      }
    }),
  }),
});
