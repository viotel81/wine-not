import Wine from '../wine/Wine';
import './wines.css';

function Wines({ wines }) {
    return (
        <>
            <div className="winesmain">
                <h3><b>Take Your Time and Enjoy the Tasty of the <br />World of Wines</b></h3>
                {wines.map((w) => (
                     <Wine key={w._id} wine={w}/>
                ))}
            </div>
        </>
    )
}

export default Wines