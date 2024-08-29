import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8 rounded-lg text-white">
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-3xl font-bold text-center">Cookies Policy</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-4"><strong>Last updated:</strong> 15 Feb 2024</p>
        <p className="text-lg mb-4">
          This Website (referred to in these “terms of use” as the website) is owned and operated by Smaaker, who is referred to in this Cookie Policy as “we”, “us”, “our” and similar grammatical forms.
        </p>
        <p className="text-lg mb-4">
          Our Cookie Policy explains what cookies are, how we use cookies, how third-party partners may use cookies on our Websites and your choices regarding cookies.
        </p>
        <p className="text-lg mb-4">
          General information about visits to our Websites is collected by our computer servers, with small files “cookies” that our Websites transfers to your computer’s hard drive through your Web browser (if you allow the delivery of “cookies”). The “cookies” are used to follow the pattern of movements of users by letting us know which pages on our Websites are visited, in what order and how often and the previous website visited and also to process the items you select if you are making purchases from our Websites. The anonymous non-personal information that we collect and analyse is not personal information as described in the Privacy Act.
        </p>

        <h3 className="text-2xl font-bold mb-4">1. Why do we use “cookies” and other web use tracking technologies?</h3>
        <ul className="pl-5 list-disc">
          <li className="text-lg mb-4">
            (a) When you access our Website, small files containing a unique identification (ID) number may be downloaded by your web browser and stored in the cache of your computer. The purpose of sending these files with a unique ID number is so that our Website can recognise your computer when you next visit our Website. The “cookies” that are shared with your computer can’t be used to discover any personal information such as your name, address or email address they merely identify your computer to our Websites when you visit us.
          </li>
          <li className="text-lg mb-4">
            (b) We can also log the internet protocol address (IP address) of visitors to our Website so that we can work out the countries in which the computers are located.
          </li>
          <li className="text-lg mb-4">
            (c) We collect information using “cookies” and other tracking technologies for the following reasons:
            <ul className="pl-5 list-decimal">
              <li className="text-lg mb-4">
                (i) To help us monitor the performance of our Website so that we can improve the operation of the Website and the services we offer;
              </li>
              <li className="text-lg mb-4">
                (ii) To provide personalised services to each user of our Website to make their navigation through our Website easier and more rewarding to the user;
              </li>
              <li className="text-lg mb-4">
                (iii) To sell advertising on the Website in order to meet some of the costs of operating the Website and improve the content on the Website; and
              </li>
              <li className="text-lg mb-4">
                (iv) When we have permission from the user, to market the services we provide by sending emails that are personalised to what we understand are the interests of the user.
              </li>
            </ul>
          </li>
          <li className="text-lg mb-4">
            (d) Even if you have given us permission to send you emails, you can, at any time, decide not to receive further emails and will be able to “unsubscribe” from that service.
          </li>
          <li className="text-lg mb-4">
            (e) In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website, deliver advertisements on and through the Website, and so on.
          </li>
        </ul>
        
        <h3 className="text-2xl font-bold mb-4">What are your choices regarding cookies?</h3>
        <p className="text-lg mb-4">
          If you are unhappy about having a cookie sent to you, you can set your browser to refuse cookies or choose to have your computer warn you each time a cookie is being sent. However, if you turn your cookies off, some of our services may not function properly.
        </p>
      </div>
    </div>
  );
};

export default CookiesPolicy;
