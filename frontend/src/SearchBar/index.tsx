import './SearchBar.css'

type Props = {
  searchQuery: string,
  setSearchQuery: (value: string) => void
}

const SearchBar = ({searchQuery, setSearchQuery}: Props) => {
  return (
    <section className='search_bar_container'>
      <input
        type='text'
        className="search_bar"
        placeholder="Enter song title here to get recommendations." 
        value={searchQuery}
        name="songSearchBar"
        onChange={e=>{
          console.log(searchQuery)
          setSearchQuery(e.target.value)
        }}/>
    </section>
  )
}

export default SearchBar