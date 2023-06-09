import { useDeferredValue, useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Examples from './Examples'
import axios from 'axios'
import CCSearchResponse from './models/CCSearchResponse'
import Recommendations from './Reccommendations'

function App() {
  const [currentRecommendationBase, setCurrentRecommendationBase] = useState<CCSearchResponse | null>(null)
  const [reccomendations, setReccomendations] = useState<CCSearchResponse[] | null>(null)
  const [searchResults, setSearchResults] = useState<CCSearchResponse[] | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const deferredSearchQuery = useDeferredValue(searchQuery)
  const debounce = useRef<number>()

  useEffect(()=>{
    clearTimeout(debounce.current)
    if (deferredSearchQuery.length == 0 || deferredSearchQuery.includes("/")) {
      return
    }
    debounce.current = setTimeout(async ()=>{
      try {   
        const response = await axios.get(`http://localhost:3000/search/${deferredSearchQuery}`)
        if (response.status == 200) {
          setSearchResults(response.data as CCSearchResponse[])
        }
      } catch (e) {
        console.log(e)
      }
    }, 1000)
  }, [deferredSearchQuery])

  useEffect(()=>{
    if (deferredSearchQuery.length == 0) {
      setSearchResults(null)
    }
  }, [deferredSearchQuery])

  const onClickSearchResult =  async (searchResult: CCSearchResponse) => {
    setSearchResults(null)
    try {
      const response = await axios.get(`http://localhost:3000/search/id/${searchResult.songId}`)
      setReccomendations(response.data)
      setCurrentRecommendationBase(searchResult)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="app">
      <Navbar/>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        searchResults={searchResults}
        onClickSearchResult={onClickSearchResult}
        currentRecommendationBase={currentRecommendationBase}/>
      { !reccomendations && <Examples onClickRecommendation={onClickSearchResult}/> }
      { reccomendations && <Recommendations recommendations={reccomendations}/> }
    </div>
  )
}

export default App
