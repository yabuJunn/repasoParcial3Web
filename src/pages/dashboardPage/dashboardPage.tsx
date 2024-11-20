import './dashboardPage.css'

import { useEffect, useState } from "react"
import { fetchApi } from "../../services/fetch"
import { CatApiResponseType } from "../../types/catApiTypes"

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
        {apiData.map(cat => { return <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}></img> })}
    </>
}