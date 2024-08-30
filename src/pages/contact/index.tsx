import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaGamepad } from 'react-icons/fa';
import { BackgroundBeams } from "../../Components/UI/background-beams";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: 'General enquiry',
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      subject: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-between p-12 bg-gradient-to-r from-black to-blue-900  text-white">
      <div className="w-1/3 bg-gray-800 p-10 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
        <p className="mb-6">Say something to start a live chat!</p>
        <div className="mb-4 text-lg flex items-center">
          <FaPhoneAlt className="mr-2" />+91 7904210874
        </div>
        <div className="mb-4 text-lg flex items-center">
          <FaEnvelope className="mr-2" />info@digisailor.com
        </div>
        <div className="mb-4 text-lg flex items-center">
          <FaMapMarkerAlt className="mr-2" />97G/4C,1st Floor, PSS Jayam Towers Teachers Colony, Tuticorin
        </div>
        <div className="mt-8 flex">
          <a href="#" className="text-2xl mr-4"><FaTwitter /></a>
          <a href="#" className="text-2xl mr-4"><FaInstagram /></a>
          <a href="#" className="text-2xl"><FaGamepad /></a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-2/3 bg-gray-900 p-10 rounded-lg ml-8">
      <h1 className="relative z-10 text-xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-[#16FF00] to-black-400 font-sans font-bold mb-4">
      Contact Us
      </h1>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"/>
          </div>
          <div>
            <label className="block text-lg mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"/>
          </div>
          <div>
            <label className="block text-lg mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"/>
          </div>
        </div>

        <div className="mb-6"> 
          <label className="block text-lg mb-2">Select Subjects</label>
          <div className="flex justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="General enquiry"
                checked={formData.subject === 'General enquiry'}
                onChange={handleSubjectChange}
                className="mr-2 relative z-10"/>
              General enquiry
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="Product enquiry"
                checked={formData.subject === 'Product enquiry'}
                onChange={handleSubjectChange}
                className="mr-2 relative z-10"/>
              Product enquiry
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="Partner with us"
                checked={formData.subject === 'Partner with us'}
                onChange={handleSubjectChange}
                className="mr-2 relative z-10"/>
              Partner with us
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500 h-32 resize-none"/>
        </div>
     
        <button
          type="submit"
          className="w-full py-3 rounded bg-green-500 hover:bg-green-500 text-white font-semibold text-lg transition duration-300">
          Send Message
        </button>
      </form>
      <BackgroundBeams className='' />
    </div>
  );
};
export default ContactPage;

