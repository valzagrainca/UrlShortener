import express from 'express';
import bodyParser from 'body-parser';
import urlRoutes from './routes/urlRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.use(urlRoutes);
  

app.listen(process.env.PORT, ():void=>{
    console.log("Server Running");
})

