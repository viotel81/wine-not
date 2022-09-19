import './slider.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/wine-grapes.jpg';
import image2 from './images/about-wine.jpg';
import image3 from './images/taste-wine.jpg';
import Registration from './Registration';

function Slider() {
    return (
        <Carousel fade className='sectionColor'>
            <Carousel.Item>
                <img className="d-block w-100 sliderImage" src={image1} alt="grapes" />
                <Carousel.Caption>
                    <div className="col-lg-8 col-md-8 col-sm-12 slide1">
                        <h1>Wine-not taste the best wine</h1>
                        <p>Check our best wines.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 sliderImage" src={image2} alt="wine yard about wine-not" />
                <Carousel.Caption>
                    <div className="col-lg-6 col-md-6 col-sm-12 slide2">
                        <h1>About us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque voluptatum iste obcaecati ad facere tenetur, illum pariatur voluptate consequuntur esse cum beatae harum velit quibusdam corrupti voluptas officia officiis.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 sliderImage" src={image3} alt="wine glass register for wine tasting" />
                <Carousel.Caption>
                    <div className="col-lg-6 col-md-12 slide3">
                        <h1>Register for wine tasting event</h1>
                        <p>Please fill the reservation form below.</p>
                        <Registration />
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;