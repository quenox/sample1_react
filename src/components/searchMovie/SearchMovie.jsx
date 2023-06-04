import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import "./SearchMovie.css";
import MovieDetails from '../movieDetails/MovieDetails';

function SearchMovie() {
  const [showModal, setShowModal] = useState(false);      //Filtered movies modal
  const [showDetails, setShowDetails] = useState(false); //Detail Movie Modal
  const [movieDetailSelected, setMovieDetailSelected] = useState(null); 
  const [movieName, setMovieName] = useState('');       //it is the filter
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
      .then(response => response.json())
      .then(data => {setAllMovies(data);})
      .catch(error => console.log(error));
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowDetails(false);
    setMovieDetailSelected(null); 
    setMovieName('');
    setFilteredMovies([]);
    setShowModal(false);
  };

  const handleOnChange = (e) => {
    const value = e.target.value.toLowerCase();
    setMovieName(value);

    const filtered = allMovies.filter((movie) =>
      movie.Title.toLowerCase().includes(value)
    );
    setFilteredMovies(filtered);
  };

  function closeDetails() {
    setShowDetails(false);
  }

  const handleLiClick = (film) => {
    setShowModal(false);
    setMovieDetailSelected(film);
    setShowDetails(true);
  };

  const highlightMatch = (text) => {
    let regex;

    if (movieName.trim() !== '') {
      regex = new RegExp(`(${movieName})`, 'gi');
    } else {
      // Case when movieName is empty
      // not coincidence with any string, like `/.^/`
      regex = /.^/;
    }
    return text.replace(regex, '<strong style="color: #007BFF;">$1</strong>');
  };

  return (
    <div>
        <button type="button" className="DocSearch DocSearch-Button MyButton" aria-label="Search" onClick={handleOpenModal}>
            <span className="DocSearch-Button-Container">
                <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
                <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="DocSearch-Button-Placeholder">Search</span>
            </span>
        </button>

        <Modal show={showModal} onHide={handleCloseModal} size='lg'>
            <Modal.Header>
              <div className='row my-3 px-4' style={{ minWidth: '100%' }}>
                <Form.Control 
                  value={movieName} 
                  onChange={handleOnChange} 
                  placeholder="Write the movie's name" 
                  className='rounded-4' 
                  tabIndex="-1" 
                  autoFocus
                  style={{textAlign: 'center'}}
                />
              </div>
            </Modal.Header>
            <Modal.Body style={{maxHeight: '60vh', overflowY: 'auto'}}>
                <div className='row text-center'>
                    <div className='col'>
                        <ul className="list-group">
                        {
                            filteredMovies.map(film => (
                                <li 
                                  key={film.imdbID}
                                  onClick={() => handleLiClick(film)}
                                  className="list-group-item my-li-item" 
                                  dangerouslySetInnerHTML={{ __html: highlightMatch(film.Title) }}>    
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>            
            </Modal.Body>
            <Modal.Footer></Modal.Footer>

        </Modal>
        <MovieDetails movieDetailSelected={movieDetailSelected} show={showDetails} close={closeDetails} />
    </div>
  );
};

export default SearchMovie;
