import "./winemanage.css";
import { Container } from "react-bootstrap";

function Manage() {
  return (
    <Container>
      <div className="manage">
        <img className="manageImg " src="" alt=""></img>
        <form className="manageForm">
          <div className="manageFormGroup">
            <label htmlFor="manageFileInput">
              <i className="manageIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="manageFileInput"
              style={{ display: "none" }}
            />
            <input
              type="text"
              placeholder="Title"
              className="manageInput"
              autoFocus={true}
            />
          </div>
          <div className="manageFormGroup">
            <textarea
              placeholder="Write description of the wine..."
              type="text"
              className="manageInput manageDescription"
            ></textarea>
          </div>
          <div className="manageFormGroup">
            <input
              type="text"
              placeholder="Price"
              className="managePrice manageInput"
            ></input>
          </div>
          <button className="manageSubmit">Upload</button>
        </form>
      </div>
    </Container>
  );
}

export default Manage;
