import { builder } from "../builder";

builder.prismaObject("Location", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    address: t.exposeString("address"),
    coordinates: t.exposeFloatList("coordinates"),
  }),
});
