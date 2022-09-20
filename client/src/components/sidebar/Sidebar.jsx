import "./sidebar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { ExternalLink } from "react-external-link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Sidebar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/blog");
  };

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Sommelier Jeff Kerry</span>
        <img src="/images/sommelier.jpg" alt="sommelier" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          ab nobis optio sunt cumque exercitationem quibusdam suscipit qui culpa
          rem ullam dolores corporis doloribus veniam asperiores dicta, maxime
          sequi labore explicabo? Eos consequuntur ad deleniti, suscipit rem
          inventore iste aspernatur molestias atque delectus veritatis aut fugit
          at maiores, qui libero!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <ExternalLink href="https://www.facebook.com/">
            <FaFacebook className="sidebarIcon" />
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/">
            <FaYoutube className="sidebarIcon" />
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/">
            <FaInstagramSquare className="sidebarIcon" />
          </ExternalLink>
          <ExternalLink href="https://www.twitter.com/">
            <FaTwitterSquare className="sidebarIcon" />
          </ExternalLink>
        </div>
      </div>
      <div className="sidebarItem">
        <ul className="userLinks">
          {!user ? (
            <li className="linkItem">
              <Link className="link" to="/login">
                SOMMELIER'S LOGIN
              </Link>
            </li>
          ) : (
            <>
              <li className="linkItem" onClick={handleLogout}>
                LOGOUT
              </li>
              <li className="linkItem">
                <Link className="link" to="/settings">
                  SETTINGS
                </Link>
              </li>
              <li className="linkItem">
                <Link className="link" to="/publish">
                  PUBLISH
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
