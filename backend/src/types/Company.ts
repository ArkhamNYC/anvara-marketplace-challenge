import { builder } from "../builder";

builder.prismaObject("Company", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    listings: t.relation("listings"),
  }),
});
