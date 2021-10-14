// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import education from "./education";
import job from "./job";
import landing from "./landing";
import project from "./project";
import richText from "./richText";
import company from "./company";
import details from "./details";
import stack from "./stack";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    education,
    job,
    landing,
    project,
    richText,
    company,
    details,
    stack,
  ]),
});
