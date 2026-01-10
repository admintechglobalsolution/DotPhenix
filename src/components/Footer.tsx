import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h3>🐦‍🔥 Dot Phenix Solutions</h3>
          <p>
            {" "}
            Trusted Digital Transformation Partner Helping Global Organizations
            Design, Modernize, Optimize, and Scale Digital Solutions With
            Reliability & Precision.{" "}
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services#web-app">Web & App Development</Link>
            </li>
            <li>
              <Link href="/services#saas">SaaS Product Development</Link>
            </li>
            <li>
              <Link href="/services#enterprise">
                Payroll & Enterprise Systems
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
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
          <ul className="footer-contact">
            <h4>Contact</h4>

            <li>
              <span>Email:</span> info@dotphenix.com
            </li>
            <li>
              <span>Phone:</span> +91 9346622679
            </li>
            <li>Bangalore, Karnataka, India</li>
          </ul>
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
