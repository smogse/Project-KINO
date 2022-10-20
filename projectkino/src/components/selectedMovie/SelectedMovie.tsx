import React, { useEffect, useState } from "react";
import './SelectedMovie.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { convertMinutesToHours } from "../helpers/convertMinutesToHours";
import { convertTimeToDate } from "../helpers/convertTimeToDate";
import { convertBudget } from "../helpers/convertBudget";
import { IMovie } from "../types/IMovie";

const SelectedMovie = () => {
    const { id } = useParams();
    const [movieState, setMovieState] = useState<IMovie>();

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`https://api.kinopoisk.dev/movie?search=${id}&field=id&token=2MJ5QGJ-301MZ2K-HNA6YZX-3KGGASY`).then((response) => response.json());
                setMovieState(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const genresArr = movieState?.genres;
    const genres = genresArr?.map((elem) => elem.name)

    const movieLength = movieState?.movieLength;
    const premiere = movieState?.premiere;
    const budget = movieState?.budget;
    const fees = movieState?.fees;

    const countriesArr = movieState?.countries;
    const countries = countriesArr?.map((elem) => elem.name);

    return (
        <div className="movie-container">
            <div className="movie-img">
                <img className="movie-poster" src={movieState?.poster !== null ? movieState?.poster?.previewUrl : "https://www.meme-arsenal.com/memes/ec15b1ea5cb23b5864276702be451ac7.jpg"}></img>
                <button className="button-favorites">
                    <p><i className="bi bi-check2"></i> Буду смотреть</p>
                </button>
                <button className="button-play">
                    <p><i className="bi bi-caret-right"></i> Смотреть фильм</p></button>
            </div>
            <div className="movie-info">
                <div className='movie-genres'>
                    <span className='genres'>{genres?.join(' • ')}</span>
                </div>
                <h1 className='movie-name'>{movieState?.name}</h1>
                <h2 className='movie-name-eng'>{movieState?.alternativeName}</h2>
                <div className='movie-markers'>
                    <div className='movie-rating'>{(movieState?.rating?.kp)?.toFixed(1)}</div>
                    <div className='movie-time'>{movieLength && convertMinutesToHours(movieLength)}</div>
                </div>
                <p className='movie-description'>{movieState?.description}</p>
                <div className='movie-description-column'>
                    <div className='movie-description-column__block'>
                        <div className='block-tittle'>Год производства</div>
                        <div className='block-content'>{movieState?.year}</div>
                    </div>
                    <div className='movie-description-column__block'>
                        <div className='block-tittle'>Премьера в мире</div>
                        <div className='block-content'>{convertTimeToDate(premiere?.world, "D MMMM YYYY")}</div>
                    </div>
                    <div className='movie-description-column__block'>
                        <div className='block-tittle'>Бюджет</div>
                        <div className='block-content'> {budget?.currency == null ? '' : budget?.currency} {budget?.value == null ? 'Неизвестно' : convertBudget(budget?.value)}</div>
                    </div>
                    <div className='movie-description-column__block'>
                        <div className='block-tittle'>Сборы в мире</div>
                        <div className='block-content'>{fees?.world?.currency == null ? '' : fees?.world?.currency} {fees?.world?.value == null ? 'Неизвестно' : convertBudget(fees?.world?.value)}</div>
                    </div>
                    <div className='movie-description-column__block'>
                        <div className='block-tittle'>Страна</div>
                        <div className='block-content'>{countries?.join(', ')}</div>
                    </div>
                    <div className='movie-description-column__block'>
                        <div className='block-tittle'>Слоган</div>
                        <div className='block-content'>{movieState?.slogan == null ? 'Нет' : movieState?.slogan}</div>
                    </div>
                    <div className='movie-description-column__block'>
                        <div className='block-tittle'>Время</div>
                        <div className='block-content'>{movieLength && convertMinutesToHours(movieLength)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SelectedMovie }