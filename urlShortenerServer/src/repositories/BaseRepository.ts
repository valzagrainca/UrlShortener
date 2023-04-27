import Url from '../models/urls';
import db from '../util/database';
import { IBaseRepository } from './IBaseRepository';

export class BaseRepository implements IBaseRepository{
    async create(fullUrl: string, shortUrl: string, expirationDate: any): Promise<boolean> {
        const queryResult = await db.query(
          `INSERT INTO urls(long_url, short_url, expired_at)
           VALUES ($1, $2, COALESCE($3, NOW() + INTERVAL '1 hour'))`,
          [fullUrl, shortUrl, expirationDate]
        );
      
        return queryResult.rowCount === 1;
    }
      

    async selectAll(): Promise<any[]>{
        const queryResult=await db.query('SELECT * FROM urls');
        return queryResult.rows;
    }

    async findByShortUrl(shortUrl:string): Promise<Url>{
        const queryResult=await db.query('Select * FROM urls WHERE short_url=$1',[shortUrl]);
        return queryResult.rows[0];
    }
}