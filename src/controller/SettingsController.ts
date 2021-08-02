import{ Request, Response} from "express";
import{getCustomRepository} from "typeorm";
import{SettingsRepository} from "../repositories/SettingsRepository";
import {SettingsService} from "../Services/SettingsService";


class SettingsController {

    async create(request: Request, response: Response){
        const {chat, username} = request.body;
        
        const settingsService = new SettingsService();
        
        const settings = await settingsService.create({chat, username});
        
        return response.json(settings);
    }
}

export {SettingsController}