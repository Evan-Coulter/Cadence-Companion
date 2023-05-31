import { useDeferredValue, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const differedSearchQuery = useDeferredValue(searchQuery)
  return (
    <div className="app">
      <Navbar/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className='inner-content'>Results</div>
    </div>
  )
}

export default App
