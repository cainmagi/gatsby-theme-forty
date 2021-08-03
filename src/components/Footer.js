import React from 'react';

import CircleIcon from '../utils/CircleIcon';
import fabTwitterIcon from '@iconify-icons/fa-brands/twitter';
import fabFacebookF from '@iconify-icons/fa-brands/facebook-f';
import fabInstagramIcon from '@iconify-icons/fa-brands/instagram';
import fabGithubIcon from '@iconify-icons/fa-brands/github';
import fabLinkedinIn from '@iconify-icons/fa-brands/linkedin-in';

const Footer = (props) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <CircleIcon href="#" icon={fabTwitterIcon} ariaLabel="Twitter" />
        </li>
        <li>
          <CircleIcon href="#" icon={fabFacebookF} ariaLabel="Facebook" />
        </li>
        <li>
          <CircleIcon href="#" icon={fabInstagramIcon} ariaLabel="Instagram" />
        </li>
        <li>
          <CircleIcon href="#" icon={fabGithubIcon} ariaLabel="GitHub" />
        </li>
        <li>
          <CircleIcon href="#" icon={fabLinkedinIn} ariaLabel="LinkedIn" />
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Untitled</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
