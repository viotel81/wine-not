import Wine from '../wine/Wine';
import './wines.css';
import Carousel from 'react-bootstrap/Carousel';



function Wines({ wines }) {

    return (
        <>
            <div className="winesmain">
                <h3><b>Take Your Time and Enjoy the Tasty of the <br />World of Wines</b></h3>
              
                <Carousel>
                    {wines.map((w) => (
                        <Carousel.Item>
                            <Wine key={w._id} wine={w} />
                        </Carousel.Item>
                    ))}
                </Carousel>
               
            </div>
        </>
    )
}

export default Wines