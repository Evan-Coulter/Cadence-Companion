import CCSearchResponse from "../models/CCSearchResponse"
import Recommendation from "./Recommendation"
import './Recommendations.css'

type Props = {
    recommendations: CCSearchResponse[]
}

const Recommendations = ({recommendations} : Props) => {
    return (
        <section className="recommendations">
            <p className="recommendations_title">Recommendations</p>
            <div className="recommendations_content">
                {recommendations.map((it)=>{return <Recommendation recommendation={it} key={it.songId}/>})}
            </div>
        </section>
    )
}


export default Recommendations