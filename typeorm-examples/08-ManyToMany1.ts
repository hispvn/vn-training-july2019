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

  const de1 = await DataElement.create({ name: "DE1" }).save();
  const de2 = await DataElement.create({ name: "DE2" }).save();
  const de3 = await DataElement.create({ name: "DE3" }).save();

  const deg = await DataElementGroup.create({
    name: "DEG1",
    dataElements: [de1, de2, de3],
  }).save();

  console.log(await DataElement.find({ relations: ["groups"] }));
  console.log(await DataElementGroup.find({ relations: ["dataElements"] }));
})();
