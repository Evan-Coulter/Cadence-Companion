import { NextFunction, Request, Response } from "express";
import axios from 'axios';
import qs from 'qs';

let data = qs.stringify({
  'grant_type': 'client_credentials',
  'client_id': process.env.CLIENT_ID,
  'client_secret': process.env.CLIENT_SECRET 
});

let accessToken: AccessToken | null = null

export type AccessToken = {
  access_token: string
  token_type: string,
  expires_in: number,
  time_created: number
}

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://accounts.spotify.com/api/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded' 
  },
  data : data
};

export async function refreshToken(req: Request, res: Response, next: NextFunction) {
  try {
    const refresh = async () => {
      const response = await axios.request(config)
      accessToken = response.data as AccessToken
      accessToken.expires_in *= 1000
      accessToken.time_created = Date.now()  
      console.log(`access token refreshed ${accessToken.time_created}`)
    }
    if (accessToken === null) {
      await refresh()
    } else if (accessToken.time_created + accessToken.expires_in < Date.now()) {
      await refresh()
    }
    next()
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
}

const getAccessToken = () => {
  return accessToken as AccessToken
}

export default getAccessToken