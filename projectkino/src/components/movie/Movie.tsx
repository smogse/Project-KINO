import React from "react";
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux";
import { StoreState } from "../types/types";
import './movie.css';

const Movie = (props: IMovieCard) => {
  const theme = useSelector((state: StoreState) => state.theme.theme);

  return (
    <>
      <Card className={"movieCard " + theme + '-container'}>
        <div className='movies-rating'>{(props.rating)?.toFixed(1)}</div>
        <Card.Img variant="top" src={props.poster !== null ? props.poster : ''} className='movieImg' />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.year}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

interface IMovieCard {
  name: string | undefined,
  poster: string | undefined,
  year?: number | undefined,
  rating?: number | undefined
}

export { Movie };