import{ Request, Response} from "express";
import{getCustomRepository} from "typeorm";
import{SettingsRepository} from "../repositories/SettingsRepository";
import {SettingsService} from "../Services/SettingsService";


class SettingsController {

    async create(request: Request, response: Response){
        const {chat, username} = request.body;
        
        const settingsService = new SettingsService();

        //try catch to deal with the request and throw an error if necessary
        
        try {
            const settings = await settingsService.create({chat, username});
        
            return response.json(settings);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            })
            
        }
        
    }
}

export {SettingsController}