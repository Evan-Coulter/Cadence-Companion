// Dotenv config
import * as dotenv from 'dotenv'
dotenv.config()

// Imports
import express, { Request, Response } from 'express';
import { fetchSearchIds, fetchSearchRecommendations } from '../controllers/searchController';

// Setup express
const app = express();
app.use(express.json())
const port = process.env.PORT
app.listen(port, () => { console.log(`Server is running on port ${port}`); });

// Routing 
app.get('/', (req: Request, res: Response) => { res.send('Hello, Express with TypeScript!'); });
app.get('/search', fetchSearchIds)
app.get('/search/:id', fetchSearchRecommendations)