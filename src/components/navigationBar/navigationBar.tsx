import { SearchBar } from '../dashboardPage/searchBar/searchBar'
import './navigationBar.css'

export const NavigationBar = () => {

    return <>
        <div id="navigationBar">
            <p>Search</p>
            <p>Detail</p>
            <p>Quiz</p>
            <SearchBar></SearchBar>
        </div>
    </>
}