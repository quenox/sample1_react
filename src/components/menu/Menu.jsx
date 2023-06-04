import CustomCardImg from "../customCardImg/CustomCardImg";
import CustomFooter from "../customFooter/CustomFooter";
import CustomNav from "../customNav/CustomNav";
import "./Menu.css";
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import MovieRating from "../movieRating/MovieRating";
import MovieDetails from "../movieDetails/MovieDetails";


function Menu() {

  const [filmData, setFilmData] = useState([]);
  const [movieDetailSelected, setMovieDetailSelected] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
      .then(response => response.json())
      .then(data => setFilmData(data))
      .catch(error => console.log(error));
  }, []);

  function closeDetails() {
    setShowDetails(false);
  }

  function clickMoreDetails(film) {
    setMovieDetailSelected(film);
    setShowDetails(true);
  }

  return (
    <div>

      <div className="sticky-top">
        <CustomNav />
      </div>

      <div className="container mb-4">
        <div className="row">
        {filmData.map(film => (
            <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-4" key={film.imdbID} style={{opacity: 0.8}}>
              <Card style={{height: '100%'}}>
                <CustomCardImg title={film.Title} year={film.Year} duration={film.Runtime} images={film.Images}/>
                <Card.Body>
                  <Card.Title className="text-primary">
                    <b>Description</b>
                  </Card.Title>
                  <Card.Text>
                    <MovieRating rating={film.imdbRating} />
                  </Card.Text>
                  <Card.Text>
                    <small>{film.Plot}</small>
                  </Card.Text>
                  <button onClick={() => clickMoreDetails(film)} className="btn btn-primary">More details</button>
                </Card.Body>
              </Card>
            </div>
          ))
        }
        </div>
      </div>

      <MovieDetails movieDetailSelected={movieDetailSelected} show={showDetails} close={closeDetails} />

      <CustomFooter/>

    </div>
  );
}

export default Menu;