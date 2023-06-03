import CCSearchResponse from '../models/CCSearchResponse'
import './SearchResult.css'

type Props = {
  searchResult: CCSearchResponse
  onClickSearchResult: (searchResult: CCSearchResponse)=>void
}

const SearchResult = ({ searchResult, onClickSearchResult }: Props) => {
  return (
    <div className='search_result' onClick={()=>{onClickSearchResult(searchResult)}}>
      <p className='search_result_title'>{searchResult.songName}</p>
      <div className='search_result_right_side'>
        <p className='search_result_artist'>{searchResult.artistNames?.at(0)}</p>
        <img className='search_result_img' src={searchResult.imageUrls?.at(0)}/>
      </div>
    </div>
  )
}

export default SearchResult