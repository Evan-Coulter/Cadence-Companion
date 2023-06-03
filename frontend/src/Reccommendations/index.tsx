import CCSearchResponse from "../models/CCSearchResponse"
import Recommendation from "./Recommendation"
import './Recommendations.css'

type Props = {
    recommendations: CCSearchResponse[]
}

const Recommendations = ({recommendations: reccommendations} : Props) => {
    return (
        <section className="recommendations">
            <p className="recommendations_title">Recommendations</p>
            <div className="recommendations_content">
                {reccommendations.map((it)=>{return <Recommendation recommendation={it}/>})}
            </div>
        </section>
    )
}


export default Recommendations