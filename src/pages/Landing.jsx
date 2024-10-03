import React, { useEffect, useState } from "react";
import LOGO from "../assets/Flipchat-Transperent.png";
import { Link, useNavigate } from "react-router-dom";
import ShowcaseBG from "../assets/showcase-bg.png";
import SearchIcon from "../assets/search.svg";
import CheckIcon from "../assets/check.svg";
import MailIcon from "../assets/inbox.svg";
import Instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import AgentAnimation from "../components/animation/Animation";
import Device from "../components/device/Device";
import CountryList from "country-list-with-dial-code-and-flag";
import { useFormik } from "formik";
import * as yup from "yup";

const COUNTRYLIST = CountryList.getAll();

const Landing = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);

  const formSchema = yup.object().shape({
    countryCode: yup.string().required("country code is required!"),
    number: yup
      .string()
      .min(6, "minimum 6 digits are required")
      .max(12, "maximum 12 digits are allowed")
      .required("number is required!"),
    message: yup
      .string()
      .min(1, "message is required!")
      .required("message is required!"),
  });

  const formik = useFormik({
    initialValues: {
      countryCode: "+91",
      number: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });


  useEffect(() => {
    if (COUNTRYLIST.length) {
      let filtered = COUNTRYLIST.map((item) => {
        return {
          country: item.name,
          countryCode: item.countryCode,
          flag: item.flag,
        };
      });

      setCountries(filtered);
    }
  }, []);

  const handleAuth = () => {
    navigate("/register");
  };
  return (
    <div className="landing">
      <div className="landing-section">
        <div className="landing-container">
          {/* landing header */}
          <section className="landing-header">
            <div className="landing-header-logo">
              <img src={LOGO} alt="flipchat-logo" className="landing-logo" />
            </div>
            <div className="landing-header-nav">
              <a href="#features" className="landing-nav-item">
                Features
              </a>
              <a href="#pricing" className="landing-nav-item">
                Pricing
              </a>
              <a href="#footer" className="landing-nav-item">
                Contact Us
              </a>
            </div>
            <div className="landing-header-cta">
              <button className="auth-cta btn-primary" onClick={handleAuth}>
                Login / Register
              </button>
            </div>
          </section>

          {/* landing showcase */}
          <section className="landing-showcase">
            <div className="landing-grid-left">
              <h1 className="showcase-title">Create Multi-agent</h1>
              <h1 className="showcase-title showcase-title-green">
                WhatsApp links
              </h1>
              <p className="showcase-para">
                Build you brand’s recognition and how get detailed insights on
                how your links are performing
              </p>
              <button className="showcase-cta btn-primary">
                Generate WhatsApp Link
              </button>
            </div>
            <div className="landing-grid-right">
              <img
                src={ShowcaseBG}
                alt="showcase background image"
                className="showcase-bg"
              />
            </div>
          </section>

          {/* Features */}
          <section id="features" className="landing-features">
            <div className="landing-features-head">
              <div className="landing-features-bar"></div>
              <h3 className="landing-features-title">Features</h3>
            </div>
            <p className="landing-features-para">
              Automatically distribute chats between multiple agents (WhatsApp
              lines) using one single link.
            </p>
            <h3 className="landing-features-sub-title">How It Works:</h3>
            <p className="landing-features-para">
              Your customers will click on your Multiagent link. Each click will
              open a chat with a different WhatsApp line. Try clicking multiple
              times on the following link to see a visual example:
            </p>

            <div className="landing-features-animation">
              <AgentAnimation />
            </div>
          </section>
        </div>
        {/* Sub Features */}
        <div className="sub-features">
          <div className="landing-container">
            <h3 className="sub-features-title">Create Your Free Link Today</h3>
            <div className="landing-form-flex">
              <form className="landing-form" onSubmit={formik.handleSubmit}>
                <div className="form-item">
                  <label htmlFor="number" className="landing-form-label">
                    Type Your WhatsApp Number
                  </label>
                  <div className="form-input-flex">
                    <select
                      name="countryCode"
                      id="countryCode"
                      className="landing-form-select"
                      value={formik.values.countryCode}
                      onChange={formik.handleChange}
                    >
                      {countries.map((item) => {
                        return (
                          <option value={item?.countryCode}>
                            {item?.countryCode}
                          </option>
                        );
                      })}
                    </select>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      className="landing-form-input"
                      placeholder="Your phone number here...."
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      maxLength={12}
                    />
                  </div>
                  {formik.errors.number && (
                    <p className="error">{formik.errors.number}</p>
                  )}
                </div>
                <div className="form-item">
                  <label htmlFor="message" className="landing-form-label">
                    Custom Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    className="landing-form-textarea"
                    rows={5}
                    placeholder="Add a custom message..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.message && (
                    <p className="error">{formik.errors.message}</p>
                  )}
                </div>
                <button type="submit" className="btn-primary landing-form-cta">
                  Generate My Link
                </button>
              </form>
              <div className="landing-form-divider">{">"}</div>
              <Device
                countryCode={formik.values.countryCode}
                number={formik.values.number}
                message={formik.values.message}
              />
            </div>

            <h3 className="sub-features-title">
              Find A FlipChat.link For Your Brand
            </h3>
            <form className="landing-find">
              <input
                type="text"
                className="landing-find-input"
                name="name"
                id="name"
                placeholder="Enter your brand name..."
              />
              <button className="btn-primary landing-find-cta">
                {" "}
                <img src={SearchIcon} className="landing-find-cta-icon" />
                Search FlipChat Link
              </button>
            </form>
          </div>
        </div>

        {/* Pricing */}
        <section id="pricing" className="landing-pricing">
          <div className="landing-container">
            <div className="landing-features-head">
              <div className="landing-features-bar"></div>
              <h3 className="landing-features-title">Pricing</h3>
            </div>
            <div className="landing-price-grid">
              <div className="price-grid-left">
                <p className="landing-features-para">
                  WhatsApp click to chat links with enhanced features that drive
                  more customers to your chat
                </p>
                <div className="price-features">
                  <div className="price-features-item">
                    <img
                      src={CheckIcon}
                      alt="check icon"
                      className="price-features-item-icon"
                    />
                    <p className="price-features-item-para">
                      Branded links, FlipChat.link/YourBrand
                    </p>
                  </div>
                  <div className="price-features-item">
                    <img
                      src={CheckIcon}
                      alt="check icon"
                      className="price-features-item-icon"
                    />
                    <p className="price-features-item-para">
                      Clicks analytics by hour, day and month
                    </p>
                  </div>
                  <div className="price-features-item">
                    <img
                      src={CheckIcon}
                      alt="check icon"
                      className="price-features-item-icon"
                    />
                    <p className="price-features-item-para">
                      Edit phone, user message and URL anytime
                    </p>
                  </div>
                  <div className="price-features-item">
                    <img
                      src={CheckIcon}
                      alt="check icon"
                      className="price-features-item-icon"
                    />
                    <p className="price-features-item-para">
                      Appear as a result in our search engine
                    </p>
                  </div>
                  <div className="price-features-item">
                    <img
                      src={CheckIcon}
                      alt="check icon"
                      className="price-features-item-icon"
                    />
                    <p className="price-features-item-para">Email support</p>
                  </div>
                </div>
              </div>
              <div className="price-grid-right">
                <div className="price-card">
                  <div className="price-card-btn">Essential</div>
                  <ul className="price-card-list">
                    <li className="price-card-list-item">1 Branded Links</li>
                    <li className="price-card-list-item">2 Agents Per Link</li>
                  </ul>
                </div>
                <div className="price-card">
                  <div className="price-card-btn price-card-2">Expand</div>
                  <ul className="price-card-list">
                    <li className="price-card-list-item">3 Branded Links</li>
                    <li className="price-card-list-item">3 Agents Per Link</li>
                  </ul>
                </div>
                <div className="price-card">
                  <div className="price-card-btn price-card-3">Elite</div>
                  <ul className="price-card-list">
                    <li className="price-card-list-item">8 Branded Links</li>
                    <li className="price-card-list-item">5 Agents Per Link</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section id="footer" className="landing-footer">
          <div className="landing-container">
            <div className="landing-footer-head">
              <img
                src={MailIcon}
                alt="mail icon"
                className="landing-footer-head-icon"
              />
              <h3 className="landing-footer-head-title">React Out Today</h3>
            </div>

            <p className="landing-footer-para">
              Flipchat.link is neither associated with nor sponsored by WhatsApp
              LLC or Meta Platforms, Inc. We offer a service based on WhatsApp’s
              public API. By using our service, you are accepting our terms of
              service and privacy policy.
            </p>

            <p className="landing-footer-email">support.flipchat@gmail.com</p>
            <div className="landing-footer-social">
              <Link className="landing-footer-social-item">
                <img src={Instagram} alt="instagram icon" />
              </Link>
              <Link className="landing-footer-social-item">
                <img src={twitter} alt="twitter icon" />
              </Link>
              <Link className="landing-footer-social-item">
                <img src={linkedin} alt="linkedin icon" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
