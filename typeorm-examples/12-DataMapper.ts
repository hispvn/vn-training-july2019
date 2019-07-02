import "reflect-metadata";
import { createConnection } from "typeorm";
import User3 from "./src/entity/User3";
import User3Repository from "./src/User3Repository";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const repo = con.getCustomRepository(User3Repository);

  const u1 = new User3("user1", false);
  const u2 = new User3("user2", true);
  const u3 = new User3("user3", true);
  const u4 = new User3("user4", false);
  const u5 = new User3("user5", true);
  const u6 = new User3("user6", true);
  const u7 = new User3("user7", false);
  const u8 = new User3("user8", true);

  await repo.save([u1, u2, u3, u4, u5, u6, u7, u8]);

  console.log(await repo.findByActive(false));
})();
