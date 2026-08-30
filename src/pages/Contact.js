import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section, Container, Eyebrow, PageTitle, Lede } from '../components/primitives';
import { useLanguage } from '../i18n';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const Intro = styled.div``;

const Direct = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    display: inline-block;
    margin-top: 0.3rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const FieldLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const inputStyles = `
  width: 100%;
  padding: 0.65rem 0;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--field-border);
  color: var(--field-text);
  transition: border-color 0.2s ease;

  &::placeholder {
    color: var(--field-placeholder);
  }

  &:focus {
    outline: none;
    border-bottom-color: var(--field-focus);
  }
`;

const Input = styled.input`
  --field-border: ${({ theme }) => theme.colors.border};
  --field-text: ${({ theme }) => theme.colors.textPrimary};
  --field-placeholder: ${({ theme }) => theme.colors.textMuted};
  --field-focus: ${({ theme }) => theme.colors.textPrimary};
  ${inputStyles}
  font-family: inherit;
`;

const TextArea = styled.textarea`
  --field-border: ${({ theme }) => theme.colors.border};
  --field-text: ${({ theme }) => theme.colors.textPrimary};
  --field-placeholder: ${({ theme }) => theme.colors.textMuted};
  --field-focus: ${({ theme }) => theme.colors.textPrimary};
  ${inputStyles}
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
`;

const Consent = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.88rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  a {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-top: 0.15rem;
  flex-shrink: 0;
  accent-color: ${({ theme }) => theme.colors.textPrimary};
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  padding: 0.85rem 1.9rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accentHover};
    border-color: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }

  &:active:not(:disabled) {
    transform: translateY(0) scale(0.97);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover:not(:disabled),
    &:active:not(:disabled) {
      transform: none;
    }
  }
`;

const StatusMessage = styled(motion.p)`
  font-size: 0.9rem;
  color: ${({ theme, $success }) => ($success ? theme.colors.success : theme.colors.error)};
`;

const Contact = () => {
  const { t } = useLanguage();
  const copy = t.contact;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [privacyChecked, setPrivacyChecked] = useState(false);
  /* Stored as a key, not a sentence, so an in-flight status re-renders in the
     newly selected language when the toggle is used. */
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!privacyChecked) {
      setStatus('needConsent');
      return;
    }

    setSending(true);
    setStatus('sending');

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('sent');
          setFormData({ name: '', email: '', message: '' });
          setPrivacyChecked(false);
          setSending(false);
        },
        () => {
          setStatus('error');
          setSending(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Layout>
          <Intro>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <PageTitle>{copy.title}</PageTitle>
            <Lede>{copy.lede}</Lede>
            <Direct>
              {copy.preferEmail}
              <br />
              <a href="mailto:fran.lapetite@gmail.com">fran.lapetite@gmail.com</a>
            </Direct>
          </Intro>

          <Form onSubmit={handleSubmit}>
            <Field>
              <FieldLabel>{copy.nameLabel}</FieldLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <FieldLabel>{copy.emailLabel}</FieldLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <FieldLabel>{copy.messageLabel}</FieldLabel>
              <TextArea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Field>

            <Consent>
              <Checkbox
                type="checkbox"
                checked={privacyChecked}
                onChange={(e) => setPrivacyChecked(e.target.checked)}
                required
              />
              <span>
                {copy.consentBefore}
                <Link to="/privacy-policy">{copy.consentLink}</Link>
                {copy.consentAfter}
              </span>
            </Consent>

            <SubmitButton type="submit" disabled={!privacyChecked || sending}>
              {sending ? copy.submitting : copy.submit}
            </SubmitButton>

            {status && (
              <StatusMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                $success={status === 'sent'}
              >
                {copy.status[status]}
              </StatusMessage>
            )}
          </Form>
        </Layout>
      </Container>
    </Section>
  );
};

export default Contact;
