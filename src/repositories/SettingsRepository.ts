import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

//Imported from entities
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export{SettingsRepository};
