import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Images from '../constants/Images';
import { motion } from "motion/react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();

    const serviceId = "service_kwa6caf";
    const templateId = "template_iiz5q0j";
    const publicKey = "XYEWY2IxbOxpsm_WW";

    const templateParams = {
      form_name: formData.name,
      form_email: formData.email,
      form_phone: formData.phone,
      message: formData.message,
      to_name: 'Imad Azaalam'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error("Failed to send email", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[300px] bg-black mb-20">
              <img
                alt="Blog Banner"
                src={Images.carousel3}
                className="object-cover w-full h-full opacity-50"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-white font-bold text-5xl">Contact</h1>
              </div>
            </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.058438495086!2d-7.531276774991609!3d33.6037881733291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sar!2sma!4v1751406622824!5m2!1sar!2sma"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="lg:w-1/2 bg-white p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-light text-gray-800 mb-8">Send us your message</h2>

            <form onSubmit={handleSend} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={4}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent resize-none"
              />

              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-wide"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
