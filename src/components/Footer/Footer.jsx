import React from 'react';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/footer.css';

const quickLinks = [
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '#',
    display: 'Privacy Policy',
  },
  {
    path: '/cars',
    display: 'Cars Listing',
  },
  {
    path: '/blogs',
    display: 'Cars Listing',
  },
  {
    path: '/contact',
    display: 'Blog',
  },
];
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="header__home-link">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Rentalcars.com is a trading name of Booking.com Transport Limited which is a limited
              company registered in England and Wales (Number: 05179829) whose registered address is
              at 100 New Bridge Street, Auckland, EC4V 6JA. VAT number: GB 855349007. Rentalcars.com
              is part of Booking Holdings Inc., the world leader in online travel & related
              services.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="quick__link p-0 mt-3 ">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Auckland, EC4V 6JA. VAT number: GB 855349007</p>
              <p className="office__info">Phone: +366 2555 23</p>
              <p className="office__info">Email: rentcar@gmail.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscibe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 p-4">
                <i className="ri-copyright-line"></i>
                Copyright {year} Developed by Keneuova Nagima
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
