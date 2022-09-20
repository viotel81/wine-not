import { useEffect } from 'react';
import Wine from '../wine/Wine';
import './wines.css';

function Wines() {
    return (
        <>
            <div className="winesmain">
                <h3><b>Take Your Time and Enjoy the Tasty of the <br />World of Wines</b></h3>

                <Wine />
            </div>
        </>
    )
};

// const Items = ({ items }) => {
//     return (
//         <div className="main">
//             <h3><b>Take You Time and Enjoy the Tasty of the <br />World of Wines</b></h3>
//             {items.map((i, index) => {
//                 <Item key={index} item={i} />
//             })}
                
//         </div>

//     )
// }

// AR FETCHINMUI REIKIA ISIDIEGTI npm add axios?

export default Wines;

// HOME PUSLPAYJE DARO FETCH

// const [items, setItems] = useState([]);

// useEffect(() => {
//     const fetchItems = async ()=>{
//         const res = await axios.get("/items")
//         //console.log(res)
//         setItems(res.data)
//     }
//     fetchItems()
// },[])
