import { useDispatch } from 'react-redux'
import { CatElementType } from '../../../types/catApiTypes'
import './catCard.css'
import { changeDetailCat } from '../../../store/catsSlice/slice'
import { useNavigate } from 'react-router-dom'

interface CatCardProps {
    catData: CatElementType
}

export const CatCard = ({ catData }: CatCardProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickSeeDetail = () => {
        dispatch(changeDetailCat(catData))
        navigate('detail')
    }

    return <>
        <div className='CatCardContainer' onClick={handleClickSeeDetail}>
            <img src={`https://cdn2.thecatapi.com/images/${catData.reference_image_id}.jpg`} alt={`${catData.name} image`} />
            <h2>{catData.name}</h2>
            <p>{catData.description}</p>
            <p>See more...</p>
        </div>
    </>
}