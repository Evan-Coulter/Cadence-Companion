import CCSearchResponse from '../models/CCSearchResponse'
import Example from './Example'
import './Examples.css'

type Props = {
  onClickRecommendation: (recommendation: CCSearchResponse) => void
}

const Examples = ({onClickRecommendation} : Props) => {
  const getSong = (songName: string, artistName: string, spotifyUrl: string, songId: string, imageUrls: string[]) => {
    const song: CCSearchResponse = {
      songId: songId,
      artistNames: [artistName],
      songName: songName,
      spotifyUrl: spotifyUrl,
      imageUrls: imageUrls
    }
    return song
  }
  const examples: CCSearchResponse[] = [
    getSong("“Die For You - Remix”", "The Weeknd", "https://open.spotify.com/track/7oDd86yk8itslrA9HRP2ki", "7oDd86yk8itslrA9HRP2ki", ["https://i.scdn.co/image/ab67616d0000b2738de12a274f6e1df6634f57ec"]),
    getSong("Lavender Haze", "Taylor Swift", "https://open.spotify.com/track/5jQI2r1RdgtuT8S3iG8zFC", "5jQI2r1RdgtuT8S3iG8zFC", ["https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"]),
    getSong("“Circles”", "Post Malone", "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb", "21jGcNKet2qwijlDFuPiPb", ["https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02"]),
    getSong("“Family Ties”", "Baby Keem", "https://open.spotify.com/track/3QFInJAm9eyaho5vBzxInN", "3QFInJAm9eyaho5vBzxInN", ["https://i.scdn.co/image/ab67616d0000b2731bfa23b13d0504fb90c37b39"]),
    getSong("“Look at the Sky”", "Porter Robinson", "https://open.spotify.com/track/5lXNcc8QeM9KpAWNHAL0iS", "5lXNcc8QeM9KpAWNHAL0iS", ["https://i.scdn.co/image/ab67616d0000b2737d6ac8b4a84ad4b342050d87"]),
    getSong("“Nights Like This”", "Kehlani", "https://open.spotify.com/track/6ZRuF2n1CQxyxxAAWsKJOy", "6ZRuF2n1CQxyxxAAWsKJOy", ["https://i.scdn.co/image/ab67616d0000b273cccb973e9ff7440fbaf8485e"])
  ]

  return (
  <section className='examples'>
    <div className='examples_inner'>
      <p className="examples_header">Examples</p>
      <div className='examples_grid'>
        {examples.map((example)=><Example key={example.songId} song={example} onClickRecommendation={onClickRecommendation}/>)}
      </div>
    </div>
  </section>)
}

export default Examples