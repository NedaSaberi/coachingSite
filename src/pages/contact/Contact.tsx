import styles from './Contact.module.css';

import ContactForm from '../../components/contactForm/ContactForm';
import Map from '../../components/map/Map';

export default function Contact() {
  return (
    <>
      <div className="firstView">
        <div className="firstViewContent">
          <h1>Contact</h1>
          <p>Need Assistance or Have a Question?</p>
        </div>
      </div>
      <div className={`${styles.contactBody} row m-0 p-7`}>
        <div className="col-12 col-lg-6 p-7">
          <div className={`text-orange ${styles.topTitle}`}>ADVISING & ASSISTANCE</div>
          <div className="fs-1">
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
          <div className={`${styles.socialMedia} d-flex`}>
            <span><i className="fa-brands fa-twitter"></i></span>
            <span><i className="fa-brands fa-facebook"></i></span>
            <span><i className="fa-brands fa-linkedin"></i></span>
            <span><i className="fa-brands fa-instagram"></i></span>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <ContactForm />
        </div>
      </div>
      <div>
        <Map/>
      </div>
    </>
  );
}
