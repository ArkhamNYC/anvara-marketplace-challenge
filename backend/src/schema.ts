import { builder } from "./builder";

import "./types/Company";
import "./types/Event";
import "./types/Listing";
import "./types/Location";
import "./types/OnProduct";
import "./types/OutOfHome";
import "./types/OutOfHomePackage";
import "./types/Tier";

export const schema = builder.toSchema();
