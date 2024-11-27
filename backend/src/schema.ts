import { builder } from "./builder";

import "./types/Auction";
import "./types/Bid";

export const schema = builder.toSchema();
