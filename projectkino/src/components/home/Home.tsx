import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_KEY } from "../constants/api";
import { Movie } from "../movie/Movie";
import { IMovie, IMoviePoster } from "../types/IMovie";
import { StoreState } from "../types/types";
import './home.css';


const Home = () => {
    const theme = useSelector((state: StoreState) => state.theme.theme);

    const [pageMovie, setPageMovie] = useState(1);
    const [moviesState, setMoviesState] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`https://api.kinopoisk.dev/movie?sortField=rating.kp&sortType=-1&field=year&search=2021-2022&limit=10&field=typeNumber&search=1&page=${pageMovie}&token=${API_KEY}`).then((response) => response.json());

                if (pageMovie === 1) {
                    setMoviesState(data.docs);
                } else { setMoviesState((prevState) => ([...prevState.concat(data.docs)])); }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [pageMovie]);

    const [serialsState, setSerialsState] = useState([]);
    const [pageSerial, setPageSerial] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`https://api.kinopoisk.dev/movie?sortField=rating.kp&sortType=-1&field=year&search=2021-2022&limit=10&field=typeNumber&search=2&page=${pageSerial}&token=${API_KEY}`).then((response) => response.json());

                if (pageSerial === 1) {
                    setSerialsState(data.docs);
                } else { setSerialsState((prevState) => ([...prevState.concat(data.docs)])); }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [pageSerial]);

    const [cartoonsState, setCartoonsState] = useState([]);
    const [pageCartoon, setPageCartoon] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`https://api.kinopoisk.dev/movie?sortField=rating.kp&sortType=-1&field=year&search=2021-2022&limit=10&field=typeNumber&search=3&page=${pageCartoon}&token=${API_KEY}`).then((response) => response.json());

                if (pageCartoon === 1) {
                    setCartoonsState(data.docs);
                } else { setCartoonsState((prevState) => ([...prevState.concat(data.docs)])); }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [pageCartoon]);

    const handleMovieClick = () => {
        setPageMovie(pageMovie + 1)
    }

    const handleSerialClick = () => {
        setPageSerial(pageSerial + 1)
    }

    const handleCartoonClick = () => {
        setPageCartoon(pageCartoon + 1)
    }

    return (
        <div className="home">
            <div className="home-container">
                <span className="movies-type">Новые фильмы</span>
                <div className="movies-container">
                    {moviesState && moviesState.map((item: IMovie, index) => (
                        <React.Fragment key={index}>
                            <Link to={`/film/${item?.id}`} className={'movies-links ' + theme + '-title'}>
                                <Movie name={item.name} poster={item.poster ? item.poster.previewUrl : "https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png"} year={item.year} rating={item.rating?.kp} />
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
                <button onClick={handleMovieClick} className="movies-show-button">
                    Показать ещё
                </button>
            </div>

            <div className="home-container">
                <span className="movies-type">Новые сериалы</span>
                <div className="movies-container">
                    {serialsState && serialsState.map((item: IMovie, index) => (
                        <React.Fragment key={index}>
                            <Link to={`/film/${item?.id}`} className={'movies-links ' + theme + '-title'}>
                                <Movie name={item.name} poster={item.poster?.previewUrl} year={item.year} rating={item.rating?.kp} />
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
                <button onClick={handleSerialClick} className="movies-show-button">
                    Показать ещё
                </button>
            </div>

            <div className="home-container">
                <span className="movies-type">Новые мультфильмы</span>
                <div className="movies-container">
                    {cartoonsState && cartoonsState.map((item: IMovie, index) => (
                        <React.Fragment key={index}>
                            <Link to={`/film/${item?.id}`} className={'movies-links ' + theme + '-title'}>
                                <Movie name={item.name} poster={item.poster?.previewUrl} year={item.year} rating={item.rating?.kp} />
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
                <button onClick={handleCartoonClick} className="movies-show-button">
                    Показать ещё
                </button>
            </div>
        </div>
    )
}

export { Home };