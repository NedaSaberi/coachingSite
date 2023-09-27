import '../stylePages/stylePages.css';
import './Contact.css';

import ContactForm from '../../components/contactForm/ContactForm';
import Footer from '../../components/footer/Footer';
import Map from '../../components/map/Map';

export default function Contact() {
  return (
    <>
      <div className="first-view">
        <div className="first-view-content">
          <h1>Contact</h1>
          <p>Need Assistance or Have a Question?</p>
        </div>
      </div>
      <div className="contact-body row m-0 p-7">
        <div className="left col-12 col-sm-6 p-7">
          <div className="text-orange top-title">ADVISING & ASSISTANCE</div>
          <div className="fs-1 title">
            Do you Need Help? <br />
            Get in Touch with the <br/>
            Team
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            necessitatibus aliquam obcaecati quidem expedita? Voluptatum debitis
            recusandae explicabo iste voluptate numquam omnis modi voluptatem
            aperiam! Explicabo adipisci perspiciatis velit molestias.
          </p>
          <ul className="p-0 my-5">
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span>Nsectetur cing elit.</span>
            </li>
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span>Suspe ndisse suscipit sagittis leo.</span>
            </li>
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span>Donec euismod posuere metus.</span>
            </li>
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span>Donec risus magna, auctor a tincidun.</span>
            </li>
          </ul>
          <div className="social-media d-flex">
            <span><i className="fa-brands fa-twitter"></i></span>
            <span><i className="fa-brands fa-facebook"></i></span>
            <span><i className="fa-brands fa-linkedin"></i></span>
            <span><i className="fa-brands fa-instagram"></i></span>
          </div>
        </div>
        <div className="right col-12 col-sm-6">
          <ContactForm />
        </div>
      </div>
      <div>
        <Map/>
      </div>
      <Footer />
    </>
  );
}
