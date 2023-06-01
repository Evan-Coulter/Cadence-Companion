import { useDeferredValue, useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Examples from './Examples'
import axios from 'axios'
import CCSearchResponse from './models/CCSearchResponse'

function App() {
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

  return (
    <div className="app">
      <Navbar/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Examples/>
    </div>
  )
}

export default App
