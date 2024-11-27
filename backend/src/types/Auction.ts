import { builder } from "../builder";

builder.prismaObject("Auction", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    currentPrice: t.exposeInt("currentPrice"),
    status: t.expose("status", {
      type: builder.enumType("AuctionStatus", {
        values: ["ACTIVE", "ENDED"],
      }),
    }),
    endTime: t.expose("endTime", {
      type: "DateTime",
    }),
    bids: t.relation("bids"),
    createdAt: t.expose("createdAt", {
      type: "DateTime",
    }),
  }),
});
