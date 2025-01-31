import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 3rem auto;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3a86ff;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  margin-left: 1.5rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <Title>Privacy Policy</Title>
      <Paragraph>Effective Date: 01/02/2025</Paragraph>

      <Paragraph>
        Welcome to <strong>francoiselapetite.com</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR).
      </Paragraph>

      <SectionTitle>1. Data We Collect</SectionTitle>
      <Paragraph>We may collect the following personal data:</Paragraph>
      <List>
        <li>Information you provide via contact forms (name, email, message)</li>
        <li>Analytics data (e.g., cookies, IP addresses, browsing behavior)</li>
      </List>

      <SectionTitle>2. How We Use Your Data</SectionTitle>
      <Paragraph>We use your data to:</Paragraph>
      <List>
        <li>Respond to your messages and inquiries</li>
        <li>Improve website functionality and user experience</li>
        <li>Analyze traffic and optimize website performance (if analytics is used)</li>
      </List>

      <SectionTitle>3. Data Retention</SectionTitle>
      <Paragraph>
        We retain personal data for as long as necessary to fulfill the purposes outlined in this policy. Contact form data is stored for a maximum of <strong>6 months</strong>. Analytics data may be retained for up to <strong>12 months</strong>.
      </Paragraph>

      <SectionTitle>4. Your Rights Under GDPR</SectionTitle>
      <Paragraph>As a user, you have the right to:</Paragraph>
      <List>
        <li><strong>Access</strong> your personal data and request a copy</li>
        <li><strong>Modify</strong> or correct any inaccurate information</li>
        <li><strong>Request deletion</strong> of your personal data</li>
        <li><strong>Withdraw consent</strong> for data processing at any time</li>
        <li><strong>Restrict or object</strong> to certain types of processing</li>
      </List>
      <Paragraph>
        To exercise these rights, please contact us at the email provided below.
      </Paragraph>

      <SectionTitle>5. Cookies & Tracking</SectionTitle>
      <Paragraph>
        If we use cookies or tracking tools, you will be asked for consent when first visiting the website. You can also manage cookie preferences through your browser settings.
      </Paragraph>

      <SectionTitle>6. Contact Us</SectionTitle>
      <ContactInfo>
        <Paragraph>If you have any privacy-related concerns, please contact us:</Paragraph>
        <p><strong>Email:</strong> <a href="mailto:fran.lapetite@gmail.com">fran.lapetite@gmail.com</a></p>
        <p><strong>Website:</strong> <a href="https://francoiselapetite.com">francoiselapetite.com</a></p>
      </ContactInfo>
    </PageContainer>
  );
};

export default PrivacyPolicy;