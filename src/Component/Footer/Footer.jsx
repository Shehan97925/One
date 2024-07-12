import React from 'react';
import './Footer.css';
import { FaPhone } from 'react-icons/fa'
import callIcon from '../../assets/call-icon.png'
import instaIcon from '../../assets/insta-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import logo from '../../assets/advotexLogowite.png'
import linkedinIcon from '../../assets/linkedin-icon.png'




const Footer = () => {
  const companyLinks = [
    { href: '#', title: 'About Us' },
    { href: '#', title: 'Our Services' },
    { href: '#', title: 'Contact Us' },
  ];

  const servicesLinks = [
    { href: '#', title: 'Digital Marketing' },
    { href: '#', title: 'Social Media Handling' },
    { href: '#', title: 'Graphic Design' },
  ];

  const contactInfo = [
    { icon: callIcon, type: 'phone', content: '+9471 658 5977' },
    { icon: linkedinIcon, type: 'linkedin', content: 'Linkedin' },
    { icon: instaIcon, type: 'instagram', content: 'Instagram' },
    { icon: mailIcon, type: 'email', content: 'advotex8@gmail.com' },

  ];

  return (

    <footer className="footer">

      <div className="footer-container">
        <div>
          <img src={logo} alt="Advotex Logo" className="footer-logo" />
        </div>
        <div className="footer-item">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-list">
            {companyLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-item">
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-list">
            {servicesLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-item">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-list">
            {contactInfo.map((item) => (
              <li key={item.content}>
                {item.type === 'phone' && (<a href={`tel:${item.content}`}>
                  <img src={item.icon} alt="Call" className='call-icon' /> {item.content}</a>)}

                {item.type === 'linkedin' && (<a href={`linkedin:${item.content}`}>
                  <img src={item.icon} alt="link" className='link-icon' /> {item.content}</a>)}

                {item.type === 'instagram' && (<a href={`intagram:${item.content}`}>
                  <img src={item.icon} alt="insta" className='insta-icon' /> {item.content}</a>)}

                {item.type === 'email' && (<a href={`mailto:${item.content}`}>
                  <img src={item.icon} alt="mail" className='email-icon' /> {item.content}</a>)}

              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 ADDOVOTEX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
