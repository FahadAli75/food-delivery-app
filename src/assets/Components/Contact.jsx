import React from 'react';

const Contact = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-gray-500">123 Food Amma Chowk Swabi, Pakistan</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-500">03122222222</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-500">support@tomato.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <form className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2
                 focus:ring-orange-400"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2
                 focus:ring-orange-400"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2
                 focus:ring-orange-400"
              ></textarea>
              <button 
                type="submit" 
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;