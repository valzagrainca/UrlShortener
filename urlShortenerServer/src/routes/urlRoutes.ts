import express from 'express'
import { urlShortenerController} from '../controllers/urlShortenerController';
import { BaseRepository } from '../repositories/BaseRepository';
import { IBaseRepository } from '../repositories/IBaseRepository';

const router = express.Router();
const baseRepository: IBaseRepository = new BaseRepository();
const urlController = new urlShortenerController(baseRepository);

router.post('/',urlController.postUrl);
router.get('/',urlController.getUrls);
router.get('/:shortUrl',urlController.getShortUrl);


export default router;