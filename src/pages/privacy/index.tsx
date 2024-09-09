"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import { TracingBeam } from "../../Components/UI/tracing-beam";

const Privacy: React.FC = () => {
  return (
    <div className="bg-gradient-to-b w-full from-gray-900 via-gray-700 to-black p-4 md:p-8 rounded-none text-white">
      <TracingBeam className="px-2 w-full">
        <div>
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <h2 className="mb-6 md:mb-9 text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-pink-500 h-11">
              Privacy Policy
            </h2>
          </div>
          <div className="relative pl-4 md:pl-10">

            <ul className="pl-8 md:pl-16 space-y-4 md:space-y-6">
              <li className="flex items-start">
                <p className="text-base md:text-lg font-semibold">
                  This Privacy Policy applies to all personal information collected by Smaaker via the website located at www.smaaker.com.
                </p>
              </li>
            </ul>

            {/* Privacy Policy Content */}
            <div className="pl-8 md:pl-16 space-y-4 md:space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">1. What is personal information?</h3>
                <p className="text-base md:text-lg mb-2 md:mb-4">
                  (a) The Privacy Act 1988 (Cth) currently defines personal information as meaning information or an opinion about an identified individual or an individual who is reasonably identifiable:
                </p>
                <ul className="list-disc list-inside ml-4 md:ml-8 text-base md:text-lg">
                  <li>(i) whether the information or opinion is true or not; and</li>
                  <li>(ii) whether the information or opinion is recorded in a material form or not</li>
                </ul>
                <p className="text-base md:text-lg mt-4">
                  (b) If the information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as personal information and will not be subject to this privacy policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">2. What information do we collect?</h3>
                <p className="text-base md:text-lg">
                  The kind of personal information that we collect from you will depend on how you use the website. The personal information which we collect and hold about you may include: email address, name, phone number, address, login credentials, payment details, business information, etc.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">3. How we collect your personal information</h3>
                <p className="text-base md:text-lg mb-2 md:mb-4">
                  (a) We may collect personal information from you whenever you input such information into the website.
                </p>
                <p className="text-base md:text-lg mb-2 md:mb-4">
                  (b) We also collect cookies from your computer which enable us to tell when you use the website and also to help customize your website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">4. Purpose of collection</h3>
                <p className="text-base md:text-lg mb-2 md:mb-4">
                  (a) The purpose for which we collect personal information is to provide you with the best service experience possible on the website.
                </p>
                <p className="text-base md:text-lg mb-2 md:mb-4">
                  (b) We customarily disclose personal information only to our service providers who assist us in operating the website. Your personal information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties.
                </p>
                <p className="text-base md:text-lg">
                  (c) By using our website, you consent to the receipt of direct marketing material. We will only use your personal information for this purpose if we have collected such information directly from you, and if it is material of a type which you would reasonably expect to receive from us. We do not use sensitive personal information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">5. Access and correction</h3>
                <p className="text-base md:text-lg mb-2 md:mb-4">
                  Australian Privacy Principle 12 permits you to obtain access to the personal information we hold about you in certain circumstances, and Australian Privacy Principle 13 allows you to correct inaccurate personal information subject to certain exceptions. If you would like to obtain such access, please contact us as set out below.
                </p>
                <p className="text-base md:text-lg">
                  Global users have the right to request access to their personal information held by P8IO Pty. Ltd. and to request corrections or updates to ensure its accuracy. Requests for access or correction should be made in writing to support@p8.io. P8IO Pty. Ltd. will respond to such requests within a reasonable timeframe in accordance with applicable data protection laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">6. Complaint procedure</h3>
                <p className="text-base md:text-lg">
                  If you have a complaint concerning the manner in which we maintain the privacy of your personal information, please contact us as set out below. All complaints will be considered by our risk team and we may seek further information from you to clarify your concerns. If we agree that your complaint is well-founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">7. Overseas transfer</h3>
                <p className="text-base md:text-lg">
                  Your personal information may be transferred overseas or stored overseas for a variety of reasons. It is not possible to identify each and every country to which your personal information may be sent. If your personal information is sent to a recipient in a country with data protection laws which are at least substantially similar to the Australian Privacy Principles, and where there are mechanisms available to you to enforce protection of your personal information under that overseas law, we will not be liable for a breach of the Australian Privacy Principles if your personal information is mishandled in that jurisdiction. If your personal information is transferred to a jurisdiction which does not have data protection laws as comprehensive as Australia, we will take reasonable steps to secure a contractual commitment from the recipient to handle your information in accordance with the Australian Privacy Principles.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">8. GDPR</h3>
                <p className="text-base md:text-lg">
                  In some circumstances, the European Union General Data Protection Regulation (GDPR) provides additional protection to individuals located in Europe. The fact that you may be located in Europe does not, however, on its own entitle you to protection under the GDPR. Our website does not specifically target customers located in the European Union and we do not monitor the behaviour of individuals in the European Union, and accordingly the GDPR does not apply.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">9. How to contact us about privacy</h3>
                <p className="text-base md:text-lg">
                  If you have any queries, or if you seek access to your personal information, or if you have a complaint about our privacy practices, you can contact us through: support@p8.io
                </p>
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Privacy;
