import getAccessToken from "../middleware/getToken"
import CCSearchRequest from "../models/CCSearchRequest"
import { Request, Response } from 'express';
import axios from 'axios';
import CCSearchResponse from "../models/CCSearchResponse";
import { SpotifySearchResponse, Item } from '../models/SpotifySearchResponse';
import { SpotifyRecommendationResponse } from "../models/SpotifyRecommendationResponse";

export async function fetchSearchIds(req: Request, res: Response) {
  try {
    //Get input query from user.
    const query = req.params.query
    //Format query input for spotify api.
    const formattedQuery = query.split(" ").join("+")
    //Create auth header with access token.
    let config = {
      headers: { 
        'Authorization': `Bearer ${getAccessToken().access_token}`
      }
    }
    //Get search results from spotify server.
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${formattedQuery}&type=track&limit=20&offset=0`, config)
    if (response.status == 200) {
      const spotifyResponse = response.data as SpotifySearchResponse
      const responseItems = spotifyResponse.tracks.items.map((item: Item)=>{
        const newItem: CCSearchResponse = {
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
  } catch (error: any) {
    const message = 'internal server had an error'
    console.log(`${message} + ${req}`)
    res.status(500).send({message})
    console.log("Error", error.stack);
    console.log("Error", error.name);
    console.log("Error", error.message);
  }
}

export async function fetchSearchRecommendations(req: Request, res: Response) {
  try {
    const id = req.params.id
    let config = {
      headers: { 
        'Authorization': `Bearer ${getAccessToken().access_token}`
      }
    };
    const response = await axios.get(`https://api.spotify.com/v1/recommendations?seed_tracks=${id}`, config)
    if (response.status == 200) {
      const spotifyResponse = response.data as SpotifyRecommendationResponse
      const recommendations: CCSearchResponse[] = spotifyResponse.tracks.map((item)=>{
        const newItem: CCSearchResponse = {
          songName: item.name,
          songId: item.id,
          artistNames: item.artists.map((artist)=>artist.name),
          imageUrls: item.album.images.map((image)=>image.url),        
        }
        return newItem
      })
      res.send(recommendations)
    } else {
      const message = 'spotify api returned an error'
      console.log(`${message} \n ${response}`)
      res.status(500).send({message})
    }
  } catch (error: any) {
    const message = 'internal server had an error'
    console.log(`${message} + ${req}`)
    res.status(500).send({message})
    console.log("Error", error.stack);
    console.log("Error", error.name);
    console.log("Error", error.message);
  }
}