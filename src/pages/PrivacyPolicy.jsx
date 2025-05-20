import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
    <div className="max-w-4xl mx-auto px-6 py-40 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy & Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-10 text-center">Effective Date: May 21, 2025</p>

      <Section title="1. Introduction">
        Welcome to <strong>Knowtica</strong> (<a href="https://prebuiltui.com" className="text-blue-600 underline">prebuiltui.com</a>). We are committed to providing a secure, privacy-respecting experience. This policy outlines how we handle user privacy.
      </Section>

      <Section title="2. Information We Do Not Collect">
        We do <strong>not collect</strong> or store any personal or sensitive data. Our website is completely anonymous and does not require any registration or login.
      </Section>

      <Section title="3. Cookies and Tracking">
        We do <strong>not</strong> use cookies, browser storage, analytics, tracking pixels, or any data collection tools. No user activity is monitored.
      </Section>

      <Section title="4. Third-Party Links">
        Some links may direct you to third-party websites. We are not responsible for their privacy policies. Always review external sites before engaging with them.
      </Section>

      <Section title="5. Data Security">
        Since we don’t collect data, there is no risk of breach. Still, we advise you to follow basic cybersecurity practices when browsing the internet.
      </Section>

      <Section title="6. License and Intellectual Property">
        Our UI components are mostly licensed under the <strong>MIT License</strong>. You can use, modify, and share them freely. Always check individual components for specific license details.
      </Section>

      <Section title="7. Terms of Use">
        By using our website, you agree not to misuse or falsely claim ownership of our content. All content must be used for legal and ethical purposes only.
      </Section>

      <Section title="8. User Responsibility">
        We are not liable for how you implement or modify our code. All components are provided "as is" without guarantees or warranties.
      </Section>

      <Section title="9. Accessibility">
        We strive to make our platform accessible and follow WCAG guidelines. If you face accessibility issues, please contact us.
      </Section>

      <Section title="10. Children’s Privacy">
        Our platform is not directed at children under 13. We do not knowingly collect data from minors.
      </Section>

      <Section title="11. Updates to This Policy">
        This policy may be updated. All changes will be reflected on this page with a revised effective date.
      </Section>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Disclaimer</h2>
      <p className="mb-4">
        Third-party brand names, logos, or trademarks on this website are used for educational or identification purposes only.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Knowtica is <strong>not affiliated</strong> with any external brands unless explicitly stated.</li>
        <li>All rights to trademarks and logos belong to their respective owners.</li>
        <li>The presence of third-party content does not imply endorsement.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
      <p>
        For any questions regarding this policy or licensing, reach out to us at:  
        <br />
        📧 <a href="mailto:ui@knowtica.com" className="text-blue-600 underline">ui@knowtica.com</a>
        <br />
        🌐 <a href="https://prebuiltui.com" className="text-blue-600 underline">https://prebuiltui.com</a>
      </p>
    </div>
        <Footer />
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{children}</p>
  </div>

);

export default PrivacyPolicy;
