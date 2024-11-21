import { useContext } from 'react'
import './searchBar.css'
import { SearchContext } from '../../../context/searchContext'


export const SearchBar = () => {
    const searchContext = useContext(SearchContext)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchContext.setSearchValue(e.target.value)
    }

    return <>
        <div id="searchBar">
            <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" alt="" />
            <input type="text" placeholder="Escribe algo" onChange={handleOnChange} />
        </div>
    </>
}