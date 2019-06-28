import "reflect-metadata";
import { createConnection, AdvancedConsoleLogger } from "typeorm";
import Person from "./src/entity/Person";

(async () => {
  const con = await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
  });

  const person1 = Person.create({
    name: "Morten1",
    email: "mortenoh@gmail.com",
    tags: ["engineer", "java", "javascript"],
    profile: { a: 1, b: 2, c: 3 },
  });

  const person2 = Person.create({
    name: "Morten2",
    email: "mortenoh@gmail.com",
    tags: ["engineer", "java", "javascript"],
    profile: { a: 1, b: 2, c: 3 },
  });

  const person3 = Person.create({
    name: "Morten3",
    email: "mortenoh@gmail.com",
    tags: ["engineer", "java", "javascript"],
    profile: { a: 1, b: 2, c: 3 },
  });

  await person1.save();
  await con.getRepository(Person).save(person2);
  await con.manager.save(person3);

  const p = await Person.find();
  console.log(p);
})();
