import { builder } from "../builder";

builder.prismaObject("OutOfHome", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    startDate: t.expose("startDate", { type: "DateTime" }),
    endDate: t.expose("endDate", { type: "DateTime" }),
    packages: t.relation("packages"),
  }),
});
