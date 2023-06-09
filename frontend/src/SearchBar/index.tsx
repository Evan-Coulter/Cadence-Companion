import { useDeferredValue, useEffect, useState } from 'react'
import CCSearchResponse from '../models/CCSearchResponse'
import './SearchBar.css'
import SearchResult from './SearchResult'

type Props = {
  searchQuery : string
  setSearchQuery : (value: string) => void
  searchResults : CCSearchResponse[] | null
  onClickSearchResult: (searchResult: CCSearchResponse)=>void
  currentRecommendationBase : CCSearchResponse | null
}

const SearchBar = ({searchQuery, setSearchQuery, searchResults, onClickSearchResult, currentRecommendationBase}: Props) => {
  const deferredSearchQuery = useDeferredValue(searchQuery)
  const [inputError, setInputError] = useState<boolean | null>(null)
  useEffect (()=>{
    if (deferredSearchQuery.includes("/")) {
      setInputError(true)
    } else {
      setInputError(null)
    }
  }, [deferredSearchQuery])


  return (
    <section className='search_bar_container'>
      <div className='search_bar'>
        {currentRecommendationBase && <div className='search_bar_right_side'>
          <p className='search_bar_right_side_artist_name'>{currentRecommendationBase.artistNames?.at(0)}</p>
          <img className='search_bar_right_side_img' src={currentRecommendationBase.imageUrls?.at(0)}/>
        </div>}
        <input
          type='text'
          className="search_bar_input"
          placeholder="Enter song title here to get recommendations." 
          value={searchQuery}
          name="songSearchBar"
          onChange={e=>{
            setSearchQuery(e.target.value)
          }}/>
      </div>
      {inputError && <p className='search_bar_error'>Please do not add '/' to the song name.</p>}
      {searchResults && (
        <div className='search_results'>
          {searchResults.map((song: CCSearchResponse)=>{
            return <SearchResult searchResult={song} onClickSearchResult={onClickSearchResult} key={song.songId}/>
          })}
        </div>)
      }
    </section>
  )
}

export default SearchBar