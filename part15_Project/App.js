import Header from './components/hearder'
import Searchbar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList';
import './App.css';
const App = () => {
  const [query,setQuery]=useState('')
  return (
    <div>
      <Header/>
      <main>
        <div className="search-filter-container">
        <Searchbar setQuery={setQuery}/>
        <SelectMenu/>
        </div>
      </main>
      <CountriesList query={query}/>
    </div>
  )
}

export default App