// TODO: convert this to middleware.

import { AxiosResponse } from "axios";

const axios = require('axios');
const qs = require('qs');
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


let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://accounts.spotify.com/api/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded' 
  },
  data : data
};

axios.request(config)
  .then((response: AxiosResponse) => {
    accessToken = response.data as AccessToken
    accessToken.expires_in*=1000
    accessToken.time_created = Date.now()
  })
  .catch((error: Error) => {
    console.log(error);
  });

const getAccessToken = () => {
  return accessToken
}

export default getAccessToken