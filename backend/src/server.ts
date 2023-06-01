// Dotenv config
import * as dotenv from 'dotenv'
dotenv.config()

// Imports
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fetchSearchIds, fetchSearchRecommendations } from '../controllers/searchController';
import { refreshToken } from '../middleware/getToken';

// Setup express
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(cors())
const port = process.env.PORT
app.listen(port, () => { console.log(`Server is running on port ${port}`); });

// Routing 
app.get('/', (req: Request, res: Response) => { res.send('Hello, Express with TypeScript!'); });
app.get('/search/:query', refreshToken, fetchSearchIds)
app.get('/search/id/:id', refreshToken, fetchSearchRecommendations)