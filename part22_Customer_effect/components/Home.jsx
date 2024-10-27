import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList';
// import {useOutletContext} from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] =useTheme();
  return (
    <main className={`${isDark? 'dark':''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}