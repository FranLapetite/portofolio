import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  position: relative;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #3a86ff, #00b2fe);

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 300px;
    bottom: 0;
    left: 0;
    background: white;
    clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #f9f9f9;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const Form = styled.form`
  max-width: 400px;
  width: 100%;
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #3a86ff;
    box-shadow: 0px 0px 5px rgba(58, 134, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  resize: none;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #3a86ff;
    box-shadow: 0px 0px 5px rgba(58, 134, 255, 0.5);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  gap: 10px;
  text-align: left;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #3a86ff, #00b2fe);
  color: white;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 15px rgba(58, 134, 255, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StatusMessage = styled.p`
  font-size: 1rem;
  color: ${({ success }) => (success ? '#50fa7b' : '#ff5555')};
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setPrivacyChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!privacyChecked) {
      setStatus('Please agree to the Privacy Policy before submitting.');
      return;
    }

    setStatus('Sending...');

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          to_name: 'Françoise',
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setPrivacyChecked(false);
        },
        () => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <FormContainer>
      <Background />
      <Title>Contact Me</Title>
      <Description>
        Have a question, an idea, or want to collaborate? Feel free to send me a message!
      </Description>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <TextArea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required />
        
        <CheckboxContainer>
          <Checkbox type="checkbox" checked={privacyChecked} onChange={handleCheckboxChange} required />
          <label>
            I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </label>
        </CheckboxContainer>

        <Button type="submit" disabled={!privacyChecked}>Send</Button>
      </Form>
      {status && <StatusMessage success={status.includes('successfully')}>{status}</StatusMessage>}
    </FormContainer>
  );
};

export default Contact;