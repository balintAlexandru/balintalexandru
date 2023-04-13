import "./FooterStyle.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <BsGithub color="#F24E1E" size="2.5rem" cursor="pointer" />
        <BsLinkedin color="#9747FF" size="2.5rem" cursor="pointer" />
      </div>
      <span className="footer-contact">Get in touch</span>
    </footer>
  );
};
export default Footer;
