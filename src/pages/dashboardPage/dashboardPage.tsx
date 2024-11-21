import './dashboardPage.css';
import { useEffect, useState } from 'react';
import { fetchApi } from '../../services/fetch';
import { CatApiResponseType } from '../../types/catApiTypes';
import { NavigationBar } from '../../components/navigationBar/navigationBar';
import { useDispatch, useSelector } from 'react-redux';
import { updateCatsData } from '../../store/catsSlice/slice';
import { RootState } from '../../store/store';
import { CatCard } from '../../components/dashboardPage/catCard/catCard';
import { SearchContext } from '../../context/searchContext';

export const DashboardPage = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetch = async () => {
            const responseApi: CatApiResponseType = await fetchApi('https://api.thecatapi.com/v1/breeds');
            dispatch(updateCatsData(responseApi));
        };

        fetch();
    }, [dispatch]);

    const catsSliceData = useSelector((state: RootState) => state.cats);

    // Filtra los gatos según el texto de búsqueda
    const filteredCats = catsSliceData.catsData.filter((cat) =>
        cat.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <SearchContext.Provider value={{ searchValue: searchText, setSearchValue: setSearchText }}>
            <NavigationBar />
            <div id="catsCardsContainer">
                {filteredCats.map((cat) => (
                    <CatCard catData={cat} key={cat.id} />
                ))}
            </div>
        </SearchContext.Provider>
    );
};
