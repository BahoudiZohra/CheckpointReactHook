import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MovieRating from '../Rating/Rating'


const MovieCard = ({movie}) => {
  return (
    <div style={{alignContent:'center', margin:'10px'}}>
      <Card style={{ width: '18rem', height:'55rem'}}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <MovieRating isMovieRating={true} movieRating={movie.rate} /><br/><br/>
        <Button variant="primary" >Add Movie</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard

