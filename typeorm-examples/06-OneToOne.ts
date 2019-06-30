import "reflect-metadata";
import { createConnection } from "typeorm";
import User from "./src/entity/User";
import UserProfile from "./src/entity/UserProfile";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const user = await User.create({ name: "Morten" }).save();
  const userProfile = await UserProfile.create({
    email: "mortenoh@gmail.com",
    user: user,
  }).save();

  const users = await User.find({ relations: ["profile"] });
  console.log(JSON.stringify(users, null, 2));
})();
