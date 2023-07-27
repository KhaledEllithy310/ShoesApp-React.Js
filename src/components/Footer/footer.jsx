import { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__top text-center py-4">
          <h2 className="footer__top__title">JOIN OUR NEWSLETTER</h2>
          <form className="footer__form">
            <input type="text" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="footer_text">
            To get the latest news from us please subscribe your email.
          </p>
        </div>
        <div className="footer__bottom py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 my-3">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    <a href="#">
                      <img src="src/assets/images/footzone (2).png" alt="" />
                    </a>
                    <p className="footer_text">Explore top news in our place</p>
                    <div className="footer_media">
                      <li>
                        <a href="">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FontAwesomeIcon icon={faTelegram} />
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 my-3">
                <div className="footer__our__company">
                  <h3 className="footer__title">OUR COMPANY</h3>
                  <ul className="footer__our__company__links">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 my-3">
                <div className="footer__our__company">
                  <h3 className="footer__title">YOUR ACCOUNT</h3>
                  <ul className="footer__our__company__links">
                    <li>
                      <a href="#">Personal info</a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Stores</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
