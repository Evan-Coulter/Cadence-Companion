import CCSearchResponse from "../models/CCSearchResponse"
import './Example.css'

type Props = {
    song: CCSearchResponse
    onClickRecommendation: (recommendation: CCSearchResponse) => void
}

const Example = ({song, onClickRecommendation}: Props) => {
    return (<div>
        <li className='example' onClick={()=>{onClickRecommendation(song)}}>
          <p className='example_title'>{song.songName}</p>
          <p className='example_artist'>{song.artistNames?.at(0)}</p>
        </li>
    </div>)
}

export default Example