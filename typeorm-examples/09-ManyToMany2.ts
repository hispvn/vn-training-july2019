import "reflect-metadata";
import { createConnection } from "typeorm";

import DataElement from "./src/entity/DataElement";
import DataElementGroup from "./src/entity/DataElementGroup";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const deg = await DataElementGroup.create({ name: "DEG1" }).save();

  const de1 = await DataElement.create({ name: "DE1", groups: [deg] }).save();
  const de2 = await DataElement.create({ name: "DE2", groups: [deg] }).save();
  const de3 = await DataElement.create({ name: "DE3", groups: [deg] }).save();

  console.log(await DataElement.find({ relations: ["groups"] }));
  console.log(await DataElementGroup.find({ relations: ["dataElements"] }));
})();
