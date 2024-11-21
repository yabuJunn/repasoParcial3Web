import { createContext } from "react"

interface SearchContextType {
    searchValue: string,
    setSearchValue: (value: React.SetStateAction<string>) => void
}

export const SearchContext = createContext<SearchContextType>({
    searchValue: '',
    setSearchValue: function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.' + value)
    }
})