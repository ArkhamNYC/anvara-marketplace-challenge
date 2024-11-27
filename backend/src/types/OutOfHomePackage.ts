import { builder } from "../builder";

builder.prismaObject("OutOfHomePackage", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    packageName: t.exposeString("packageName"),
    price: t.exposeFloat("price"),
    duration: t.exposeInt("duration"),
  }),
});
