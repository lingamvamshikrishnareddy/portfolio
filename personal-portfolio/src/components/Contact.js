import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const { message } = await response.json();
        setResponseMessage(`Error: ${message}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred while submitting the form.');
      console.error('Error:', error); // Log the error for debugging
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        {responseMessage && (
          <p className="mt-6 text-center text-white">{responseMessage}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
