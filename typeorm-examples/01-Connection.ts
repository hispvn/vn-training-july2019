import "reflect-metadata";
import { createConnection, AdvancedConsoleLogger } from "typeorm";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const res = await con.query("SELECT 1");
  console.log(res);
})();
