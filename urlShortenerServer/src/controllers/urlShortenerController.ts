import { Request,Response } from "express";
import { BaseRepository } from "../repositories/BaseRepository";
import { nanoid } from 'nanoid';
import { generateShortId } from "../util/short-id-generator";

export class urlShortenerController{
    constructor(private baseRepository:BaseRepository){};
    postUrl=async (req:Request, res:Response):Promise<void>=>{
        const url = req.body.fullUrl;
        const expirationDate = req.body.expirationDate ? req.body.expirationDate : null;
        const shortUrlId = req.body.shortUrlId;
        const shortUrl = await this.getShortUrlId(shortUrlId);
        if(shortUrl){
            const result=await this.baseRepository.create(url,await shortUrl,expirationDate);
            if (result===true){
                const returnUrl = await this.baseRepository.findByShortUrl(shortUrl);
                res.json(returnUrl);
            }
        }
        else{
            res.status(403).json({"message":"Short url error"});
        }
    }

    getUrls=async (req:Request, res:Response):Promise<void>=>{
        const urls = await this.baseRepository.selectAll();
        res.json({"urls":urls});
    }

    getShortUrl = async (req: Request, res: Response): Promise<void> => {
        const shortUrl = await this.baseRepository.findByShortUrl(req.params.shortUrl);
        const expirationDate = new Date(shortUrl.expired_at);
        const currentDate = new Date();
      
        if (currentDate > expirationDate) {
          res.redirect('http://localhost:4200/error-page');
        } else {
          res.redirect(shortUrl.long_url);
        }
      };
      

    getShortUrlId=async(shortUrlId:string)=>{
        if(!!shortUrlId){
            if(await this.shortUrlExists(shortUrlId)){
                return null;
            }
            return shortUrlId;
        }
        else{
            return await this.generatedShortId();
        }
    }

    generatedShortId=async()=>{
        let shortId:string;
        do {
          shortId = generateShortId();
        } while (await this.shortUrlExists(shortId));
        return shortId;
    }

    shortUrlExists = async (shorturl: string): Promise<boolean> => {
        const result = await this.baseRepository.findByShortUrl(shorturl);
        return result !== null && result !== undefined;
    }
      
}