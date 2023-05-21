import React from 'react';
import Slider from 'react-slick';
import '../../styles/testimonial.css';
import ava01 from '../../assets/all-images/ava-1.jpg';
import ava02 from '../../assets/all-images/ava-2.jpg';
import ava03 from '../../assets/all-images/ava-3.jpg';
import ava04 from '../../assets/all-images/ava-4.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Good rental, polite manager, clear contract. The car was surprisingly in excellent
          condition (I took Rapid), the interior is clean, no scuffs and scratches, the body is also
          like new. I am glad that I did not make a mistake with the office and I advise everyone.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="ava" className="w-25 h-25 rounded" />
          <div>
            <h6 className="mb-0 mt-3">Andrey Ivanov</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Hello! Used your services 2 times, everything is on top. Both times the car pleased, drove
          no less than 200 km, no problems arose along the way. Returned without problems, paid
          extra for washing. I will still take.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="ava" className="w-25 h-25 rounded" />
          <div>
            <h6 className="mb-0 mt-3">Merry Villoy</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          An excellent company — a minimum of documents, very fast registration, a good car. We
          managed to do all the planned things, the family liked the trip, we will use it again if
          necessary.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="ava" className="w-25 h-25 rounded" />
          <div>
            <h6 className="mb-0 mt-3">John Rokeller</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Wonderful company, fast registration, the car is always in excellent condition, the staff
          will always help you choose the right option, I often visit St. Petersburg, I use LuxRent
          services for the second year
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="ava" className="w-25 h-25 rounded" />
          <div>
            <h6 className="mb-0 mt-3">Michel Clivo</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
