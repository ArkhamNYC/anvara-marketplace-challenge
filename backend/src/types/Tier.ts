import { builder } from "../builder";

builder.prismaObject("Tier", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    price: t.exposeFloat("price"),
    description: t.exposeString("description", { nullable: true }),
    eventId: t.exposeInt("eventId"),
    event: t.relation("event"),
  }),
});
