import { EntityRepository, Repository } from "typeorm";
import User3 from "./entity/User3";

@EntityRepository(User3)
class User3Repository extends Repository<User3> {
  findByActive(isActive: boolean) {
    return this.createQueryBuilder("user")
      .where("user.isActive = :isActive", { isActive })
      .getMany();
  }
}

export default User3Repository;
