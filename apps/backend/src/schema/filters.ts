import builder from "../builder";

export const IDFilter = builder.prismaFilter('ID', {
  ops: ['equals', 'not'],
});

export const StringFilter = builder.prismaFilter('String', {
  ops: ['contains', 'equals', 'startsWith', 'not'],
});
