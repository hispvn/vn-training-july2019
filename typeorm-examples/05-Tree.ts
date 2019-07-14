import "reflect-metadata";
import { createConnection } from "typeorm";
import TreeItem from "./src/entity/TreeItem";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const root = await TreeItem.create({ name: "Root" }).save();
  const childA = await TreeItem.create({ name: "A", parent: root }).save();
  const childB = await TreeItem.create({ name: "B", parent: root }).save();

  const treeRepository = await con.manager.getTreeRepository(TreeItem);
  const roots = await treeRepository.findTrees();

  console.log(JSON.stringify(roots, null, " "));
})();
