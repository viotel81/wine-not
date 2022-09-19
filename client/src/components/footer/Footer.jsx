import './footer.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container p-2">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase p-2 menuTitle">Menu</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className='menuLink'>Home</Link>
                            </li>
                            <li>
                                <Link to="/catalogue" className='menuLink'>Catalogue</Link>
                            </li>
                            <li>
                                <Link to="/blog" className='menuLink'>Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase p-2 menuTitle">Useful Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className='menuLink'>Title</Link>
                            </li>
                            <li>
                                <Link to="/" className='menuLink'>Title</Link>
                            </li>
                            <li>
                                <Link to="/" className='menuLink'>Title</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase p-2 menuTitle">Contacts</h5>
                        <ul className="list-unstyled">
                            <li><FaPhone className='icon' />+370 111 11111</li>
                            <li><FaEnvelope className='icon' />wine@not.com</li>
                            <li><FaMapMarkerAlt className='icon' />Wine str. 5, Vilnius, Lithuania</li>
                            <li className="fw-bold p-4 menuTitle">Find us:
                                <ExternalLink href="https://www.facebook.com/"><FaFacebook className='icon' /></ExternalLink>
                                <ExternalLink href="https://www.youtube.com/"><FaYoutube className='icon' /></ExternalLink>
                                <ExternalLink href="https://www.instagram.com/"><FaInstagramSquare className='icon' /></ExternalLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase p-2 menuTitle">Visit Us:</h5>
                        <ul className="list-unstyled">
                            <li>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147552.8081407525!2d25.112951277981146!3d54.700603690080136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!5e0!3m2!1sen!2slt!4v1662622830690!5m2!1sen!2slt"
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="p-1">
                <p className='menuTitle bottomLine'>Copyright &copy; <Link to="/home" className='menuLink'>Wine-Not.com</Link></p>
            </div>
        </footer>
    )
}

export default Footer
