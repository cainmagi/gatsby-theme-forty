import React from 'react';

import CircleIcon from '../utils/CircleIcon';
import fasEnvelopeIcon from '@iconify-icons/fa-solid/envelope';
import fasPhoneAlt from '@iconify-icons/fa-solid/phone-alt';
import fasHomeIcon from '@iconify-icons/fa-solid/home';

const Contact = (props) => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <CircleIcon icon={fasEnvelopeIcon} />
            <h3>Email</h3>
            <a href="#">information@untitled.tld</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <CircleIcon icon={fasPhoneAlt} />
            <h3>Phone</h3>
            <span>(000) 000-0000 x12387</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <CircleIcon icon={fasHomeIcon} />
            <h3>Address</h3>
            <span>
              1234 Somewhere Road #5432
              <br />
              Nashville, TN 00000
              <br />
              United States of America
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
