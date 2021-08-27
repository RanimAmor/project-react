import React from "react";
import "./Footer.css";
import { FaInstagram,FaFacebook,FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <><br></br>
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img src="logoo.png" height="130"></img>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Products</h4>
            <ui className="list-unstyled">
              <li><a className="bla" href="/">  Bracelets</a></li>
              <li><a className="bla"  href="/">Necklaces</a></li>
              <li><a className="bla" href="/" >Rings</a></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="list-unstyled">
              <li  ><a className="bla" href="https://www.instagram.com/"><FaInstagram/> Instagram</a></li>
              <li><a className="bla" href="https://www.facebook.com/"><FaFacebook/>  Facebook</a></li>
              <li className="bla"><FaPhoneAlt/> +21699175682</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} LUVEAL | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    </>  
  );
}

export default Footer;