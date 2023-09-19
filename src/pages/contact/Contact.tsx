import Footer from '../../components/footer/Footer';
import QuestionForm from '../../components/questionForm/QuestionForm';
import '../stylePages/stylePages.css'
import ContactForm from '../../components/contactForm/ContactForm';
import './Contact.css';
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
      <Footer/>
    </>
  );
}
