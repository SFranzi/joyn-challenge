import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const MovieLane = ({assets, displaySlider}) => {
  if (!displaySlider){
    return null; 
 }
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
      <div className="slider">
      <Slider {...settings}>
        {assets.map(a => {
          return (
            <React.Fragment>
              <Link to={`/${a.id}`}>
                <div className="col">
                  <div className="wrapper">
                    <img className="card-img-top" src={a.image} alt={a.id}/>
                    <span>{a.title}</span>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </Slider>
      </div>

 

  );
}

export default MovieLane; 