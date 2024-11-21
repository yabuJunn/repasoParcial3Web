import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const DetailPage = () => {
    const detailCatData = useSelector((state: RootState) => state.cats.catDetailToShow)
    if (detailCatData) {
        return <>
            {detailCatData.name}
        </>
    }
}