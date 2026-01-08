import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h3>Dot Phenix Solutions</h3>
          <p>
            Trusted Digital Transformation Partner Helping Global Organizations
            Design, Modernize, Optimize, and Scale Digital Solutions With
            Reliability & Precision.
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Web & App Development</li>
            <li>SaaS Product Development</li>
            <li>Payroll & Enterprise Systems</li>
          </ul>
        </div>
        {/* Services */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Privacy policy</li>
            <li>Terms and Conditions</li>
            <li>Documentation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@dotphenix.com</p>
          <p>Phone: +91 9346622679</p>
          <p>Bangalore, Karnataka, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Dot Phenix Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
