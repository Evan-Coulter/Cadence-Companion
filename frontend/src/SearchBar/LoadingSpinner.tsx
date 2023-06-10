import { ThreeDots } from "react-loader-spinner"

type Props = {
    loading: boolean | null
}

const LoadingSpinner = ({loading} : Props) => {
    return (<div className="loading_spinner">
        {loading && 
            <div>
                <ThreeDots
                    height="40" 
                    width="40" 
                    radius="9"
                    color="#EE8191" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    visible={true}/>
            </div>
        }
    </div>)
}

export default LoadingSpinner