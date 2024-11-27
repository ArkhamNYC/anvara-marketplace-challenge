import { builder } from "../builder";

builder.prismaObject("Event", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    startDate: t.expose("startDate", { type: "DateTime" }),
    endDate: t.expose("endDate", { type: "DateTime" }),
    description: t.exposeString("description"),
    tiers: t.relation("tiers"),
  }),
});
