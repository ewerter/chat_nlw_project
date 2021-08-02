import {request, response, Router} from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controller/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepository";
import {UsersController} from "./controller/UsersController";

const routes = Router();
const settingsController = new SettingsController;
const usersController = new UsersController; 

routes.post("/settings", settingsController.create)
routes.post("/users", usersController.create)

export {routes};