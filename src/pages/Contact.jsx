import ContactsBox from "../components/ContactsBox";
import Link from "../components/Link";
import "./contact.scss";

function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <p className="contact-title">05. What's Next?</p>
        <h1 className="contact-topic">Get In Touch</h1>
        <p className="contact-details">
          You like what you see right? I'm open for job opportunities, and
          actively interviewing. Should you want to hire me, get in touch or
          just say hi, kindly hit that button below and i will be sure to reply
          you in no time!
        </p>
        <Link linkTo={"mailto:yuhassan585@gmail.com"}>Get in touch</Link>
      </div>
      <div><ContactsBox/></div>
    </>
  );
}

export default Contact;
