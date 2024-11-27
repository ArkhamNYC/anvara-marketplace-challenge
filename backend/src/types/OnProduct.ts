import { builder } from "../builder";

builder.prismaObject("OnProduct", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
    startDate: t.expose("startDate", { type: "DateTime" }),
    endDate: t.expose("endDate", { type: "DateTime" }),
    pricePerUnit: t.exposeFloat("pricePerUnit"),
    totalUnits: t.exposeInt("totalUnits"),
    listings: t.relation("listings"),
  }),
});
