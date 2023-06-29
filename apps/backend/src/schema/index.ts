import builder from "../builder";

export const Query = builder.queryType({});

// export * from './user'
export * from './form'
export * from './Question'
export * from './QuestionType'
export * from './QuestionTypeNumber'
export * from './QuestionTypeString'
export * from './QuestionTypeBoolean'
export * from './QuestionTypeOptions'
export * from './QuestionTypeOptionsOption'

export const schema = builder.toSchema();

export default schema;
