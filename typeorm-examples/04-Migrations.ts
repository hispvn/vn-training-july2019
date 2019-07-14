import "reflect-metadata";
import { createConnection } from "typeorm";
import Person from "./src/entity/Person";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
  });

  await con.runMigrations();

  const person1 = Person.create({
    name: "Morten1",
    email: "mortenoh@gmail.com",
    tags: ["engineer", "java", "javascript"],
    profile: { a: 1, b: 2, c: 3 },
  });

  await person1.save();

  const p = await Person.find();
  console.log(p);
})();
