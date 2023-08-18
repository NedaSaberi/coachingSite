import Footer from '../../components/footer/Footer';
import QuestionForm from '../../components/questionForm/QuestionForm';
import '../stylePages/stylePages.css'

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
          nnn
        </div>
        <div className="right col-12 col-sm-6">
          <QuestionForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
