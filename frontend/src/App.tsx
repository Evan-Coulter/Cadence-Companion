import { useDeferredValue, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Examples from './Examples'

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const differedSearchQuery = useDeferredValue(searchQuery)
  return (
    <div className="app">
      <Navbar/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Examples/>
    </div>
  )
}

export default App
