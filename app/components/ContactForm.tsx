"use client"; // Required for state and form handling
import React, { useState } from 'react';
import { BentoGridItem } from './BentoGridItem';

/**
 * A contact form component with state management and submission handling.
 */
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // TODO: Replace with your actual API endpoint for sending email
    // Example: await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });
    console.log('Form data submitted:', formData);
    
    // Simulate API call for demonstration
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('Message sent!');
    setFormData({ name: '', email: '', message: '', budget: '' }); // Reset form
    
    // Clear status message after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <BentoGridItem className="p-6 lg:col-span-2" id="contact">
      <h3 className="text-xl font-bold text-white mb-4">CONTACT</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#2a2a2a] rounded-lg border-transparent text-white px-4 py-2 focus:ring-2 focus:ring-white focus:outline-none" placeholder="Name" required/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#2a2a2a] rounded-lg border-transparent text-white px-4 py-2 focus:ring-2 focus:ring-white focus:outline-none" placeholder="Email" required/>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-[#2a2a2a] rounded-lg border-transparent text-white px-4 py-2 focus:ring-2 focus:ring-white focus:outline-none" placeholder="Tell me more about your project..." required></textarea>
        <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#2a2a2a] rounded-lg border-transparent text-gray-400 px-4 py-2 focus:ring-2 focus:ring-white focus:outline-none">
            <option value="">Project Budget (optional)</option>
            <option value="< $5,000">&lt; $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
        </select>
        <button type="submit" disabled={status === 'Sending...'} className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {status || 'Submit'}
        </button>
      </form>
    </BentoGridItem>
  );
};
