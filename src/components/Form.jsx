import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: 'Darren',
    email: 'darren55@email.co.uk',
    message: '', // Add message field to form
    referral: '', // Add referral field to form
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData({...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" , referral: "" }); // Reset form after submit
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message:
            <textarea
              class="MessageTxtArea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
          <div className="form-group">
          <label>
            Where did you hear about us?
            <select name = "referral" value={formData.referral} onChange={handleChange}>
              <option value="Search Engine">Google</option>
              <option value="Social Media">Media</option>
              <option value="Word of mouth">Word of mouth</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
