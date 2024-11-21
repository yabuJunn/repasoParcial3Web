import './detailPage.css'

import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const DetailPage = () => {
    const detailCatData = useSelector((state: RootState) => state.cats.catDetailToShow)
    if (detailCatData) {

        return <>
            <main id="detailPageContainer">
                <div id='detailCatHeader'>
                    <img src={`https://cdn2.thecatapi.com/images/${detailCatData.reference_image_id}.jpg`} alt="" />
                    <div id='detailCatHeaderText'>
                        <h1>{detailCatData.name}</h1>
                        <p>{detailCatData.description}</p>
                    </div>
                </div>

                <div id='detailLists'>
                    <ol>
                        <li>Adaptability: {detailCatData.adaptability}</li>
                        <li>Affection Level: {detailCatData.affection_level}</li>
                        <li>Intelligence: {detailCatData.intelligence}</li>
                        <li>Social Needs: {detailCatData.social_needs}</li>
                    </ol>
                </div>
            </main>
        </>
    }
}