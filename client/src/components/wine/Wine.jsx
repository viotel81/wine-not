import "./wine.css";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Wine({ wine }) {
  const PF = "http://localhost:5001/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/wines/${wine._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/catalogue");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/wines/${wine._id}`, {
        username: user.username,
        title,
        description,
        price,
      });
      window.location.replace("/catalogue");
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <>
      <div className="container">
        <div id="wineRow" className="row shadow-lg p-3 rounded">
          {wine.username === user?.username && (
            <div className="updateWineIcons">
              <i
                className="editIcon fa-solid fa-pen-to-square"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="trashIcon fa-solid fa-trash"
                onClick={handleDelete}
              ></i>
            </div>
          )}
          <div className="winePhoto col-sm-6 shadow-lg rounded ">
            {wine.photo && (
              <img
                className="img-responsive img-fluid"
                src={PF + wine.photo}
                alt=""
              />
            )}
          </div>
          <div className="wineInfo col-sm-6  mt-4 text text-center">
            {updateMode ? (
              <input
                type="text"
                defaultValue={wine.title}
                className="updateTitle"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h5>
                <i>{wine.title}</i>
              </h5>
            )}
            {updateMode ? (
              <textarea
                type="text"
                defaultValue={wine.description}
                className="updateDescription"
                autoFocus
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            ) : (
              <p>{wine.description}</p>
            )}
            {updateMode ? (
              <input
                type="text"
                defaultValue={wine.price}
                className="updatePrice"
                autoFocus
                onChange={(e) => setPrice(e.target.value)}
              />
            ) : (
              <p>Price: {wine.price} €</p>
            )}
            {updateMode && (
              <button className="updateChangesButton" onClick={handleUpdate}>
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wine;
