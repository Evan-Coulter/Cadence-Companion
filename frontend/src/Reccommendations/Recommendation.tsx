import CCSearchResponse from "../models/CCSearchResponse"
import './Recommendation.css'

type Props = {
    recommendation: CCSearchResponse
}

const Recommendation = ({recommendation} : Props) => {
    return (
        <a className="recommendation_a" target="_blank" href={recommendation.spotifyUrl as string}>
            <div className="recommendation">
                <div className="recommendation_top_content">
                    <img className="recommendation_img" src={recommendation.imageUrls?.at(0)}/>
                    <p className="recommendation_title">{recommendation.songName}</p>
                </div>
                <p className="recommendation_artist">{recommendation.artistNames?.at(0)}</p>
            </div>
        </a>    
    )
}

export default Recommendation