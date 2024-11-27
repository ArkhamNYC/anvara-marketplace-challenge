import { builder } from "../builder";

builder.prismaObject("Bid", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    auctionId: t.exposeInt("auctionId"),
    amount: t.exposeInt("amount"),
    createdAt: t.expose("createdAt", {
      type: "DateTime",
    }),
    auction: t.relation("auction"),
  }),
});
