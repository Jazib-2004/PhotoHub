import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { CiYoutube, CiFacebook } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  const quick_links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                eum similique veniam ducimus minus ad id.
              </p>
              <div className="social__links d-flex gap-4 align-items-center">
                <span>
                  <Link to="#">
                    <CiYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaGithub />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <CiFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick_links.map((link, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={link.path}>{link.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="list__group footer__quick-links">
              <ListGroupItem
                className="ps-0 border-0 d-flex align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><FiMapPin className="footer_icons"/></span> 
                  Address
                </h6>
                <p className="mb-0">Islamabad, Pakistan.</p>
              </ListGroupItem>
              <ListGroupItem
                className="list__group ps-0 border-0 d-flex align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><MdOutlineMailOutline className="footer_icons"/></span> 
                  Email
                </h6>
                <p className="mb-0">jazibmemon12@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem
                className="list__group ps-0 border-0 d-flex align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><FaPhone className="footer_icons"/></span> 
                  Phone
                </h6>
                <p className="mb-0">0316 3382072</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className="text-center pt-5 ">
            <p className="copyright">Copyright 2023, developed by Jazib, Muhammad Yameen and Muhammad Ahsan Sajjad All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
