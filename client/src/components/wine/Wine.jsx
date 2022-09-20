import './wine.css';

function Wine() {
    return (
        <>
            <div className="container">
                <div id="wineRow" className="row shadow-lg p-3 rounded">
                    <div className="winePhoto col-sm-6 shadow-lg rounded ">
                        <img src="" alt="" id="winePhoto" className="img-responsive img-fluid" />
                    </div>
                    <div className="wineInfo col-sm-6  mt-4 text text-center">
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

export default Wine;