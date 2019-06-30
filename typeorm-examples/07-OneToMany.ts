import "reflect-metadata";
import { createConnection } from "typeorm";

import DataElementGroup from "./src/entity/DataElementGroup";
import DataElementGroupSet from "./src/entity/DataElementGroupSet";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const deg1 = await DataElementGroup.create({ name: "DEG1" }).save();
  const deg2 = await DataElementGroup.create({ name: "DEG2" }).save();

  const degs1 = await DataElementGroupSet.create({
    name: "DEGS1",
    groups: [deg1, deg2],
  }).save();

  const groups = await DataElementGroup.find({ relations: ["groupSet"] });
  console.log(groups);
})();
