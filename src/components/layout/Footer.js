import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ icon, title }) => {
  return (
    <footer className="bg-primary">
      <p className="">
        <Link to="/about">About</Link> | <Link to="/">Privacy Policy</Link> |{' '}
        <Link to="/about">Terms of Use</Link> |{' '}
        <Link to="/about">Legal Notices</Link>
      </p>

      <p>© 2019 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
