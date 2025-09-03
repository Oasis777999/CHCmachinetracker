import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="mb-4 text-center text-primary">Privacy Policy</h1>

              <p className="lead">
                CHC MACHINE TRACKER and its subsidiaries and branches ("we",
                "us", or "our") respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and share your data.
              </p>

              <hr className="my-4" />

              {/* Section 1 */}
              <section className="mb-4">
                <h3 className="text-secondary">1. Information Collection</h3>
                <p>
                  We collect personal data (name, email, phone, etc.) you
                  provide through our forms. We also gather technical data via
                  cookies—IP address, OS, browser, and location—for analytics.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-4">
                <h3 className="text-secondary">2. Information Usage</h3>
                <p>
                  Your data is used to deliver services, improve our site,
                  analyze traffic, and send you updates or marketing messages.
                  You may opt out of marketing at any time by contacting us.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-4">
                <h3 className="text-secondary">3. Information Sharing</h3>
                <p>
                  We do not sell your data. It may be shared within Advait
                  Teleservices or with third parties only when required for
                  services or by law.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-4">
                <h3 className="text-secondary">4. Security</h3>
                <p>
                  We use industry-standard security practices including SSL and
                  AES-256 encryption. Payment information is processed securely
                  through PCI-DSS-compliant providers.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-4">
                <h3 className="text-secondary">5. Consent</h3>
                <p>
                  By using our services or submitting your data, you consent to
                  our policies. You may withdraw consent by emailing us at{" "}
                  <a href="mailto:support@advaitteleservices.com">
                    support@chcmachinetracker.com
                  </a>
                  .
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-4">
                <h3 className="text-secondary">6. Data Storage</h3>
                <p>
                  Your data is securely stored using cloud services like Amazon
                  and Google. Payment data is processed through Braintree and
                  adheres to PCI-DSS standards.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-4">
                <h3 className="text-secondary">7. Age of Consent</h3>
                <p>
                  By using this site, you confirm you're of legal age in your
                  jurisdiction or have consented for minors to access the site.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-4">
                <h3 className="text-secondary">8. Third-Party Information</h3>
                <p>
                  Third-party providers have their own privacy policies. When
                  redirected off-site, we are not responsible for their
                  policies. Please read them carefully.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-4">
                <h3 className="text-secondary">9. Changes to Policy</h3>
                <p>
                  We may update this policy anytime. Changes are effective
                  immediately upon posting. Please review this page regularly.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h3 className="text-secondary">10. Contact Us</h3>
                <p>
                  For any questions, please contact us at:
                  <br />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@advaitteleservices.com">
                    support@chcmachinetracker.com
                  </a>
                  <br />
                  <strong>Address:</strong> College of Technology and
                  Engineering, UDAIPUR-313001
                </p>
              </section>

              <hr className="my-4" />

              <p className="text-muted small text-center">
                Last updated: September 3, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
