import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import Registration from "../../components/registration/Registration";

function Slider() {
  return (
    <Carousel fade className="sectionColor">
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImage"
          src="./images/wine-grapes.jpg"
          alt="grapes"
        />
        <Carousel.Caption>
          <div className="col-lg-8 col-md-8 col-sm-12 slide1">
            <h1>Wine-not taste the best wine</h1>            
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImage"
          src="./images/about-wine.jpg"
          alt="wine yard about wine-not"
        />
        <Carousel.Caption>
          <div className="col-lg-6 col-md-6 col-sm-12 slide2">
            <h1>About us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aliquid ea rem veritatis quod, labore earum! Sunt iste tempore
              ipsa modi quam quod esse aperiam commodi, magni, natus vitae
              labore exercitationem soluta cumque ea qui blanditiis unde porro
              possimus eum obcaecati, in vel ducimus. Fugiat quam laboriosam
              dicta possimus numquam illum aliquid eligendi amet? Blanditiis
              perferendis magni ut pariatur id repellat quos, sed consectetur
              quisquam. Minima tenetur quia, ducimus culpa dolor voluptatum quo
              laudantium sint atque quam magnam beatae libero consectetur id
              facilis placeat nulla ipsum amet. Harum maxime laudantium eveniet
              error fugit assumenda quae esse perspiciatis, magni exercitationem
              quod!
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImage"
          src="./images/taste-wine.jpg"
          alt="wine glass register for wine tasting"
        />
        <Carousel.Caption>
          <div className="col-lg-6 col-md-12 slide3">
            <Registration />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
