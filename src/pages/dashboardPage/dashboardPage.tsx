import './dashboardPage.css'

import { useEffect } from "react"
import { fetchApi } from "../../services/fetch"
import { CatApiResponseType } from "../../types/catApiTypes"
import { NavigationBar } from '../../components/navigationBar/navigationBar'
import { useDispatch, useSelector } from 'react-redux'
import { updateCatsData } from '../../store/catsSlice/slice'
import { RootState } from '../../store/store'

export const DashboardPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetch = async () => {
            const responseApi: CatApiResponseType = await fetchApi('https://api.thecatapi.com/v1/breeds')
            dispatch(updateCatsData(responseApi))
        }

        fetch()
    }, [dispatch])

    const catsSliceData = useSelector((state: RootState) => state.cats)

    return <>
        <NavigationBar></NavigationBar>

        <div>
            
        </div>
    </>
}