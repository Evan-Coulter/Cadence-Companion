import CCSearchResponse from '../models/CCSearchResponse'
import Example from './Example'
import './Examples.css'

const Examples = () => {
  const getSong = (songName: string, artistName: string) => {
    const song: CCSearchResponse = {
      songId: null,
      artistNames: [artistName],
      songName: songName,
      spotifyUrl: null,
      imageUrls: []
    }
    return song
  }
  const examples: CCSearchResponse[] = [
    getSong("“Die for you (Remix)”", "The Weeknd"),
    getSong("“Lavender Haze”", "Taylor Swift"),
    getSong("“Circles”", "Post Malone"),
    getSong("“Family Ties”", "Kendrick Lamar"),
    getSong("“Look at the Sky”", "Porter Robinson"),
    getSong("“Nights Like This”", "Kehlani")
  ]

  return (
  <section className='examples'>
    <div className='examples_inner'>
      <p className="examples_header">Examples</p>
      <div className='examples_grid'>
        {examples.map((example)=><Example song={example}/>)}
      </div>
    </div>
  </section>)
}

export default Examples