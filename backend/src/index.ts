// Dotenv config
import * as dotenv from 'dotenv'
dotenv.config()

// Imports
import express, { Request, Response } from 'express';
import getAccessToken from './getToken';
import axios from 'axios';
import { Item, SpotifySearchResponse } from './SpotifySearchResponse';

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

type CCSearchRequestData = {
  querySongName: string,
} 

type CCSearchResponseData = {
  songName: string | null, 
  songId: string | null,
  artistNames: string[] | null,
  imageUrls: string[] | null
}

app.get('/search', async (req: Request, res: Response) => {
  try {
    //Get input query from user.
    const data = req.body as CCSearchRequestData
    //Check if query is blank
    if (data.querySongName.length === 0 || data.querySongName.trim() === '') {
      res.status(400).send({message: 'querySongName is blank'})
      return
    }
    //Format query input for spotify api.
    const formattedQuery = data.querySongName.split(" ").join("+")
    //Create auth header with access token.
    let config = {
      headers: { 
        'Authorization': `Bearer ${getAccessToken()?.access_token}`
      }
    };
    //Get search results from spotify server.
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${formattedQuery}&type=track&limit=20&offset=0`, config)
    if (response.status == 200) {
      const spotifyResponse = response.data as SpotifySearchResponse
      const responseItems = spotifyResponse.tracks.items.map((item: Item)=>{
        const newItem: CCSearchResponseData = {
          songName: item.name,
          songId: item.id,
          artistNames: item.artists.map((artist)=>artist.name),
          imageUrls: item.album.images.map((image)=>image.url),        
        }
        return newItem
      })
      res.send(responseItems);
    } else {
      const message = 'spotify api returned an error'
      console.log(`${message} \n ${response}`)
      res.status(500).send({message})
    }
  } catch (error) {
    const message = 'internal server had an error'
    console.log(`${message}`)
    res.status(500).send({message})
  }
})