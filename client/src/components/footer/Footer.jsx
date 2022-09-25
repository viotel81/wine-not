import "./footer.css";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubscribtion = {
      email,
    };
    try {
      await axios.post("/subscribtions", newSubscribtion);
      window.location.replace("/");
    } catch (err) { }
  };

  return (
    <footer>
      <Container>
        <div className="row pt-3">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
            {!user ? (
              <>
                <h5 className="text-uppercase p-2 menuTitle">Menu</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogue" className="link">
                      Catalogue
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="link">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h5 className="text-uppercase p-2 menuTitle">Useful Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/addwine" className="link">
                      Add Wines
                    </Link>
                  </li>
                  <li>
                    <Link to="/publish" className="link">
                      Publish Posts
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="link">
                      Settings
                    </Link>
                  </li>
                  <li className="link" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase p-2 menuTitle">Contacts</h5>
            <ul className="list-unstyled">
              <li className="listItem">
                <FaPhone className="contactsIcon" />
                +370 111 11111
              </li>
              <li className="listItem">
                <FaEnvelope className="contactsIcon" />
                info@wine-not.com
              </li>
              <li className="listItem">
                <FaMapMarkerAlt className="contactsIcon" />
                Wine str. 5, Vilnius, Lithuania
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase p-2 menuTitle text-center">
              Visit Us
            </h5>
            <ul className="list-unstyled">
              <li>
                <iframe className="w-100"
                  title="locationMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147552.8081407525!2d25.112951277981146!3d54.700603690080136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!5e0!3m2!1sen!2slt!4v1662622830690!5m2!1sen!2slt"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="container p-4 text-center">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase menuTitle">Sign up for our newsletter</h5>
            </div>
            <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
              <form action="" onSubmit={handleSubmit} className="d-flex">
                <input type="email" className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row p-1 w-100 d-flex">
          <p className="bottomLine w-100 text-center">
            Copyright &copy;{" "}
            <Link to="/" className="link">
              wine-not.com
            </Link>
          </p>
        </div>
      </Container>
    </footer >
  );
};

export default Footer;
