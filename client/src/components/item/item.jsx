import React from 'react';
import './item.css';


function Item() {
    return (
        <>
            <div className="container">
                <div className="row shadow-lg p-3 rounded">
                    <div className="col-sm-6 shadow-lg rounded bottle">
                        <img src="/pic/1.png" alt="" id="photo" className="img-responsive img-fluid" />
                    </div>
                    <div className="col-sm-6 description mt-4 text text-center">
                        <h5 id="title"><i>Wine Name</i></h5>
                        <p id="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, temporibus dicta! Officia
                            distinctio assumenda illum atque delectus nisi voluptatibus repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <p id="price">Price: 25$</p>
                        <button className="btn">Taste it</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Item;