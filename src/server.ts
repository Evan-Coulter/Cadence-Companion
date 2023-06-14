// Dotenv config
import * as dotenv from 'dotenv'
dotenv.config()

// Imports
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from "path"; 
import { fetchSearchIds, fetchSearchRecommendations } from '../controllers/searchController';
import { refreshToken } from '../middleware/getToken';

// Setup express
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())
// Set CORS header
app.use((req, res, next) => {
  res.setHeader("Access-control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  next()
})
app.use(express.static(path.join("frontend", "dist"))) 
const port = process.env.PORT
app.listen(port, () => { console.log(`Server is running on port ${port}`); });

// Routing 
app.get('/', (req: Request, res: Response) => { res.send('Hello, Express with TypeScript!'); });
app.get('/search/:query', refreshToken, fetchSearchIds)
app.get('/search/id/:id', refreshToken, fetchSearchRecommendations)
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")) 
}) 
