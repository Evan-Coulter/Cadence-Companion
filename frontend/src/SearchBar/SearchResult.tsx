import CCSearchResponse from '../models/CCSearchResponse'
import './SearchResult.css'

type Props = {
  searchResult: CCSearchResponse
}

const SearchResult = ({ searchResult }: Props) => {
  return (
    <div className='search_result'>
      <p>{searchResult.songName}</p>
      <div>
        <p className='search_result_p'>{searchResult.artistNames?.at(0)}</p>
        <img className='search_result_img' src={searchResult.imageUrls?.at(0)}/>
      </div>
    </div>
  )
}

export default SearchResult