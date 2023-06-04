import { Carousel } from 'react-bootstrap';
import "./CustomCardImg.css";


function CustomCardImg({title='', year='', duration='', images=[]}) {

    return (
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="img-fluid" src={image} alt="Primer slide" style={{ minHeight: '200px' }}/>
              <Carousel.Caption>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <h4 className="carousel-title">{title} <small>({year})</small></h4>
                    <p className="carousel-description"><small>{duration} <i className="fas fa-clock" style={{marginLeft: '3px'}}></i></small></p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
    );
      
}

export default CustomCardImg;