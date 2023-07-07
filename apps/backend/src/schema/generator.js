"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("lodash");
const client_1 = require("@prisma/client");
const filterOps = ['equals', 'in', 'notIn', 'not', 'is', 'isNot'];
const sortableFilterProps = ['lt', 'lte', 'gt', 'gte'];
const stringFilterOps = [...filterOps, 'contains', 'startsWith', 'endsWith'];
const sortableTypes = ['String', 'Int', 'Float', 'DateTime', 'BigInt'];
const listOps = ['every', 'some', 'none'];
const scalarListOps = ['has', 'hasSome', 'hasEvery', 'isEmpty', 'equals'];
class Generator {
    dmmf;
    builder;
    filters = new WeakMap();
    constructor(builder, dmmf) {
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
    getScalarFilter(name) {
    }
    getFilter(name) {
        const filter = this.filters[name];
    }
    buildFilter(name) {
        const model = this.dmmf.datamodel.models.find(model => model.name === name);
        return this.builder.prismaWhere(name, {
            fields: model?.fields.reduce((obj, field) => ({
                ...obj,
                [field.name]: field.kind === 'scalar' ? this.getScalarFilter(field.type) : this.getFilter(field.type),
            }), {}),
        });
    }
    getOrderBy(name) { }
    buildObject(model) {
        this.builder.prismaObject(model.name, {
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
                    : t.expose(field.name, { type: field.type })
            }), {})
        });
    }
    build() {
        client_1.Prisma.dmmf.datamodel.models.forEach((model) => {
            generator.addWhere(model.name);
            generator.addWhereUnique(model.name);
            generator.addOrderBy(model.name);
            generator.addCreate(model.name);
            generator.addUpdate(model.name);
        });
    }
}
exports.default = Generator;
;
