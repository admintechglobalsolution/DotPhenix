import Link from "next/link";
import Container from "@/components/ui/Container";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-column">
            <h3>🐦‍🔥 Dot Phoenix Solutions</h3>
            <p>
              Trusted Digital Transformation Partner Helping Global
              Organizations Design, Modernize, Optimize, and Scale Digital
              Solutions With Reliability & Precision.
            </p>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="/services#web">Web & App Development</Link>
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

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                <Link href="/resources/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/resources/terms-and-conditions">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/resources/documentation">Documentation</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <span>Email:</span> info@dotphoenixsolutions.com
              </li>
              <li>
                <span>Phone:</span> +91 9346622679
              </li>
              <li>Address: Tirupati, AP, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Dot Phoenix Solutions. All Rights
          Reserved.
        </div>
      </Container>
    </footer>
  );
}
