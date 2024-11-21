import './catCard.css'

interface CatCardProps {
    catImageUrl: string,
    catName: string,
    catDescription: string
}

export const CatCard = ({ catImageUrl, catName, catDescription }: CatCardProps) => {
    return <>
        <div className='CatCardContainer'>
            <img src={catImageUrl} alt={`${catName} image`} />
            <h2>{catName}</h2>
            <p>{catDescription}</p>
            <p>See more...</p>
        </div>
    </>
}