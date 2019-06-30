import "reflect-metadata";
import { createConnection } from "typeorm";
import Category from "./src/entity/Category";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const catA = await Category.create({ name: "CatA", description: "CatA" }).save();
  const catC = await Category.create({ name: "CatC", description: "CatC", parent: catA }).save();
  const catB = await Category.create({ name: "CatB", description: "CatB", parent: catA }).save();
  const catD = await Category.create({ name: "CatD", description: "CatD", parent: catB }).save();
  const catE = await Category.create({ name: "CatE", description: "CatE", parent: catB }).save();

  const root = await Category.find({ relations: ["children"] });
  console.log(JSON.stringify(root, null, 2));
})();
