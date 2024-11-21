import { createContext, useState } from 'react'
import { SearchBar } from '../dashboardPage/searchBar/searchBar'
import './navigationBar.css'

interface ExampleContextType {
    value: string,
    setText: (value: React.SetStateAction<string>) => void
}

export const ExampleContext = createContext<ExampleContextType>({
    value: '',
    setText: function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.' + value)
    }
})

export const NavigationBar = () => {
    const [text, setText] = useState("")

    return <>
        <ExampleContext.Provider value={{ value: text, setText: setText }}>
            <div id="navigationBar">
                <p>Search</p>
                <p>Detail</p>
                <p>Quiz</p>
                <SearchBar></SearchBar>
            </div>
        </ExampleContext.Provider>
    </>
}