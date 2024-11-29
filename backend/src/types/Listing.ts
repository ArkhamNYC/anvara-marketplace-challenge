import { builder } from "../builder";

builder.prismaObject("Listing", {
  fields: (t: any) => ({
    id: t.exposeInt("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
    startDate: t.expose("startDate", { type: "DateTime", nullable: true }),
    endDate: t.expose("endDate", { type: "DateTime", nullable: true }),
    locationId: t.exposeInt("locationId", { nullable: true }),
    location: t.relation("location", { nullable: true }),
    company: t.relation("company"),
    companyId: t.exposeInt("companyId"),
    eventListingId: t.exposeInt("eventListingId", { nullable: true }),
    oohListingId: t.exposeInt("oohListingId", { nullable: true }),
    onProductListingId: t.exposeInt("onProductListingId", { nullable: true }),
    eventListing: t.relation("eventListing", { nullable: true }),
    oohListing: t.relation("oohListing", { nullable: true }),
    onProductListing: t.relation("onProductListing", { nullable: true }),
  }),
});

builder.queryField("listing", (t) =>
  t.prismaField({
    type: "Listing",
    nullable: true,
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      return ctx.prisma.listing.findUnique({
        ...query,
        where: { id: args.id },
      });
    },
  })
);

builder.queryField("listings", (t) =>
  t.prismaField({
    type: ["Listing"],
    resolve: async (query, root, args, ctx, info) => {
      return ctx.prisma.listing.findMany({
        ...query,
      });
    },
  })
);
