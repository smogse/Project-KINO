import React, { useState, useEffect } from 'react';
import './searchResults.css';
import { Link } from "react-router-dom";
import { Movie } from "../movie/Movie";
import { API_KEY } from '../constants/api';
import { useSelector } from 'react-redux';
import { StoreState } from '../types/types';
import { IMovie, IMovieProps } from '../types/IMovie';

interface SearchResultsProps {
    data: string;
}

const SearchResults = ({ data: query }: SearchResultsProps) => {
    const theme = useSelector((state: StoreState) => state.theme.theme);
    const [page, setPage] = useState(1);
    const [searchRequestState, setSearchRequestState] = useState<IMovie[]>([]);

    useEffect(() => {
        setPage(1);
    }, [query]);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`https://api.kinopoisk.dev/movie?sortField=rating.kp&sortType=-1&field=name&search=${query}&isStrict=false&page=${page}&limit=20&token=${API_KEY}`).then((response) => response.json());
               
                if (page === 1) {
                    setSearchRequestState(data.docs);
                } else { setSearchRequestState((prevState) => ([...prevState.concat(data.docs)])); }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [page, query]);

    const handleClick = () => {
        setPage(page + 1);
    }

    return (searchRequestState?.length ? (
        <div className='search-results'>
            <div className="movies-container">
                {searchRequestState && searchRequestState.map((item: IMovie, index: number) => (
                    <React.Fragment key={index}>
                        <Link to={`/film/${item?.id}`} className={'movies-links ' + theme + '-title'}>
                            <Movie name={item.name} poster={item.poster == null ? 'https://www.meme-arsenal.com/memes/ec15b1ea5cb23b5864276702be451ac7.jpg' : item.poster.previewUrl} rating={item.rating?.kp} />
                        </Link>
                    </React.Fragment>
                ))}
            </div>
            <button onClick={handleClick} className="movies-show-button">
                Показать ещё
            </button>
        </div>
    ) : (
        <div className="no-results">
            <img src="https://cdn-icons-png.flaticon.com/512/6178/6178994.png" className='no-results-img' />
            <h2>{"По Вашему запросу ничего не найдено :("}</h2>
        </div>
    ))
}

export { SearchResults };