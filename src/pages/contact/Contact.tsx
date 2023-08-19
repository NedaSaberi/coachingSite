import Footer from '../../components/footer/Footer';
import '../stylePages/stylePages.css'
import ContactForm from '../../components/contactForm/ContactForm';

export default function Contact() {
  return (
    <>
      <div className="first-view">
        <div className="first-view-content">
          <h1>Contact</h1>
          <p>Need Assistance or Have a Question?</p>
        </div>
      </div>
      <div className="body row m-0 p-7">
        <div className="left col-12 col-sm-6 bg-warning">
          neda
        </div>
        <div className="right col-12 col-sm-6">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
