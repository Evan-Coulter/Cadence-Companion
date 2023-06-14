type CCSearchResponse = {
  songName: string | null, 
  songId: string | null,
  artistNames: string[] | null,
  imageUrls: string[] | null,
  spotifyUrl: string | null
}

export default CCSearchResponse