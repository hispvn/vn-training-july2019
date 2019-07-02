import "reflect-metadata";
import { createConnection } from "typeorm";
import User2 from "./src/entity/User2";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  await User2.create({ username: "user1", isActive: true }).save();
  await User2.create({ username: "user1", isActive: true }).save();
  await User2.create({ username: "user1", isActive: false }).save();
  await User2.create({ username: "user1", isActive: false }).save();
  await User2.create({ username: "user1", isActive: false }).save();
  await User2.create({ username: "user1", isActive: true }).save();
  await User2.create({ username: "user1", isActive: true }).save();
  await User2.create({ username: "user1", isActive: true }).save();

  const inactiveUsers = await User2.findByActive(false);
  console.log(inactiveUsers);
})();
