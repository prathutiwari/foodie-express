import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-10">

      <div className="flex-1 w-full max-w-lg bg-white p-8 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Have questions? Fill out the form, and we’ll get back to you soon! 📩
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Message Field */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-600 text-center mt-4 font-medium">
            Thank you, {formData.name}! We will contact you shortly. 😊
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
