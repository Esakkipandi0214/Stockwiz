import Link from 'next/link';
import React from 'react';
import { TracingBeam } from "../../Components/UI/tracing-beam";



const TermsAndConditions: React.FC = () => {


  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <TracingBeam className="px-2">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Terms & Conditions
        </h1>
      </div>

      {/* Content */}
      <div className="px-12 md:px-32">
        <h2 className="text-xl font-bold mb-4">PLATFORM TERMS OF SERVICE</h2>
        <div className='text-lg'>
        <p className="mb-4">
          These Platform Terms of Service (“Terms”) form a legally-binding contract between Stockwiz Technologies LLP,
          a company incorporated under the Companies Act, 2013 having LLPIN: ABZ-8167 and having its registered office
          at 979, Third Floor Mehta Sonography Center Building, 5th Road, Near Geeta Bhawan, Jodhpur 342003, Rajasthan, 
          India (herein, “Stockwiz”) and the person visiting, accessing, or transacting on the Stockwiz Platform 
          (defined hereinafter) (herein, “you”).
        </p>
        <p className=" mb-4">
          If you are acting on behalf of a legal entity, then you represent to Stockwiz that you have the authority 
          to bind such entity to these Terms and, in such case, the term “you” shall refer to such entity. You will be 
          considered to have agreed to these Terms if you access, or transact on or through the Stockwiz Platform, 
          or avail any of the services offered by Stockwiz.
        </p>
        <p className="mb-4">
          If you do not agree with these Terms, then you must immediately cease your use and access of the Stockwiz 
          Platform and not avail any of the services offered by Stockwiz.
        </p>
        <p className="mb-4">
          By continuing to access and/or use the Stockwiz Platform, or by availing any of the services offered by 
          Stockwiz, you confirm that you have read, understood and accepted these Terms.
        </p>
        </div>
        <br />

        <div className="flex text-lg">
      {/* Sidebar */}
      
      
      <div className="p-7 h-5/6 w-72 bg-black text-white flex flex-col rounded-xl border-2 border-white overflow-auto">
      
      <h2 className="text-xl font-bold mb-4">CONTENTS</h2>
  <ul className="space-y-2">
    <hr />
    <li><Link href="#background" className="hover:text-green-400">1. Background</Link></li>
    <li><Link href="#constitution" className="hover:text-green-400">2. Constitution of these Terms</Link></li>
    <li><Link href="#registration" className="hover:text-green-400">3. Registration and access</Link></li>
    <li><Link href="#services" className="hover:text-green-400">4. Services provided over the Stockwiz Platform</Link></li>
    <li><Link href="#fees" className="hover:text-green-400">5. Fees and commercial terms</Link></li>
    <li><Link href="#intellectual-property" className="hover:text-green-400">6. Intellectual property rights</Link></li>
    <li><Link href="#representations" className="hover:text-green-400">7. Representations and Warranties</Link></li>
    <li><Link href="#disclaimers" className="hover:text-green-400">8. Disclaimers</Link></li>
    <li><Link href="#limitation" className="hover:text-green-400">9. Limitation of liability</Link></li>
    <li><Link href="#indemnification" className="hover:text-green-400">10. Indemnification</Link></li>
  </ul>
</div>


      {/* Main Content */}
      <div className="w-3/4 h-screen overflow-auto ">
      <main className="w-full bg-black p-8 text-lg">
        {/* Background Section */}
        <section id="background">
          <h2 className="text-2xl font-bold mb-4">1. Background</h2>
          <p className="mb-4">
            1.1 Stockwiz Technologies LLP offers a proprietary technology platform (the Stockwiz Platform) which comprises
            the web portal at <a href="#" className="text-blue-500">www.stockwiz.in</a>, and APIs, SDKs, tools, plugins, code, technology, content,
            and services linked thereto that, inter alia, facilitate through technology the interaction of the users of the
            Stockwiz Platform with SEBI-registered research analysts and SEBI-registered stock brokers.
          </p>
          <p className="mb-4">
            1.2 Stockwiz Technologies LLP is a SEBI Registered Research Analyst having license number INH000013925 whereas
            Stockwiz Fintech Private Limited is not a SEBI-registered entity and it does not issue research reports or make
            recommendations. It is merely a technology company that facilitates coordination between its users and the
            abovementioned SEBI-registered entities.
          </p>
          <p className="mb-4">
            1.3 The Stockwiz Platform enables its users to subscribe to a series of the research reports issued by associated
            SEBI-registered research analysts under a particular research model or strategy or style of trading. A user may,
            if they so elect, act upon the recommendations contained in such research reports through the Stockwiz Platform by
            placing orders for execution of transactions in Securities with their SEBI-registered stock brokers associated with
            Stockwiz Platform.
          </p>
        </section>

        {/* Earning Rewards Section */}
        <section id="constitution">
          <h2 className="text-2xl font-bold mb-4">2. Constitution</h2>
          <ul className="list-disc pl-8 mb-4">
          <p className="mb-4">
    2.1 These Terms include by reference Stockwiz entire legal infrastructure (including its Privacy Policy, Cookie Policy and Disclaimers), which are an integral part of these Terms. Stockwiz’s legal infrastructure that regulates a user’s access and use of the Stockwiz Platform is available at the URL <a href="https://www.stockwiz.in/terms-conditions" className="text-blue-500">https://www.stockwiz.in/terms-conditions</a>.
  </p>
  <p className="mb-4">
    2.2 Stockwiz may revise these Terms from time to time, by uploading the updated version of these Terms at the URL <a href="https://www.stockwiz.in/terms-conditions" className="text-blue-500">https://www.stockwiz.in/terms-conditions</a> and notifying its users of such revision. By continuing to access and/or use the Stockwiz Platform, or by availing any of the services offered by Stockwiz thereafter, a user will be considered to have accepted the provisions of these updated Terms.
  </p>
  <p className="mb-4">
    2.3 The use by a user of the Investment Platform may involve services provided by third-party service providers (“Third-party Service Providers”). In respect of such services, the relevant service terms of the respective Third-party Service Providers will apply to such user.
  </p>
  <p className="mb-4">
    2.4 The use of the Investment Platform may be subject to additional terms which may be associated with certain events (such as promotions) or to certain features (such as features in beta mode). Stockwiz will notify these additional terms to the users from time to time and may be applicable to users who opt to participate in such events or to use such features.
  </p>
          </ul>
          </section>

          <section id='registration'>
          <h2 className="text-2xl font-bold mb-4">3. Registration and access</h2>
          <ul className="list-disc pl-8 mb-4">
          <p className="mb-4">
    3.1 The Stockwiz Platform allows users to create a user account. A user may browse the Stockwiz Platform over its website without creating a user account. However, some of the features of the Stockwiz Platform may not be available unless accessed through a user account over Stockwiz’s mobile app. At the time of creating a user account, the user will be required to submit certain information about themselves. Stockwiz or Third-party Service Providers may not verify the information so provided; it is the user’s responsibility to ensure that all information provided by them is true and accurate. It is recommended that users keep their account information current.
  </p>
  <p className="mb-4">
    3.2 A user’s access of their user account is based on a system of authentication using either a username and password, using an OAuth function, or using a one-time password linked to the user’s phone number and/or email address (such authentication system in each case being referred to as “Access Protocol”). A user is solely responsible for ensuring the security and privacy of their Access Protocol. Stockwiz will consider all actions conducted under an authenticated user account to have originated from the concerned user. A user must notify Stockwiz immediately in writing if they believe that their Access Protocol is compromised, or if any unauthorised access has occurred of or through their user account, or if any other breach of security has occurred with respect to their user account. Notwithstanding such notification, Stockwiz will not be liable for any loss that may be incurred by them as a result of an unauthorised access to their user account by reason of compromised Access Protocol.
  </p>
  <p className="mb-4">
    3.3 Stockwiz may use the details provided by a user to send announcements, messages, or other information. Users may elect to opt out of such communication, unless they pertain to delivery of services or associated matters.
  </p>
  <p className="mb-4">
    3.4 Stockwiz may, at its sole discretion, curtail a user’s access to the Stockwiz Platform without the need to assign a reason if
  </p>
  <p className="mb-4">
    (a) the user is in breach of any provisions of these Terms.
  </p>
  <p className="mb-4">
    (b) Stockwiz is unable to verify or authenticate any information provided by the user.
  </p>
  <p className="mb-4">
    (c) Stockwiz has reason to believe that the user’s actions may infringe on any third-party rights, breach any applicable law, or violate any order of a court or an executive authority, or are otherwise detrimental to its goodwill or may adversely affect the conduct of its business. If a user’s access has been curtailed, withheld, suspended, or terminated, then such user shall not attempt to re-register themselves on the Stockwiz Platform or to use the Stockwiz Platform in any manner whatsoever.
  </p>
  <p className="mb-4">
    3.5 Stockwiz reserves the right, at its sole discretion, to withhold, to suspend or to terminate a user’s access to the Stockwiz Platform without prior notice for any reasonable cause which may include routine maintenance activity and the findings of a fraud detection audit activity or violation of its community guidelines.
  </p>
  <p className="mb-4">
    3.6 The remedies available to Stockwiz hereunder are without prejudice to its entitlements under the law, including the right to recover any amount due to be paid by a user and to pursue such legal action as may be deemed necessary by Stockwiz.
  </p>
          </ul>
          </section>

          <section id='services'>
          <h2 className="text-2xl font-bold mb-4">4. Services provided over the Stockwiz Platform</h2>
          <ul className="list-disc pl-8 mb-4">
          <p className="mb-4">
    4.1 A user may read the open content published on the Stockwiz Platform and review the various products and services offered by or over the Stockwiz Platform without any obligation.
  </p>
  
  <p className="mb-4">
    4.2 A user may use the Stockwiz Platform for the following purposes:
  </p>
  
  <p className="mb-4">
    (a) To subscribe to the services of associated SEBI-Registered research analysts over the Stockwiz Platform. The scope and the commercial terms associated with such subscriptions shall be as per the Terms of Service offered by the concerned Research Analyst which may include Stockwiz Technologies LLP as well which is a SEBI Registered Research Analyst having license number INH000013925.
  </p>
  
  <p className="mb-4">
    (b) To receive recommendations and research reports issued by the research analysts as per the terms of the services subscribed to by them. Users will be notified about the issue of a recommendation and about the publication of the corresponding research report through one or more of email, SMS message, WhatsApp message, or a notification over Stockwiz’s mobile app.
  </p>
  
  <p className="mb-4">
    (c) To prompt the user to take action regarding a recommendation made under one or more research model or strategy or style of trading offered by research analyst, if the user so desires. Such prompt shall be enabled by the user by way of receiving a system notification generated by the Stockwiz mobile app. It is clarified that such prompt is not a recommendation made by Stockwiz Platform and is merely facilitation of communication between you and the SEBI-registered research analyst.
  </p>
  
  <p className="mb-4">
    (d) To execute the recommendations contained in the research report. Stockwiz will facilitate the placement of trading orders by a user with their associated stock broker through APIs provided by the stock broker. This facility will not be available in case where the user’s stock broker is not associated with the Stockwiz Platform or where the user’s stock broker has not provided such APIs. It is hereby clarified that you will be able to transact in Securities only through your stock broker. You will be required to maintain adequate balance with your stock broker to execute a trade. Stockwiz Platform is not a trading terminal, all the execution of the trade in stocks and securities is performed by stock brokers on their online trading platform. In order to transact in stocks and securities, you may be required to open a trading and/or a demat account with the concerned stock broker if you do not have such an account.
  </p>
  
  <p className="mb-4">
    4.3 Some of the functions of the Stockwiz Platform, by their very nature, are available exclusively over Stockwiz’s mobile app and require an internet connection to operate fully. For example, the generation of notifications depends on the system settings of the mobile device on which the Stockwiz app is installed, and requires such device to be connected to the internet. Users must download the Stockwiz mobile app to access the Stockwiz Platform and should ensure that the concerned device has a stable access to internet for the functionalities to perform as intended.
  </p>
  
  <p className="mb-4">
    4.4 While transacting in a Security or combination of Securities recommended by a SEBI-registered intermediary under a concerned research model or strategy or style of trading, you may be recommended to take certain action within a specified time or a price range, as the case may be. We are not responsible in case you fail to action the recommendations made in the research report in a timely manner. You are advised to read the research report and the recommendations made therein carefully before making any transaction in a Security or combination of Securities.
  </p>
  
  <p className="mb-4">
    4.5 Stockwiz Platform allows you to access an investment calculator which is an online tool that can help to calculate your investments while participating in a particular research model or strategy offered by the SEBI-registered research analyst. You may accept or fill-in an amount that you wish to invest in the research model offered by the SEBI-registered research analyst. You may note that the default amount flashed on the screen is merely an indicative number and is not recommendation made by the SEBI-registered research analyst and/or the Stockwiz Platform. You are not required to make an actual investment for using the investment calculator. All transactions in Securities can be made only through your stock broker. You may please note that the performance of any investment strategy or securities are subject to market risk. Investments in the securities market are subject to market risks and you should read all the related documents carefully and make an independent evaluation before investing and past performance is not indicative of future performance.
  </p>
            <li>Examples of misuse may include but are not limited to creating multiple accounts to accumulate points, taking actions with the intention of reversing them after earning points, or attempting to hack or manipulate the system.</li>
          </ul>
          </section>

          <section id='fees'>
          <h2 className="text-2xl font-bold mb-4">5. Fees and commercial terms</h2>
          <ul className="list-disc pl-8 mb-4">
          <p className="mb-4">
    5.1 Stockwiz may charge the user a platform subscription fee (“Platform Fee”) for the use by the user of the Stockwiz Platform as listed in section 4.2 above. The Platform Fee will be applicable in respect of a subscription to one or more research models or strategies offered by research analysts and will be displayed at the time of subscription to such services. The Platform Fee will be charged for the period of the concerned subscription fully in advance as a flat-fee.
  </p>
  
  <p className="mb-4">
    5.2 Research analysts registered on the Stockwiz Platform may offer remissions on their fees in case of bundled subscriptions i.e., subscription to more than one particular research model or strategies under a particular subscription plan. The subscription fee payable in respect of such combination shall be displayed along with the Platform Fee to the user at the time of subscription to such bundled subscription. Subscription fee paid by you for a particular subscription plan is appropriated amongst the research analysts based on the research models or strategies offered by them under the particular subscription plan.
  </p>
  
  <p className="mb-4">
    5.3 All fees are non-refundable and non-transferable, regardless of the circumstances in which a user may claim for a refund or transfer of credit of fees.
  </p>
  
  <p className="mb-4">
    5.4 In addition to the Platform Fees and subscription fees of a research analyst, the user may incur charges that are conventional in trading of Securities, such as brokerage, demat account fees, depository fees, securities transaction tax, etc., which are to be borne exclusively by the user in the course of their trading over the Stockwiz Platform.
  </p>
          </ul>
        </section>

        <section id="intellectual-property">
          <h2 className="text-2xl font-bold mb-4">6. Intellectual property rights</h2>
          <p className="mb-4">
    6.1 Any personal information or details belonging to a user that are provided by the user while availing or accessing the Stockwiz Platform, belong solely to the concerned user.
  </p>
  
  <p className="mb-4">
    6.2 In consideration of a user’s acceptance and continuing compliance with the provisions of these Terms, Stockwiz grants the user a restricted, revocable, non-exclusive, non-transferable license (“License”) to access and use the Stockwiz Platform. The License is revocable at-will, without issue of prior notice.
  </p>
  
  <p className="mb-4">
    6.3 Stockwiz (and its licensors, where applicable) own all right, title and interest, including all related intellectual property rights, in and to the content featured on the Stockwiz Platform, the service rendered thereby. Stockwiz exclusively owns all intellectual property rights in all suggestions, ideas, enhancement requests, feedback, recommendations or other information provided by a user or any other party to Stockwiz. A user shall not create, prepare, distribute, exchange, copy, adapt, modify, sell, transmit, publicly display, publicly perform, broadcast any work which is a derivative of or which is based upon such intellectual property, doing so would levy a fine of Rs 5 Crores or the damage caused by such distribution, whichever is higher.
  </p>
  
  <p className="mb-4">
    6.4 These Terms do not convey to a user any rights of ownership in or related to the Stockwiz Platform or the intellectual property rights owned by Stockwiz or by its licensors. The Stockwiz name, the Stockwiz logo, and the names associated with the Stockwiz Platform are trademarks of Stockwiz and other third parties, and no right of any nature therein is granted to a user.
  </p>
  
  <p className="mb-4">
    6.5 The License granted by Stockwiz to user to access and use the Stockwiz Platform may be automatically revoked without any forenotice in case of the user attempts, indulges in, or encourages any of the following:
  </p>
  
  <ul className="list-disc pl-5 mb-4">
    <li>a breach of any provisions of these Terms.</li>
    <li>a violation of any law or regulation or any order of a court or an executive authority that disallows or otherwise restricts the user from conducting transactions in Securities or in the capital markets.</li>
    <li>use of manual or automated software, devices, scripts robots, other means or processes to access, scrape, crawl or spider any web pages or other assets of or related to the Stockwiz Platform.</li>
    <li>use of the Stockwiz Platform for any purpose that is not expressly permitted by these Terms.</li>
    <li>copying, storage or otherwise accessing of any information contained on or related to the Stockwiz Platform for purposes not expressly permitted by these Terms.</li>
    <li>infringement of the rights of any person or entity, including without limitation, intellectual property rights, privacy rights, publicity rights or contractual rights.</li>
    <li>interference with the working of the Stockwiz Platform, including, without limitation, through the use of viruses, cancel bots, trojans, harmful code, flood pings, denial-of-service attacks, packet or IP spoofing, forged routing or electronic mail address information or similar methods or technology.</li>
    <li>use of the Stockwiz Platform to transmit, distribute, post or submit any information that may be immoral, illegal or otherwise undesirable.</li>
    <li>immoral, illegal or otherwise undesirable conduct in respect of the Stockwiz Platform any person or entity associated therewith.</li>
    <li>registration for more than one user account or registration of a user account on behalf of another person without express permission of such other person.</li>
    <li>a probe, scan or test of vulnerability of the Stockwiz Platform.</li>
    <li>a breach or bypass of any security or authentication measures.</li>
    <li>an action to decipher, decompile, disassemble or reverse engineer any of the software used in the Stockwiz Platform, or to provide the services, products or content. This right of Stockwiz is without prejudice to its other rights under the applicable law.</li>
  </ul>

        </section>
        <section id='representations'>
        <h2 className="text-2xl font-bold mb-4">7. Representations and Warranties</h2>
        <p className="mb-4">
    7.1 By accepting the provision of these Terms, the user represents to Stockwiz that:
  </p>
  
  <ul className="list-disc pl-5 mb-4">
    <li>(a) they are a person ‘competent to contract’ under the Indian Contract Act, 1872 and are not disqualified from accessing and using the Stockwiz Platform as is generally expected by either operation of law (including by reason of their domicile or citizenship), by the order of a court or any statutory authority, or by provisions of any contract by which they are bound.</li>
    <li>(b) they are not disqualified from transacting in Securities in the Indian capital markets.</li>
    <li>(c) they have reviewed all the legal documents available at the URL https://www.stockwiz.in/terms-conditions and have satisfied themselves about their ability and willingness to comply with the provisions of these documents.</li>
    <li>(d) they will not knowingly breach any of the aforementioned representations, and they will promptly cease their use of the Stockwiz Platform if their position concerning any of the aforementioned representations changes in any manner.</li>
  </ul>
  
  <p className="mb-4">
    7.2 Stockwiz reserves the right to take suitable action without forenotice, which may include suspension or revocation of the user’s account access and rights, in case any of these representation or warranties are found to be false or incorrect at any time.
  </p>
        </section>
        <section id='disclaimers'>
        <h2 className="text-2xl font-bold mb-4">8. Disclaimers</h2>
        <p className="mb-4">
    8.1 Other than as expressly set out in these Terms, Stockwiz and Third-party Service Providers make no specific promises, extend no assurances, and provide no guarantees about the services provided or about the outcome of such services.
  </p>
  
  <p className="mb-4">
    8.2 Investments in Securities are subject to various risks, including market-related risks. Users must read and understand all investment-related documents carefully before making a decision to invest. Stockwiz advises its users to obtain expert professional advice with regard to specific legal, tax and financial implications of any potential investment decision before investing.
  </p>
  
  <p className="mb-4">
    8.3 Stockwiz provides no guarantee to users of, and does not assure users of, any fixed return, or a return on investment at all or even a return of their principal investment.
  </p>
  
  <p className="mb-4">
    8.4 The user acknowledges and agrees that the Stockwiz Platform is provided on an “as-is,” and “as-available” basis, without warranty of any kind, either express or implied, to the maximum extent permitted by applicable laws. Except as expressly set out in these Terms, Stockwiz expressly disclaims any and all promises, representations and warranties, whether express or implied, including, but not limited to, any implied warranties of merchantability, fitness for a particular purpose, quiet enjoyment, system integration and/or data accuracy in connection with use of the Stockwiz Platform. Stockwiz does not warrant that the Stockwiz Platform, any application service or any other services provided by Stockwiz will meet the user’s requirements or that the operation of the Stockwiz Platform, any application service or any other services will be uninterrupted or error-free, or that all errors will be corrected. Stockwiz makes no warranty regarding the quality of the Stockwiz Platform and the associated services, or a user’s ability to use the Stockwiz Platform, or the timeliness, truthfulness, completeness or reliability of any information obtained through the Stockwiz Platform.
  </p>
  
  <p className="mb-4">
    8.5 Information is provided over the Stockwiz Platform on a best-effort basis and should not be regarded as verified by Stockwiz for accuracy or completeness.
  </p>
  
  <p className="mb-4">
    8.6 A user is solely responsible for all of their communications and interactions through the Stockwiz Platform with a third-party, including, without limitation, research analysts and stock brokers. Stockwiz makes no representations or warranties as to the conduct or quality of services of such third-parties.
  </p>
        </section>
        <section id='limitation'>
        <h2 className="text-2xl font-bold mb-4">9. Limitation of liability</h2>
        <p className="mb-4">
    9.1 Notwithstanding anything to the contrary contained elsewhere, the total liability of Stockwiz to a user for all claims arising from or relating to these Terms, including, without limitation, any claim for indemnification or any cause of action arising in contract, tort, or strict liability, will not exceed Rs. 1,000/- (Rupees One Thousand only). The user agrees that given the nature of services to be provided by Stockwiz being merely those of a technology platform, this limitation of liability is fair, equitable and reasonable. The user acknowledges that their acceptance of this limitation of liability is the basis of the legally binding agreement constituted hereby and that absent such acceptance, this agreement would not have been consented to by Stockwiz.
  </p>
  
  <p className="mb-4">
    9.2 To the maximum extent permitted by law, the entire risks, damages and losses accruing to a user out of their use of the Stockwiz Platform remains with the user, irrespective of the cause of such risk, damage or loss. Stockwiz or its employees, representatives, agents, contractors, and licensors involved in creating or operating the Stockwiz Platform are not liable for any losses, regardless of
  </p>
  
  <p className="mb-4">
    (a) the basis of such losses including delay or non-performance by Stockwiz or Third-party Service Providers, server error, service interruption, system failure, etc. and
  </p>
  
  <p className="mb-4">
    (b) the nature of such losses such as lost profits, loss of data, loss of goodwill, computer damage, or the cost of substitute products or services, or personal or bodily injury or emotional distress arising out of or in connection with the user’s use of the Stockwiz Platform, etc., whether the claim for such losses is based on warranty, contract, law, tort (including negligence), product, content or service liability and irrespective of whether or not Stockwiz has been informed of the possibility of such damage, even if a limited remedy set forth herein is found to have failed its essential purpose.
  </p>
  
  <p className="mb-4">
    9.3 Notwithstanding any provision to the contrary, in respect of any loss or claims arising due to any deficiency or delay in rendering of the services related to the Stockwiz Platform, the user’s exclusive remedy and the entire liability of Stockwiz shall be the correction of such deficiency or delay on a going forward basis.
  </p>
  
  <p className="mb-4">
    9.4 In no event shall Stockwiz or Third-Party Service Providers be liable to a user or to a third-party in respect of any matter arising from or incidental to the use of the Stockwiz Platform for special, indirect, incidental or consequential damages.
  </p>
  
  <p className="mb-4">
    9.5 Notwithstanding any provision to the contrary, in respect of any loss or claims arising due to any deficiency or delay in rendering of the services. The disclaimers, exclusions and limitations of liability set forth herein form an essential basis of the contract between the user and Stockwiz. Stockwiz places reliance on the user’s acceptance of these Terms (including disclaimers, exclusions and limitations of liability) to agree to the provisions of these Terms, and that absent such disclaimers, exclusions and limitations of liability, the agreement constituted hereby would not have been consented to by Stockwiz.
  </p>
        </section>
        <section id='indemnification'>
        <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
        <p className="mb-4">
    10.1 The user agrees to release, defend, indemnify, and hold Stockwiz and its affiliates and subsidiaries, officers, directors, employees, contractors, sub-contractors and agents, harmless from and against any claims including third-party claims, liabilities, damages, losses, and expenses, including, without limitation, legal fees, arising out of or in any way connected with the breach of any provision of these Terms by the user.
  </p>

  <p className="mb-4">
    10.2. Stockwiz acknowledges and agrees to defend, indemnify, and hold the user harmless from and against any third-party claims arising out of infringement of any third-party intellectual properties in respect of the Stockwiz Platform (“Infringement Claims”) if the user provides Stockwiz with prior written notice of such third-party claims and gives Stockwiz the control to defend and settle any claim as per its exclusive discretion. In such a case, Stockwiz shall arrange for legal representative to defend the user and will hold the user harmless against any cost levied upon the user by the applicable judicial forum.
  </p>

        </section>
        
      </main>
      </div>
      </div>
      </div>
    
      </TracingBeam>
      </div>
  );
};

export default TermsAndConditions;
