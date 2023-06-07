import CCSearchResponse from '../models/CCSearchResponse'
import Example from './Example'
import './Examples.css'

const Examples = () => {
  const getSong = (artistName: string, songName: string) => {
    const song: CCSearchResponse = {
      songId: null,
      artistNames: [artistName],
      songName: songName,
      spotifyUrl: null,
      imageUrls: []
    }
    return song
  }

  return (
  <section className='examples'>
    <div className='examples_inner'>
      <p className="examples_header">Examples</p>
      <ul className='examples_inner_content'>
        <Example song={getSong("Die for you (Remix)", "The Weeknd")}/>
        <Example song={getSong("Lavender Haze", "Taylor Swift")}/>
        <Example song={getSong("Circles", "Post Malone")}/>
      </ul>
      <ul className='examples_inner_content'>
        <Example song={getSong("“Family Ties”", "Kendrick Lamar")}/>
        <Example song={getSong("“Look at the Sky”", "Porter Robinson")}/>
        <Example song={getSong("“Nights Like This”", "Kehlani")}/>
      </ul>
    </div>
  </section>)
}

export default Examples