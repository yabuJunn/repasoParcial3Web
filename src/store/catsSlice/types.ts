import { CatApiResponseType, CatElementType } from "../../types/catApiTypes";

export interface catsSliceTypes {
    catsData: CatApiResponseType,
    catDetailToShow: undefined | CatElementType
}