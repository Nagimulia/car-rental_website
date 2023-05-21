import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import HeroSlider from '../components/UI/HeroSlider';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/UI/FindCarForm';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';
import carData from '../assets/data/carData';
import CartItem from '../components/UI/CartItem';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import Testimonial from '../components/UI/Testimonial';
import BlogList from '../components/UI/BlogList';

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <AboutSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            {carData.slice(0, 6).map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h6 className="section__subtitle">Our Clients Says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blog</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
