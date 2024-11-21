import './dashboardPage.css'

import { useEffect, useState } from "react"
import { fetchApi } from "../../services/fetch"
import { CatApiResponseType } from "../../types/catApiTypes"
import { NavigationBar } from '../../components/navigationBar/navigationBar'

export const DashboardPage = () => {
    const [apiData, setApiData] = useState<CatApiResponseType>([])

    useEffect(() => {
        const fetch = async () => {
            const responseApi = await fetchApi('https://api.thecatapi.com/v1/breeds')
            setApiData(responseApi)
        }

        fetch()
    }, [])

    return <>
        <NavigationBar></NavigationBar>

        <div>

        </div>
    </>
}