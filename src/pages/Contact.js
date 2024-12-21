import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4facfe;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  background: #4facfe;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #3a8fde;
  }
`;

const StatusMessage = styled.p`
  font-size: 1rem;
  color: ${({ success }) => (success ? 'green' : 'red')};
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const updatedFormData = {
      from_name: formData.name, // Maps to {{from_name}}
      to_name: 'Françoise',     // Maps to {{to_name}}
      message: formData.message, // Maps to {{message}}
    };

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your Service ID
        'YOUR_TEMPLATE_ID', // Replace with your Template ID
        updatedFormData,
        'YOUR_PUBLIC_KEY' // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear the form
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <FormContainer>
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
      {status && <StatusMessage success={status.includes('successfully')}>{status}</StatusMessage>}
    </FormContainer>
  );
};

export default Contact;