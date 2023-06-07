import CCSearchResponse from '../models/CCSearchResponse'
import './SearchBar.css'
import SearchResult from './SearchResult'

type Props = {
  searchQuery : string
  setSearchQuery : (value: string) => void
  searchResults : CCSearchResponse[] | null
  onClickSearchResult: (searchResult: CCSearchResponse)=>void
}

const SearchBar = ({searchQuery, setSearchQuery, searchResults, onClickSearchResult}: Props) => {
  return (
    <section className='search_bar_container'>
      <input
        type='text'
        className="search_bar"
        placeholder="Enter song title here to get recommendations." 
        value={searchQuery}
        name="songSearchBar"
        onChange={e=>{
          setSearchQuery(e.target.value)
        }}/>
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