import { useContext } from 'react'
import './searchBar.css'
import { ExampleContext } from '../../navigationBar/navigationBar'


export const SearchBar = () => {
    const exampleContextValue = useContext(ExampleContext)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        exampleContextValue.setText(e.target.value)
    }

    return <>
        <div id="searchBar">
            <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" alt="" />
            <input type="text" placeholder="Escribe algo" onChange={handleOnChange} />
            <p>{exampleContextValue.value}</p>
        </div>
    </>
}