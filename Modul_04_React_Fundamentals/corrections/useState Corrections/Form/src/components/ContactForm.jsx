import { useState } from 'react';

const ContactForm = () => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, telephone, message } = formData;
    if (!name || !email || !telephone || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Telephone:
            <input
              type='number'
              name='telephone'
              value={formData.telephone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
