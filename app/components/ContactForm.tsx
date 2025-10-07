'use client';

import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      setStatus('Error: Could not send message.');
    }
  };

  return (
    <div id="contact" className="p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold text-white mb-4">CONTACT</h3>
      <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-[#2a2a2a] rounded-lg border-transparent text-white px-4 py-2 focus:ring-2 focus:ring-white focus:outline-none"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#2a2a2a] rounded-lg border-transparent text-white px-4 py-2 focus:ring-2 focus:ring-white focus:outline-none"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#2a2a2a] rounded-lg border-transparent text-white px-4 py-2 focus:ring-2 focus:ring-white focus:outline-none flex-grow"
          placeholder="Tell me more about your project..."
          required
        ></textarea>
        <button
          type="submit"
          disabled={status === 'Sending...'}
          className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors disabled:bg-gray-400"
        >
          {status === 'Sending...' ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};