import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MovieRating from '../movieRating/MovieRating';
import CountryFlag from '../countryFlag/CountryFlag';

const MovieDetails = ({ movieDetailSelected, show, close }) => {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
    console.log(movieDetailSelected);
  }, [show]);

  const handleCloseModal = () => close();

  return (
    <div>
      <Modal show={showModal} size='lg' onHide={handleCloseModal}>
        <Modal.Header closeButton className='bg-secondary text-white'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Modal.Title style={{ marginRight: '5px' }}>{movieDetailSelected?.Title}</Modal.Title>
            <small><MovieRating rating={movieDetailSelected?.imdbRating} /></small>
          </div>
        </Modal.Header>
        <Modal.Body style={{maxHeight: '60vh', overflowY: 'auto'}}>
          <p><b>Type:</b> {movieDetailSelected?.Type}</p>
          <hr></hr>
          <p><b>Plot:</b> {movieDetailSelected?.Plot}</p>
          <hr></hr>
          <p><b>Director:</b> {movieDetailSelected?.Director}</p>
          <hr></hr>
          <p><b>Actors:</b> {movieDetailSelected?.Actors}</p>
          <hr></hr>
          <p><b>Awards:</b> {movieDetailSelected?.Awards}</p>
          <hr></hr>
          <p><b>Genre:</b> {movieDetailSelected?.Genre}</p>
          <hr></hr>
          <p><b>Country:</b> <CountryFlag country={movieDetailSelected?.Country} /></p>
          <hr></hr>
          <p><b>Language:</b> {movieDetailSelected?.Language}</p>
          <hr></hr>
          <p><b>Rated:</b> {movieDetailSelected?.Rated}</p>
          <hr></hr>
          <p><b>Released:</b> {movieDetailSelected?.Released}</p>
          <hr></hr>
          <p><b>Year:</b> {movieDetailSelected?.Year}</p>
          <hr></hr>
          <p><b>Runtime:</b> {movieDetailSelected?.Runtime}</p>
          <hr></hr>
          <p><b>Writer:</b> {movieDetailSelected?.Writer}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieDetails;