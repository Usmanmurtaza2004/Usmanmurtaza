import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

/* --------------------------- styled‑components --------------------------- */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 0 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  max-width: 600px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Form = styled.form`
  width: 95%;
  max-width: 600px;
  margin-top: 28px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
`;

const Label = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.text_primary};
`;

const Input = styled.input`
  padding: 12px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 12px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 12px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Submit = styled.input`
  margin-top: 2px;
  padding: 13px 16px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(225deg, #7e00ff 0%, #ff00c8 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

/* ------------------------------- component ------------------------------- */

const Contact = () => {
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setOpen(true);
          setError(false);
          formRef.current.reset();
        },
        err => {
          console.error(err.text);
          setError(true);
        }
      );
  };

  if (process.env.NODE_ENV === "development") {
    console.log("Contact component loaded");
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions&nbsp;or&nbsp;opportunities!
        </Desc>

        <Form ref={formRef} onSubmit={handleSubmit} noValidate>
          <Label>Email&nbsp;Me 🚀</Label>

          <Input
            name="from_email"
            type="email"
            placeholder="Enter your email"
            aria-label="Your email"
            required
          />
          <Input
            name="from_name"
            placeholder="Your name"
            aria-label="Your name"
            required
          />
          <Input
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            required
          />
          <TextArea
            name="message"
            rows="4"
            placeholder="Type your message here..."
            aria-label="Message"
            required
          />

          <Submit type="submit" value="Send" />
        </Form>

        {/* Success Snackbar */}
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" onClose={() => setOpen(false)} sx={{ width: '100%' }}>
            Email sent successfully!
          </Alert>
        </Snackbar>

        {/* Error Snackbar */}
        <Snackbar
          open={error}
          autoHideDuration={5000}
          onClose={() => setError(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="error" onClose={() => setError(false)} sx={{ width: '100%' }}>
            Failed to send email. Please try again.
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
