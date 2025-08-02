import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import "./contactsBox.scss";

function ContactsBox() {
  return (
    <div className="contacts-box">
      <a href="https://github.com/Hassan-jh">
        <FiGithub className="contacts-box-icons" />
      </a>
      <a href="https://www.linkedin.com/in/yusuf-hassan-139590319">
        <FaLinkedinIn className="contacts-box-icons" />
      </a>
      <a href="http://">
        <FaInstagram className="contacts-box-icons" />
      </a>
      <a href="http://">
        <FaXTwitter className="contacts-box-icons" />
      </a>
      <a href="http://"></a>
    
      <div className="vertical-line"></div>
    </div>
  );
}

export default ContactsBox;
