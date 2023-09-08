import './ContactForm.css';

const  ContactForm= ()=> {
  return (
    <div className="form-container text-center p-7">
        <div className="top-title text-orange">HAVE ANY QUESTION?</div>
        <div className="title">Contact Form</div>
        <form className='text-center d-flex flex-column m-3'> 
            <input type="text" placeholder='Your Name'/>
            <input type="text" placeholder='Your Email'/>
            <input type="text" placeholder='Your Subject'/>
            <textarea name="" id="" cols={30} rows={8} placeholder='Your Message'></textarea>
            <button className='bg-orange text-white' >SEND A MESSAGE</button>
        </form>
    </div>
    
  )
}

export default ContactForm;