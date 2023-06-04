import { Badge } from 'react-bootstrap';

const MovieRating = ({ rating = -1 }) => { //-1 si no se indicó un rating


  return (
    <>
    {
        ( rating < 5 ) ? <Badge className='badge bg-danger'>Rating: {rating}/10</Badge> 
        : ( rating >= 5 && rating < 7 ) ? <Badge className='badge bg-warning text-dark'>Rating: {rating}/10</Badge> 
            : ( rating >=7 && rating <=8 ) ? <Badge className='badge bg-warning text-dark'>Rating: {rating}/10</Badge> 
                : (rating > 8) ? <Badge className='badge bg-success'>Rating: {rating}/10</Badge> 
                    : <Badge className='badge bg-danger'>.../10</Badge>
    }
    </>
  );


};

export default MovieRating;