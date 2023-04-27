import Url from "../models/urls";
export interface IBaseRepository{
    create(fullUrl: string, shortUrl: string, expirationDate: any): Promise<boolean>;
    selectAll(): Promise<any[]>;
    findByShortUrl(shortUrl:string):Promise<Url>;
}