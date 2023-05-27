// Dotenv config
import * as dotenv from 'dotenv'
dotenv.config()

// Imports
import express, { Request, Response } from 'express';
import getAccessToken, { AccessToken } from './getToken';
import axios, { AxiosResponse } from 'axios';
import { SpotifySearchResponse } from './SpotifySearchResponse';

// Setup express
const app = express();
app.use(express.json())
const port = process.env.PORT

// Routes
app.get('/', (req: Request, res: Response) => {
  const token = getAccessToken()
  console.log(token)
  res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/search', async (req: Request, res: Response) => {
  //const data = req.body as CCRequestBody
  const axios = require('axios');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.spotify.com/v1/search?q=it+was+a+good+day&type=track&limit=20&offset=0',
    headers: { 
      'Authorization': `Bearer ${getAccessToken()?.access_token}`
    }
  };

  axios.request(config)
  .then((response: AxiosResponse) => {
    if (response.status == 200) {
      const spotifyResponse = response.data as SpotifySearchResponse
      res.send(spotifyResponse.tracks.items.map((item)=>{return {artists:item.artists.map(artist=>artist.name), name:item.name}}));
    } else {
      res.sendStatus(401)
    }
  })
  .catch((error: Error) => {
    console.log(error)
    res.sendStatus(401)
  });

})