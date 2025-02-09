import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageType, setMessageType] = useState('');

   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');
    setMessageType('');

    try {
      // Updated endpoint to match the backend route
      const response = await axios.post('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
       console.log('Response:', response);
      if (response.status === 200 || response.status === 201) {
        setMessageType('success');
        setResponseMessage(response.data.message || 'Message sent successfully! Thank you for contacting me.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setMessageType('error');
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setMessageType('error');
      setResponseMessage(
        error.response?.data?.message || 
        'An error occurred while submitting the form. Please try again.'
      );
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto max-w-md">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-md transition-colors ${
              isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {responseMessage && (
          <div 
            className={`mt-6 p-4 rounded-md text-center ${
              messageType === 'success' 
                ? 'bg-green-500/20 text-green-100' 
                : 'bg-red-500/20 text-red-100'
            }`}
          >
            {responseMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
