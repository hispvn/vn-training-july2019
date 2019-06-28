import "reflect-metadata";
import { createConnection, AdvancedConsoleLogger } from "typeorm";

(async () => {
  const con = await createConnection();
  const res = await con.query("SELECT 1");
  console.log(res);
})();
