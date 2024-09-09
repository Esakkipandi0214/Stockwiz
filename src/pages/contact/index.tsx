import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaGamepad } from 'react-icons/fa';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';  // Import Firestore instance
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'contacts'), formData);
      console.log('Document written with ID: ', docRef.id);
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: 'General enquiry',
        message: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to send message. Please try again later.');
    }
   
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-12 bg-gradient-to-r from-black to-blue-900 text-white">
      {/* Left Section: Contact Information */}
      <div className="w-full lg:w-1/3 bg-gray-800 p-6 sm:p-10 rounded-lg mb-8 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Contact Information</h2>
        <p className="mb-4 sm:mb-6">Say something to start a live chat!</p>
        <div className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center">
          <FaPhoneAlt className="mr-2" />+91 9962323022
        </div>
        <div className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center">
          <FaEnvelope className="mr-2" />tethertrades10101@gmail.com
        </div>
        <div className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center">
          <FaMapMarkerAlt className="mr-2" />Thambuchetty street, Mannadi, Chennai, 600 001
        </div>
        <div className="mt-4 sm:mt-8 flex">
          <a href="#" className="text-xl sm:text-2xl mr-4"><FaTwitter /></a>
          <a href="#" className="text-xl sm:text-2xl mr-4"><FaInstagram /></a>
          <a href="#" className="text-xl sm:text-2xl"><FaGamepad /></a>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <form onSubmit={handleSubmit} className="w-full lg:w-2/3 bg-gray-900 p-6 sm:p-10 rounded-lg lg:ml-8">
        <h1 className="relative z-10 text-2xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 font-sans font-bold mb-4">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-base sm:text-lg mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-base sm:text-lg mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-base sm:text-lg mb-2">Select Subjects</label>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <label className="flex items-center mb-2 sm:mb-0">
              <input
                type="radio"
                name="subject"
                value="General enquiry"
                checked={formData.subject === 'General enquiry'}
                onChange={handleSubjectChange}
                className="mr-2 relative z-10"
              />
              General enquiry
            </label>
            <label className="flex items-center mb-2 sm:mb-0">
              <input
                type="radio"
                name="subject"
                value="Product enquiry"
                checked={formData.subject === 'Product enquiry'}
                onChange={handleSubjectChange}
                className="mr-2 relative z-10"
              />
              Product enquiry
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="Partner with us"
                checked={formData.subject === 'Partner with us'}
                onChange={handleSubjectChange}
                className="mr-2 relative z-10"
              />
              Partner with us
            </label>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-base sm:text-lg mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 sm:p-3 rounded relative z-10 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-green-500 h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full relative py-3 rounded bg-blue-400 hover:bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 text-white font-semibold text-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
      <BackgroundBeams className='' />
    </div>
  );
};
export default ContactPage;
