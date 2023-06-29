import _ from 'lodash'
import { Prisma } from "@prisma/client";
import type { InputType, SchemaTypes } from '@pothos/core';
import type { BaseDMMF } from '@prisma/client/runtime';

const filterOps = ['equals', 'in', 'notIn', 'not', 'is', 'isNot'] as const;
const sortableFilterProps = ['lt', 'lte', 'gt', 'gte'] as const;
const stringFilterOps = [...filterOps, 'contains', 'startsWith', 'endsWith'] as const;
const sortableTypes = ['String', 'Int', 'Float', 'DateTime', 'BigInt'] as const;
const listOps = ['every', 'some', 'none'] as const;
const scalarListOps = ['has', 'hasSome', 'hasEvery', 'isEmpty', 'equals'] as const;

export default class Generator<Types extends SchemaTypes> {
  private dmmf;
  private builder;

  private filters = new WeakMap<String, InputType<Types>>();

  constructor(builder: PothosSchemaTypes.SchemaBuilder<Types>, dmmf: BaseDMMF) {
    this.dmmf = dmmf;
    this.builder = builder;

    this.initFilters();
  }
  
  // constructor(ddmf: BaseDMMF) {
  //   ddmf.datamodel.models.map(model => {
  //     this.buildObject(model);
  //   })
  // }

  initFilters() {
    this.filters.set('String', this.builder.prismaFilter('String', { ops: ['contains', 'equals', 'startsWith', 'not'] }));
    this.filters.set('Boolean', this.builder.prismaFilter('Boolean', { ops: ['contains', 'equals', 'startsWith', 'not'] }));
  }

  getScalarFilter(name: string): InputType<Types> {

  }

  getFilter(name: string): InputType<Types> {
    const filter = this.filters[name]
  }

  buildFilter(name: Prisma.DMMF.Field): InputType<Types> {
    const model = this.dmmf.datamodel.models.find(model => model.name === name);
    return this.builder.prismaWhere(name as any, {
      fields: model?.fields.reduce((obj, field) => ({
        ...obj,
        [field.name]: field.kind === 'scalar' ? this.getScalarFilter(field.type) : this.getFilter(field.type),
      }), {}),
    });
  }

  getOrderBy(name: string): InputType<Types> {} 

  buildObject(model: Prisma.DMMF.Model) {
    this.builder.prismaObject(model.name as any, {
      fields: (t) => model.fields.reduce((obj, field) => ({
        ...obj,
        [field.name]: field.relationName
          ? t.relation(field.name, {
            args: {
              where: t.arg({ type: this.getFilter(field) }),
              orderBy: t.arg({ type: this.getOrderBy(field) }),
            },
            query: ({ where, orderBy }, context) => ({
              ...where ? { where } : {},
              ...orderBy ? { orderBy } : {},
            })
          })
          : t.expose(field.name as any, { type: field.type })
      }), {})
    });
      
  }

  build() {
    Prisma.dmmf.datamodel.models.forEach((model) => {
      generator.addWhere(model.name);
      generator.addWhereUnique(model.name);
      generator.addOrderBy(model.name);
      generator.addCreate(model.name);
      generator.addUpdate(model.name);
    });
  }
};
